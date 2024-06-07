import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // Check if token exists and is valid
  if (!token) return next(errorHandler(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) return next(errorHandler(403, "Token is not valid!"));

    // Check if user is logged in
    if (!decodedToken.userId) {
      return next(errorHandler(401, "You are not authenticated!"));
    }

    // If token is valid and user is logged in, set user info in request
    req.userId = decodedToken.userId;
    next();
  });
};
