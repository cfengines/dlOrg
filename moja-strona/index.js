const express = require('express');
const app = express();

// Definiowanie kodu dostępu
const accessCode = 'TajnyKod123';

// Obsługa żądania GET na głównym adresie
app.get('/', (req, res) => {
  // Sprawdzanie, czy kod dostępu jest przesyłany w parametrze "code" w adresie URL
  const code = req.query.code;

  if (code === accessCode) {
    // Jeśli kod dostępu się zgadza, zwracamy stronę z zawartością
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/style.css">
          <script src="/script.js"></script>
        </head>
        <body>
          <h1>Strona z ograniczonym dostępem</h1>
          <p>To jest zawartość dostępna tylko dla osób posiadających prawidłowy kod dostępu.</p>
        </body>
      </html>
    `);
  } else {
    // Jeśli kod dostępu nie zgadza się, wyświetlamy formularz do wprowadzenia kodu
    res.send(`
      <html>
        <head>
          <title>Strona z ograniczonym dostępem</title>
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
          <h1>Strona z ograniczonym dostępem</h1>
          <p>Wprowadź kod dostępu:</p>
          <form action="/" method="get">
            <input type="text" name="code">
            <input type="submit" value="Wyślij">
          </form>
        </body>
      </html>
    `);
  }
});

// Udostępnianie plików statycznych (HTML, CSS, JS)
app.use(express.static('public'));

// Uruchomienie serwera na porcie 3000
app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
