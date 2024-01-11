import "./NavBar.css";
import logo from "../assets/sv-uv.png";
import xlogo from "../assets/x.svg";
import linkedinlogo from "../assets/linkedin.svg";

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
              <a className="ad-link" href="./">
                ADMISSIONS
              </a>
              <a className="ab-link" href="./">
                ABOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
