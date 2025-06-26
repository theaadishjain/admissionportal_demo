const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for submissions
const submissions = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the admission form
app.get('/admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admission.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { fullName, email, phone, course } = req.body;
  submissions.push({ fullName, email, phone, course });
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/style.css">
  <title>Admission Confirmation</title>
</head>
<body class="confirmation-body">
  <div class="confirmation-container">
    <h1>Thank you, ${fullName}!</h1>
    <p>You've successfully applied for the <strong>${course}</strong> program.</p>
    <a href="/admission" class="back-link">Apply for another</a>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 