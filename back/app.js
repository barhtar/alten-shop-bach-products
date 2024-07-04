const express = require('express');
const cors = require('cors')

const sequelize = require('./db');
const routes = require('./routes');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database synchronized');
});

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});