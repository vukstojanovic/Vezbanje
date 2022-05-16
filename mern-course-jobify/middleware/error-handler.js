function errorHandlerMiddleware(err, req, res, next) {
  res.status(500).json({ msg: "there was an error on the server" });
}

export default errorHandlerMiddleware;
