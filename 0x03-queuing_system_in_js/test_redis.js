const redis = require('redis');

// Replace with your Redis server's port if it's not the default (6379)
const client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis server');
});

// Set the key "Holberton" with the value "School"
client.SET('Holberton', 'School', (err, reply) => {
  if (err) {
    console.error(err);
  } else {
    console.log(reply); // Output: OK
  }
});

// Get the value for the key "Holberton"
client.GET('Holberton', (err, reply) => {
  if (err) {
    console.error(err);
  } else {
    console.log(reply); // Output: "School"
  }
});

