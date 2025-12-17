const quotes = [
      "No power is more costly than ignorance.",
      "Scientific research is the key to progress.",
      "A country’s future depends on science and technology.",
      "Knowledge is the real strength of a nation."
    ];

    function changeQuote() {
      const quoteElement = document.getElementById("quote");
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = '"' + quotes[randomIndex] + '"';
    }