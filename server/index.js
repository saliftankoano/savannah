import express from "express";
import {
  getAdmin,
  getFaculty,
  getStaff,
  getDept,
  getAllDepts,
  getAllFaculty,
  getAllStaff,
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
  res.send(departments);
});
app.get("/staff", async (req, res) => {
  let staff = await getAllStaff();
  res.send(staff);
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
app.get("/admin/:username&:password", async (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  const user = await getAdmin(username, password);
  res.send(user);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
