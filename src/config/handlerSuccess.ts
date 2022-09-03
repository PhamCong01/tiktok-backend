import { Response } from "express";
const successData = (res: Response, data: any, message = "success") => {
  return res.status(200).json({
    message: message,
    data: data,
  });
};

export { successData };
