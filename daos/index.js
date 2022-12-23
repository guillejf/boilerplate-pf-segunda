const options = require("../config/options");
const init = require("../services/mongoDBservice");
const mongoDbService = require("../services/mongodbService");
const {
  /* CarritoDaoFirebase,
  CarritoDaoMongo, */
  CarritoDaoMemoria,
  CarritosDaoArchivo,
} = require("./carritos/index");
const {
  /*ProdDaoFirebase,
  ProdDaoMongo,*/
  ProdcutoDaoMemoria,
  ProductosDaoArchivo,
} = require("./productos/index");

//END REQUIRES////////////////////////////////////////////

const daosIntancesOptions = [
  {
    ProuctDao: new ProdcutoDaoMemoria(),
    CartDao: new CarritoDaoMemoria(),
    id: "memoria",
  },
  /* {
    ProuctDao: new ProdDaoFirebase(),
    CartDao: new CarritoDaoFirebase(),
    id:"firebase"
  }, */
  {
    ProuctDao: new ProductosDaoArchivo(),
    CartDao: new CarritosDaoArchivo(),
    id: "archivo",
  },
  /*  {
    ProuctDao: new ProdDaoMongo(),
    CartDao: new CarritoDaoMongo(),
    id:"mongo"
  } */
];

const instancia = daosIntancesOptions.find(
  (item) => item.id == process.env.SELECTED_DB
);

module.exports = { ProuctDao: instancia.ProuctDao, CartDao: instancia.CartDao };
