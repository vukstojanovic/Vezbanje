const express = require("express");
const router = express.Router();
const members = require("../../members");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  const certainElement = members.find(
    (member) => String(member.id) === req.params.id
  );
  res.json(certainElement || "Not found");
});

// Add member

router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newMember = {
    id: uuid.v4(),
    name,
    email,
  };

  if (!name || !email) {
    return res.status(400).json({ msg: "Please enter both name and email." });
  }
  members.push(newMember);
  res.send(req.body);
});

// Update member

router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === Number(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === Number(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;
        res.json({ msg: "Member updated.", member });
      }
    });
  } else {
    res.status(400).json({ msg: "No member with given id." });
  }
});

// Delete member

// router.delete("/:id", (req, res) => {
//   const found = members.some((member) => member.id === Number(req.params.id));
//   if (found) {
//     members = members.map();
//   }
// });

module.exports = router;
