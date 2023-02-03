const { User } = require('../models');
const { JWT } = require('../utils/JWT');

const auth = async ({ email, password }) => {
  // console.log(email, password);
  const user = await User.findOne({
    where: { email, password },
  });

  // console.log('USER', user);

  if (!user) {
    return { type: 400, message: 'Invalid fields' };
  }

  const token = JWT(user.dataValues);

  return { type: null, message: { token } };
};

module.exports = { auth };
