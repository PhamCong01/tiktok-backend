import { Response, Request } from "express";
import { Comment } from "../app/interface";

class CommentControllers {
  public createComment(req: Request, res: Response) {
    const body: Comment = req.body.bodyComment;
  }
  public updateComment(req: Request, res: Response) {
    res.send("get product by id");
  }

  public deleteComment(req: Request, res: Response) {
    res.send("delete product");
  }
}

export default new CommentControllers();
