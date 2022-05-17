async function register(req, res) {
  res.send("register user");
}

async function login(req, res) {
  res.send("login user");
}

async function updateUser(req, res) {
  res.send("update user");
}

export { register, login, updateUser };
