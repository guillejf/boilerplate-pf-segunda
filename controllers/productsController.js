const { ProuctDao } = require("../daos/index");

exports.getAll = async (req, res, next) => {
  try {
    const productos = await ProuctDao.getAll();
    if (!productos[0]) {
      return res.json([]);
    }
    res.json(productos);
  } catch (e) {
    next(e);
  }
};
exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findProduct = await ProuctDao.getById(id);
    findProduct
      ? res.json({ success: true, findProduct })
      : res.status(400).json({ error: true, msg: "Producto no encontrado" });
  } catch (e) {
    next(e);
  }
};

exports.addProduct = async (req, res, next) => {
  const body = req.body;

  try {
    body.timestamp = Date.now();
    const newProduct = await ProuctDao.save(body);
    res.json({ success: true, newProduct });
  } catch (e) {
    next(e);
  }
};
exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const { title, price, quentity, img } = req.body;
  try {
    await ProuctDao.update(id, title, price, quentity, img);
    res.json({ success: true /* ideal responder con el objeto updateado */ });
  } catch (e) {
    next(e);
  }
};
exports.deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await ProuctDao.deleteById(id);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};
