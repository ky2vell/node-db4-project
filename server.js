const express = require('express');
const welcomeRouter = require('./routes/welcomeRouter');
const recipeRouter = require('./routes/recipeRouter');
const error = require('./middleware/error');
const colors = require('colors');

const server = express();

server.use(express.json());

// API Routes
server.use(welcomeRouter);
server.use('/api/recipes', recipeRouter);

// Error MiddleWare
server.use(error);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`.yellow.bold);
});
