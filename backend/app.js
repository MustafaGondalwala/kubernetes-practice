const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env
const port = process.env.PORT || 3000; // Use the PORT variable from .env or default to 3000
const faker = require('@faker-js/faker');
const morgan = require('morgan');
const cors = require('cors');


function getRandomName() {
  return {
    userId: faker.faker.string.uuid(),
    username: faker.faker.internet.userName(),
    email: faker.faker.internet.email(),
    avatar: faker.faker.image.avatar(),
    password: faker.faker.internet.password(),
    birthdate: faker.faker.date.birthdate(),
    registeredAt: faker.faker.date.past(),
  };
}

app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev'));


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example of a route with parameters
app.get('/api/greet', (req, res) => {
  const { username } = getRandomName();
  res.json({
    message: `Hello ${username}!!`,
    username
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});