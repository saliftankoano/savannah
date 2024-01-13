import KeywordSearch from "./KeywordSearch";
import { useState, useEffect } from "react";
import "./SearchBlock.css";

let options;
let allTriangles;
let currentOption;

document.addEventListener("DOMContentLoaded", function () {
  // Get All the options and related triangles
  options = document.getElementsByClassName("option");
  currentOption = "faculty";
  allTriangles = document.getElementsByClassName("triangle");
});

// const departments = [
//   { name: "All departments" },
//   { name: "Computer Science" },
//   { name: "Nursing" },
//   { name: "Business" },
// ];

async function getAllDepts() {
  const response = await fetch("http://localhost:5172/depts");
  const depts = await response.json();

  let finalResults = [];
  depts.forEach((element) => {
    finalResults.push(element);
  });
  return finalResults;
}
let departments;
departments = await getAllDepts();
console.log(departments);

function SearchBlock() {
  function visisbleToggle(e) {
    for (let i = 0; i < options.length; i++) {
      if (e !== options[i]) {
        allTriangles[i].classList.add("hidden");
      } else {
        allTriangles[i].classList.remove("hidden");
        //Get the name of the current option selected
        currentOption = options[i];
        currentOption = currentOption.getAttribute("class");
        const currentClasses = currentOption.split(" ");
        currentOption = currentClasses[0];
        // console.log(currentOption);
      }
    }
  }

  function displayDepts(departments) {
    return departments.map((option, index) => (
      <option key={index} value={option.name}>
        {option.name}
      </option>
    ));
  }
  return (
    <div className="search-section">
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
          <div className="triangle hidden"></div>
        </span>
        <span
          className="dept option"
          onClick={(e) => {
            visisbleToggle(e.target);
          }}
        >
          Departments
          <div className="triangle hidden"></div>
        </span>
      </div>
      <div className="sb">
        <form className="faculty-search">
          <div className="search-entries">
            <KeywordSearch />
            <select className="select-depts" name="depts">
              {displayDepts(departments)}
            </select>
          </div>
          <input id="submit-search" type="submit" />
        </form>
      </div>
    </div>
  );
}
export default SearchBlock;
