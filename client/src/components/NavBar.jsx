import "./NavBar.css";
import logo from "../assets/sv-uv.png";
import xlogo from "../assets/x.svg";
import linkedinlogo from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navBar-container">
        <img className="logo" src={logo} />
        <div className="top-right">
          <div className="all-tr">
            <div className="socials">
              <img src={xlogo} id="x-logo" />
              <img src={linkedinlogo} id="linkedin-logo" />
            </div>
            <div className="links">
              <Link className="about-link" to={`/about`}>
                ABOUT
              </Link>
              <Link className="admission-link" to={`/admissions`}>
                ADMISSIONS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
