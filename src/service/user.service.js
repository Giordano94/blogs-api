const { User } = require('../models');
const { JWT } = require('../utils/JWT');

const insertUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;

  const userExists = await User.findOne({
    where: { email, password },
  });

  if (userExists) {
    return { type: 409, message: 'User already registered' };
  }

  await User.create({ displayName, email, password, image });

  const jwt = JWT({ email, password });

  return { type: null, message: jwt };
};

module.exports = { insertUser };
