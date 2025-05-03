function openPopup() {
    document.getElementById("searchPopup").style.display = "flex";
    document.getElementById("searchInput").focus();
  }

  function closePopup() {
    document.getElementById("searchPopup").style.display = "none";
    document.getElementById("suggestions").innerHTML = "";
  }

  function searchGoogle() {
    const query = document.getElementById("searchInput").value;
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
      closePopup();
    }
  }

  function getSuggestions(query) {
    if (!query.trim()) {
      document.getElementById("suggestions").innerHTML = "";
      return;
    }

    const script = document.createElement("script");
    const cb = `cb_${Math.random().toString(36).substring(2)}`;
    window[cb] = function (data) {
      const suggestions = data[1];
      const container = document.getElementById("suggestions");
      container.innerHTML = suggestions.map(s => `<div onclick="selectSuggestion('${s}')">${s}</div>`).join('');
      delete window[cb];
      document.body.removeChild(script);
    };

    script.src = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}&callback=${cb}`;
    document.body.appendChild(script);
  }

  function selectSuggestion(text) {
    document.getElementById("searchInput").value = text;
    searchGoogle();
  }

  // Optional: close popup when clicking outside
  document.getElementById("searchPopup").addEventListener("click", (e) => {
    if (e.target.id === "searchPopup") closePopup();
  });