const express = require('express');

const sequelize = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database synchronized');
});

app.use(express.json());

// Use product routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});