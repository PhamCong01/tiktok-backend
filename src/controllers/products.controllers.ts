import { Response, Request } from "express";
import { Products } from "../app/interface";

class ProductsControllers {
  public createProduct(req: Request, res: Response) {
    const body: Products = req.body.bodyProduct;
  }
  public getProductById(req: Request, res: Response) {
    res.send("get product by id");
  }

  public deleteProduct(req: Request, res: Response) {
    res.send("delete product");
  }
}

export default new ProductsControllers();
