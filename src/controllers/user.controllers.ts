import { Response, Request } from "express";
import { User } from "../app/interface";
import { errorFromClient, errorFromServer } from "../config/errorHandler";
import { successData } from "../config/handlerSuccess";
import UserModel from "../models/user.model";
class UserControllers {
  // create new user when login
  public async createUser(req: Request, res: Response) {
    const body: User = req.body.bodyUser;
    if (!body) {
      return errorFromClient(res, "You must provide a body to create");
    }
    const email = body.email;
    const isUser = await UserModel.findOne({ email: email });
    if (!isUser) {
      const user = await UserModel.create(body);
      user.save((err, user) => {
        if (err) {
          // errorFromClient(res, err.message);
          return errorFromClient(res, err.message);
        }
        successData(res, user, "create user success");
        res.setHeader("Content-Type", "text/html");
      });
    } else {
      return successData(res, isUser, "user already exists");
    }
  }
  //  get user by id
  public async getUserById(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      return errorFromClient(res, "You must provide a id to get");
    }
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return errorFromServer(res, "can't not get user");
    } else {
      return successData(res, user, "get user success");
    }
  }
}

export default new UserControllers();
