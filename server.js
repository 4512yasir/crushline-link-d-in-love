import express from 'express';
import path from 'path';
import jsonServer from 'json-server';

// Create the express app
const app = express();
const PORT = process.env.PORT || 5000;

// Setup json-server (mock API)
const apiRouter = jsonServer.router('db1.json');
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, apiRouter);

// Serve Vite static files
app.use(express.static(path.join(process.cwd(), 'dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
