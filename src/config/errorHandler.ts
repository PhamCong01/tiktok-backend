import { Response } from "express";
const errorFromClient = (res: Response, message = "error from client") => {
  console.log(message);
  return res.status(400).json({
    message: message,
  });
};
const errorFromServer = (res: Response, message = "error from server") => {
  console.log(message);
  return res.status(500).json({
    message: message,
  });
};

const errorNotFound = (res: Response, message = "not found") => {
  console.log(message);
  return res.status(404).json({
    message: message,
  });
};
export { errorFromClient, errorFromServer, errorNotFound };
