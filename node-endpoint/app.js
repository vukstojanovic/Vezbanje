const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

// Middlewares
app.use("/posts", () => {
  console.log("This is a middleware running");
});

// Routes

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];

// gets

app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const selectedCourse = courses.find((c) => String(c.id) === req.params.id);
  if (!selectedCourse) {
    res.status(404).send("The course with the given ID was not found");
  }
  res.send(selectedCourse);
});

// posts

app.post("/api/courses", (req, res) => {
  const result = validateCourse(req.body);

  if (result.error) {
    res.status(400).send(result.error.message);
  }

  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(newCourse);
  res.send(newCourse);
});

// puts

app.put("/api/courses/:id", (req, res) => {
  const selectedCourse = courses.find((c) => String(c.id) === req.params.id);
  if (!selectedCourse) {
    res.status(404).send("The course with the given ID was not found");
  }

  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.message);
  }

  selectedCourse.name = req.body.name;
  res.send(selectedCourse);
});

// deletes

app.delete("/api/courses/:id", (req, res) => {
  const selectedCourse = courses.find((c) => String(c.id) === req.params.id);
  if (!selectedCourse) {
    return res.status(404).send("The course with the given ID was not found");
  }
  const index = courses.indexOf(selectedCourse);
  courses.splice(1, index);

  res.send(selectedCourse);
});

// how do we start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}
