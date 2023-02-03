module.exports = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName === undefined) {
    return res
      .status(404)
      .json({
        message: '"displayName" not found',
      });
  }

  if (displayName.length < 8) {
    return res
      .status(400)
      .json({
        message: '"displayName" length must be at least 8 characters long',
      });
  }

  next();
};
