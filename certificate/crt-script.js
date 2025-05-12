const certificates = {
      "B54321XZ2": {
        jpg: "documents/123.jpg",
        pdf: "documents/123.pdf"
      },
      "B54321XZ1": {
        jpg: "certificates/css-advanced.jpg",
        pdf: "certificates/css-advanced.pdf"
      }
    };

function verifyCert() {
      const inputCode = document.getElementById('certInput').value.trim();
      const certArea = document.getElementById('certificateArea');
      const certImage = document.getElementById('certificateImage');
      const downloadLink = document.getElementById('downloadLink');
      const loader = document.getElementById('loader');
      const errorMsg = document.getElementById('errorMsg');

      // Hide previous outputs
      certArea.classList.add("hidden");
      errorMsg.classList.add("hidden");

      // Show loader
      loader.classList.remove("hidden");

      setTimeout(() => {
        loader.classList.add("hidden"); // Hide loader

        if (certificates[inputCode]) {
          certImage.src = certificates[inputCode].jpg;
          downloadLink.href = certificates[inputCode].pdf;
          downloadLink.download = `${inputCode}_certificate.pdf`;
          certArea.classList.remove("hidden");
        } else {
          errorMsg.classList.remove("hidden");
        }
      }, 1500); // Simulate delay
    }


// Auto-check if ?code=XYZ exists in the URL
    window.onload = function () {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      if (code) {
        document.getElementById('certInput').value = code;
        verifyCert();
      }
    };