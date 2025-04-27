import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Location of messages.json
const messagesFile = path.join(__dirname, "messages.json");

// Helper: Read messages
const readMessages = () => {
  try {
    if (fs.existsSync(messagesFile)) {
      const data = fs.readFileSync(messagesFile, "utf8");
      return JSON.parse(data);
    }
    return []; // Return empty array if file doesn't exist
  } catch (err) {
    console.error("Error reading messages:", err);
    return [];
  }
};

// Helper: Save messages
const saveMessages = (messages) => {
  try {
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  } catch (err) {
    console.error("Error saving messages:", err);
  }
};

// POST route to save a message
app.post("/messages", (req, res) => {
  const messages = readMessages();
  messages.push(req.body);
  saveMessages(messages);
  res.status(201).json({ message: "Message saved successfully!" });
});

// (Optional) GET route to fetch all messages
app.get("/messages", (req, res) => {
  const messages = readMessages();
  res.json(messages);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
