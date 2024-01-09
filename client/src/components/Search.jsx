import "./Search.css";
export default function Search() {
  return (
    <div className="search-bar">
      <h1 className="title">DIRECTORY</h1>
      <div className="options">
        <span className="faculty option">
          Faculty
          <div className="faculty-t"></div>
        </span>
        <span className="staff option">
          Staff
          <div className="staff-t"></div>
        </span>
        <span className="dept option">
          Departments
          <div className="dept-t"></div>
        </span>
      </div>
      <div className="bs"></div>
    </div>
  );
}
