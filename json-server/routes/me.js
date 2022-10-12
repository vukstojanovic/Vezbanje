const expressRouter = require("express").Router();
const jwt = require("jsonwebtoken");

expressRouter.get("/me", (req, res) => {
  const accessToken = req.header("x-auth-token");
  if (!accessToken) {
    res.status(401).json({
      errors: [
        {
          msg: "Token not found",
        },
      ],
    });
  } else {
    const decodedToken = jwt.decode(accessToken);
    res.status(200).json(decodedToken);
  }
});

module.exports = expressRouter;
