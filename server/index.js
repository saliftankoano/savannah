import express from "express";
import { getFaculty, getStaff, getDept } from "./database.js";
const app = express();
const port = 4545;

app.get("/faculty/:name", async (req, res) => {
  const name = req.params.name;
  const faculty = await getFaculty(name);
  res.send(faculty);
});
app.get("/staff/:name", async (req, res) => {
  const name = req.params.name;
  const staff = await getStaff(name);
  res.send(staff);
});
app.get("/department/:name", async (req, res) => {
  const name = req.params.name;
  const dept = await getDept(name);
  res.send(dept);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
