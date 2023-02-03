const { auth } = require('../service/auth.service');

const login = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  console.log('REQBODY', req.body);
  const { type, message } = await auth({ email, password });
  if (type) return res.status(400).json({ message });

  res.status(200).json(message);
};

module.exports = { login };
