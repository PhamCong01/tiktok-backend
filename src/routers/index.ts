import express = require("express");
import routerUser from "./user.router";
import routerProduct from "./products.router";
const routerApp = (app: express.Application) => {
  app.use("/user", routerUser);
  app.use("/products", routerProduct);
};

export default routerApp;
