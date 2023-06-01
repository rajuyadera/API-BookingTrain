import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
 
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};

export const verifyAdmin = async (req, res, next) => {
  
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unregistered Token" });
    } else if (decoded.role == "admin") {
      req.role = decoded.role;
      next();
    } else {
      return res.status(401).json({ message: "Not Authorized" });
    }
  });
};
