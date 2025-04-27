import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File where messages are stored
const messagesFile = './messages.json';

// Helper function to read messages
const readMessages = () => {
  try {
    const data = fs.readFileSync(messagesFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper function to save messages
const saveMessages = (messages) => {
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
};

// POST route to save a new message
app.post('/messages', (req, res) => {
  const messages = readMessages();
  messages.push(req.body);
  saveMessages(messages);
  res.status(201).json({ message: 'Message saved successfully!' });
});

// (Optional) GET route to fetch all messages
app.get('/messages', (req, res) => {
  const messages = readMessages();
  res.json(messages);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
