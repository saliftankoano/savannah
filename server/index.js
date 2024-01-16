import express from "express";
import {
  getFaculty,
  getStaff,
  getDept,
  getAllDepts,
  getAllFaculty,
} from "./database.js";
const app = express();
const port = 5172;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/faculty", async (req, res) => {
  let allFaculty = await getAllFaculty();
  allFaculty = allFaculty;
  res.send(allFaculty);
});
app.get("/depts", async (req, res) => {
  let departments = await getAllDepts();
  //Why this ?
  departments = departments;
  res.send(departments);
});
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
