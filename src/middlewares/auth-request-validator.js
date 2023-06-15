const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Somethign went wrong",
      err: "Email or password missing in the request",
    });
  }
  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      error: "User id not given",
      message: "Something went wrong",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateIsAdminRequest,
};
