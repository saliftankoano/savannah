import { useState, useEffect } from "react";
import "./Admin.css";
import miniSv from "./assets/mini-sv.png";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {}, [username]);
  useEffect(() => {}, [password]);
  const navigate = useNavigate();
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  async function getAdmin(username, password) {
    let response;
    try {
      response = await fetch(
        `http://localhost:5172/admin/${username}&${password}`
      );
      response = await response.json();
    } catch (error) {
      response = [];
      return [];
    } finally {
      return response[0];
    }
  }

  async function loginHandler(event) {
    event.preventDefault();
    const userObtained = await getAdmin(username, password);
    // console.log(userObtained);
    if (userObtained === undefined) {
      console.log("No Match Found! Check your Username and Password");
    } else if (
      userObtained.username === username &&
      userObtained.password === password
    ) {
      navigate("/dashboard");
      //   console.log("We gucci");
    }
    // console.log(password);
  }
  return (
    <div className="admin">
      <div className="login-container">
        <div id="logo-container">
          <img id="sv-logo" src={miniSv} />
        </div>
        <div id="inputs-container">
          <form id="login-form">
            <input
              id="username-input"
              type="text"
              placeholder="Username"
              onChange={handleUsername}
            />
            <input
              id="password-input"
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />

            <input id="submit-login" type="submit" onClick={loginHandler} />
          </form>
        </div>
      </div>
    </div>
  );
}
