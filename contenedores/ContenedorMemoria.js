let id;

class ContenedorMemoria {
  constructor() {
    this.items = [];
  }

  async save(object) {
    try {
      id = this.items.length + 1;
      this.items = [...this.items, { id, ...object }];
      return object;
    } catch (e) {
      console.log(e.message);
    }
  }
  async getAll() {
    try {
      return this.items;
    } catch (e) {
      return e.message;
    }
  }
  async getById(id) {
    try {
      const found = this.items.find((item) => item.id == id);
      return found;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteById(id) {
    try {
      this.items = this.items.filter((producto) => producto.id != id);
      return `Delete one success`;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteAll(id) {
    try {
      this.items = [];
      return `Delete all success`;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ContenedorMemoria;
