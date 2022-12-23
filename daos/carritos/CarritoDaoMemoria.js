const ContenedorMemoria = require("../../contenedores/ContenedorMemoria");

class CarritoDaoMemoria extends ContenedorMemoria {
  constructor() {
    super();
  }

  async addProductToCart(id, productToADD) {
    const carritoEncontrado = this.items.find((c) => c.id == id);
    try {
      carritoEncontrado.products.push(productToADD);
    } catch (err) {
      console.log(err.message);
    }
  }
  async viewProductInCart(id) {
    const carritoEncontrado = this.items.find((c) => c.id == id);

    return carritoEncontrado.products;
  }
  async cleanCart(id) {
    const carritoEncontrado = this.items.find((carrito) => carrito.id == id);
    try {
      carritoEncontrado.products = [];
    } catch (err) {
      console.log(err.message);
    }
  }
  async deleteProductFromCart(id, productToRemove) {
    const carritoEncontrado = this.items.find((carrito) => carrito.id == id);
    try {
      carritoEncontrado.products = carritoEncontrado.products.filter(
        (prod) => prod.id != productToRemove
      );
    } catch (e) {
      console.log(e.message);
    }
  }
}

module.exports = CarritoDaoMemoria;
