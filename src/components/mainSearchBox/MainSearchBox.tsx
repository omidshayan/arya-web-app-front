import React from "react";
import "./MainSearchBox.css";

export default function MainSearchBox() {
  return (
    <>
      <hr />
      {/* <div className="mainSearchBox">
        <form>
          <div className="input-field">
            <input className="searchInput" type="text" id="name" required autoComplete="off"/>
            <input className="searchBtn" type="submit" value='جستجو'/>
          </div>
        </form>
      </div> */}

    <form className="mainSearch">
        <input type="search" placeholder="Search..." />
        <button type="submit">Search</button>
    </form>

    </>
  );
}
