const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { emailid: "imran@gmail.com", name: "cs1" },
  { emailid: "ashfaq@gmail.com", name: "cs2" },
  { emailid: "ehtesham@gmail.com", name: "cs3" },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.get("/courses", (req, res) => {
//   res.send(courses);
// });

app.get("/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("course not found");
  }
  res.send(course);
});

// app.post("/courses", (req, res) => {
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name,
//   };
//   courses.push(course);
//   res.send(course);
// });

// app.get("/courses", (req, res) => {
//   const course = courses.find((c) => c.emailid === req.body.emailid);
//   if (!course) {
//     res.status(404).send("course not found");
//   }
//   res.send(course);
// });

app.post("/courses", (req, res) => {
  const course = courses.find((c) => c.emailid === req.body.emailid);
  if (!course) {
    res.status(404).send("course not found");
  }
  const newcourse = {
    emailid: req.body.emailid,
    name: req.body.name,
  };
  courses.push(newcourse);
  res.send("user created");
  console.log(courses);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
