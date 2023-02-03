module.exports = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res
      .status(404)
      .json({
        message: '"password" not found',
      });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({
        message: '"password" length must be at least 6 characters long',
      });
  }

  next();
};
