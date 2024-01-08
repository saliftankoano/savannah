import "./NavBar.css";
import logo from "../assets/sv-uv.png";

export default function NavBar() {
  return (
    <>
      <div className="navBar-container">
        <img className="logo" src={logo} />
        <div className="links">
          <div className="link">
            <a href="./">ADMISSIONS</a>
          </div>
          <div className="link">
            <a href="./">ABOUT</a>
          </div>
        </div>
      </div>
    </>
  );
}
