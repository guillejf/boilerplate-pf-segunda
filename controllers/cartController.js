// const Contenedor = require("../Contenedor");
// const Carrito = new Contenedor("./carts.json");
// const Producto = new Contenedor("./products.json");

const { CartDao, ProuctDao } = require("../daos/index");

exports.addCart = async (req, res, next) => {
  const newCart = {
    products: [],
    timestamp: Date.now(),
  };
  try {
    const elCart = await CartDao.save(newCart);
    res.json({ success: true, error: false, elCart });
  } catch (err) {
    res.json({ success: false, error: err.message, puto: "el que lee" });
  }
};
exports.getAll = async (req, res, next) => {
  try {
    const carritos = await CartDao.getAll();
    res.json({ success: true, carritos });
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
};
exports.getById = async (req, res, next) => {
  const { id } = req.params;
  const miCarrito = await CartDao.getById(id);
  res.json({ success: true, miCarrito });
};
exports.getProductFromCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const products = await CartDao.viewProductInCart(id);
    res.json({ success: true, products });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};
exports.addProductToCart = async (req, res, next) => {
  const { id } = req.params;
  const productId = req.body.id;
  const productoToAdd = await ProuctDao.getById(productId);
  const elCarri = await CartDao.addProductToCart(id, productoToAdd);

  res.json(elCarri);
};
exports.cleanCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    CartDao.cleanCart(id);
    res.json({ success: true, status: `el carrito con id ${id} quedo vacio ` });
  } catch (err) {
    res.json(err);
  }
};
exports.removeProductFromCart = async (req, res, next) => {
  const { id, id_prod } = req.params;
  try {
    await CartDao.deleteProductFromCart(id, id_prod);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};
