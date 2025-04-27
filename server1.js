import express from 'express';
import fs from 'fs';
import path from 'path';
import jsonServer from 'json-server';

// Create the express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON data
app.use(express.json());

// Path to your messages.json file
const messagesFile = path.join(process.cwd(), 'messages.json');

// Helper function to read the messages
const readMessages = () => {
  try {
    const data = fs.readFileSync(messagesFile, 'utf8');
    return JSON.parse(data).messages; // Return messages array
  } catch (err) {
    return [];
  }
};

// Helper function to save the messages
const saveMessages = (messages) => {
  fs.writeFileSync(messagesFile, JSON.stringify({ messages }, null, 2));
};

// POST route for saving a message
app.post('/messages', (req, res) => {
  const { name, email, message } = req.body;
  const messages = readMessages();

  const newMessage = {
    id: Date.now().toString(),  // Use timestamp as a unique ID
    name,
    email,
    message,
    date: new Date().toLocaleString(),
  };

  messages.push(newMessage); // Add the new message
  saveMessages(messages);    // Save updated messages

  res.status(201).json({ message: 'Message saved successfully!' });
});

// Setup json-server for other mock API routes
const apiRouter = jsonServer.router('db1.json');
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, apiRouter);

// Serve Vite static files (build your React app here)
app.use(express.static(path.join(process.cwd(), 'dist')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
