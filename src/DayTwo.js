import React from "react";

export default function DayTwo() {
  let date = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let dayTwo = date.getDay() + 2;
  if (dayTwo > 6) {
    dayTwo = date.getDay() - 5;
  }
  return <span className="DayTwo">{days[dayTwo]}</span>;
}
