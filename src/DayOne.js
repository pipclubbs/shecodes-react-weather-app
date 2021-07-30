import React from "react";

export default function DayOne() {
  let date = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let dayOne = date.getDay() + 1;
  if (dayOne > 6) {
    dayOne = date.getDay() - 6;
  }
  return <span className="DayOne">{days[dayOne]}</span>;
}
