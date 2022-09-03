import express = require("express");
import productsControllers from "../controllers/products.controllers";
const router = express.Router();

router.post("/create", productsControllers.createProduct);
router.get("/get/:id", productsControllers.getProductById);
router.delete("/delete/:id", productsControllers.deleteProduct);
export default router;
