module.exports = (req, res, next) => {
  const { email } = req.body;

  const valid = /\S+@\S+\.\S+/;

  if (email === undefined) {
    return res
      .status(404)
      .json({
        message: '"email" not found',
      });
  }

  if (!valid.test(email)) {
    return res
      .status(400)
      .json({
        message: '"email" must be a valid email',
      });
  }

  next();
};
