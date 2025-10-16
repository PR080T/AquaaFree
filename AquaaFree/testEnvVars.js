// testEnvVars.js

// Load environment variables from the .env file
require('dotenv').config();

// Access environment variables
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

// Output the values to verify they're loaded correctly
console.log('Mongo URI:', mongoUri);
console.log('Server Port:', port);

// Optional: Export the variables for use in other test scripts
module.exports = {
  mongoUri,
  port
};
