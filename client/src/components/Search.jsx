import "./Search.css";

// Get All the options and related triangles
const options = document.getElementsByClassName("option");
const allTriangles = document.getElementsByClassName("triangle");

//Initialize the non default triangles visibility
allTriangles[1].style.visibility = "hidden";
allTriangles[2].style.visibility = "hidden";

function visisbleToggle(e) {
  for (let i = 0; i < options.length; i++) {
    if (e !== options[i]) {
      allTriangles[i].style.visibility = "hidden";
    } else {
      allTriangles[i].style.visibility = "visible";
    }
  }
}

export default function Search() {
  return (
    <div className="search-bar">
      <h1 className="title">DIRECTORY</h1>
      <div className="options">
        <span
          className="faculty option"
          onClick={(e) => {
            visisbleToggle(e.target);
          }}
        >
          Faculty
          <div className="triangle"></div>
        </span>
        <span
          className="staff option"
          onClick={(e) => {
            visisbleToggle(e.target);
          }}
        >
          Staff
          <div className="triangle"></div>
        </span>
        <span
          className="dept option"
          onClick={(e) => {
            visisbleToggle(e.target);
          }}
        >
          Departments
          <div className="triangle"></div>
        </span>
      </div>
      <div className="bs"></div>
    </div>
  );
}
