const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Webpage</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          margin: 0;
          background-color: #f0f0f0;
        }
        .container {
          text-align: center;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 1 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1 {
          color: #333;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Unity PHM </h1>
        <img src="/phmhome.png" alt="Test Image">
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
