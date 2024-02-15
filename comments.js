// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Use the express.static() middleware to serve static files
app.use(express.static('public'));

// Use the express.json() middleware to parse JSON request bodies
app.use(express.json());

// Create a route that listens for GET requests on the /comments URL
app.get('/comments', (req, res) => {
  // Send back the entire array of comments
  res.json(comments);
});

// Create a route that listens for POST requests on the /comments URL
app.post('/comments', (req, res) => {
  // Log the comment to the console
  console.log(req.body);

  // Send back the entire array of comments
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Array of comments
const comments = [
  {
    name: 'John',
    comment: 'This is a great idea!',
  },
  {
    name: 'Jane',
    comment: 'How can I help?',
  },
  {
    name: 'Joe',
    comment: 'I have a question.',
  },
];
