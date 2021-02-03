const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('950646444363-ae1gm0h7kdl6bkjgqvb6m12k26m0c988.apps.googleusercontent.com');
const error = require('../utils/error');

const verifyGoogleToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '950646444363-ae1gm0h7kdl6bkjgqvb6m12k26m0c988.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    const email = payload['email'];
    return email;
  } catch (e) {
    console.log(e);
    throw error(503, e);
  }
};

module.exports = { verifyGoogleToken };
