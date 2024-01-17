import { useState, useEffect } from "react";
import "./Admin.css";
import miniSv from "./assets/mini-sv.png";
export default function Admin() {
  const [username, setUsername] = useState("empty");
  const [password, setPassword] = useState("empty");
  useEffect(() => {
    console.log("Password updated!");
  }, [username]);
  useEffect(() => {
    console.log("Username updated!");
  }, [password]);

  function loginHandler(event) {
    event.preventDefault();
    // console.log(username);
    // console.log(password);
  }
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
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
            <span id="password-container">
              <input
                id="password-input"
                type="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </span>

            <input id="submit-login" type="submit" onClick={loginHandler} />
          </form>
        </div>
      </div>
    </div>
  );
}
