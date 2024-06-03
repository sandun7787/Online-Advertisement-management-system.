const crypto = require('crypto');

const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

console.log(generateSecretKey()); // Print the generated secret key
