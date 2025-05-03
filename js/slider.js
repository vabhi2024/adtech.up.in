let slideIndex = 1;
    const carousel = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('.carousel img').length - 2; // Exclude clones

    function moveSlide(direction) {
      slideIndex += direction;
      updateSlide();
    }

    function updateSlide() {
      const offset = -slideIndex * 100;
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${offset}%)`;

      // Handle Infinite Loop Effect
      setTimeout(() => {
        if (slideIndex >= totalSlides + 1) {
          slideIndex = 1;
          carousel.style.transition = "none";
          carousel.style.transform = `translateX(-100%)`;
        }
        if (slideIndex <= 0) {
          slideIndex = totalSlides;
          carousel.style.transition = "none";
          carousel.style.transform = `translateX(-${totalSlides * 100}%)`;
        }
      }, 500);
    }

    // Auto Slide Every 3 Seconds
    setInterval(() => moveSlide(1), 3000);

    // Initial Position
    carousel.style.transform = `translateX(-100%)`;
 

