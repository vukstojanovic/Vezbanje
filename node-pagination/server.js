const express = require("express");
const app = express();

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
  { id: 5, name: "user5" },
  { id: 6, name: "user6" },
  { id: 7, name: "user7" },
  { id: 8, name: "user8" },
];

const posts = [
  { id: 1, name: "post1" },
  { id: 2, name: "post2" },
  { id: 3, name: "post3" },
  { id: 4, name: "post4" },
  { id: 5, name: "post5" },
  { id: 6, name: "post6" },
  { id: 7, name: "post7" },
  { id: 8, name: "post8" },
];

app.get("/users", paginateResults(users), (req, res) => {
  res.json(res.paginatedResults);
});

app.get("/posts", paginateResults(posts), (req, res) => {
  res.json(res.paginatedResults);
});

app.listen(3000);

function paginateResults(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = model.slice(startIndex, endIndex);
    res.paginatedResults = results;
    next();
  };
}
