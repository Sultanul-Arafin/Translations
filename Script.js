// script.js
document.getElementById('translate-btn').addEventListener('click', function() {
    const sourceText = document.getElementById('source-text').value;
    const sourceLang = document.getElementById('source-lang').value;
    const targetLang = document.getElementById('target-lang').value;

    if (sourceText === "") {
        alert("Please enter text to translate.");
        return;
    }

    // Call the translation API (Google Translate or another)
    fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
        method: 'POST',
        body: JSON.stringify({
            q: sourceText,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        document.getElementById('translated-text').value = translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while translating.");
    });
});
