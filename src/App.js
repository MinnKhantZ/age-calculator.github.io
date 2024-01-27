import React, { useState } from "react";
import "./App.css";
import arrow from "./icon-arrow.svg";

function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [tdays, stdays] = useState(0);
  const [tmonths, stmonths] = useState(0);
  const [tyears, styears] = useState(0);
  //function to change value
  function handleChange(event) {
    if (event.target.id === "day") {
      setDay(event.target.value);
    } else if (event.target.id === "month") {
      setMonth(event.target.value);
    } else {
      setYear(event.target.value);
    }
  }
  //function to calculate age
  function handleClick() {
    if (day === 0 || month === 0 || year === 0) {
      return;
    }
    let date = new Date(year, month - 1, day);
    let curDate = new Date();
    let days = Math.floor((curDate - date) / 86400000);
    let years = 0;
    let arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    while (days > 365) {
      years++;
      days -= 365;
    }
    let extra = Math.floor(years / 4);
    days -= extra;
    if (month > 2 && year % 4 === 0) {
      days--;
    }
    let months = 0;
    for (let i = 0; days >= 31; i++) {
      if (curDate.getFullYear() % 4 === 0 && i === 1) {
        arrMonth[i] += 1;
      }
      days -= arrMonth[i];
      months++;
    }
    stdays(days);
    stmonths(months);
    styears(years);
  }

  return (
    <div className="box">
      <div className="input">
        <label for="day">
          DAY
          <input
            type="number"
            onChange={handleChange}
            id="day"
            placeholder="DD"
          />
        </label>

        <label for="month">
          MONTH
          <input
            type="number"
            onChange={handleChange}
            id="month"
            placeholder="MM"
          />
        </label>

        <label for="year">
          YEAR
          <input
            type="number"
            onChange={handleChange}
            id="year"
            placeholder="YYYY"
          />
        </label>
      </div>
      <div className="flex">
        <hr></hr>
        <button onClick={handleClick}>
          <img src={arrow} alt="logo"></img>
        </button>
      </div>
      <p>
        <span>{tyears === 0 ? "--" : tyears}</span>years
        <br />
        <span>{tmonths === 0 ? "--" : tmonths}</span>months
        <br />
        <span>{tdays === 0 ? "--" : tdays}</span>days
      </p>
    </div>
  );
}

export default App;
