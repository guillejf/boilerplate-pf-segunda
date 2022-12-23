const validarAdmin = (req, res, next) => {
  const admin = true;
  if (admin == true) {
    next();
  } else {
    return res.status(403).json({ error: true, msg: "Forbidden" });
  }
};

module.exports = { validarAdmin };
