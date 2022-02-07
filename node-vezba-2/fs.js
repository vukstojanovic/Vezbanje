const fs = require("fs");

// fs.writeFile("message.txt", "Hello there Node", (err) => {
//   if (err) throw err;
//   console.log("file has been written");
// });

// console.log("hello");

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
