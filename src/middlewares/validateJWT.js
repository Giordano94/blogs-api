const { verify } = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const jwt = req.header('Authorization');

  if (!jwt) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    req.user = await verify(jwt, JWT_SECRET);
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};
