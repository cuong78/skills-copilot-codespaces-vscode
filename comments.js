// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const comments = JSON.parse(fs.readFileSync('comments.json'));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});