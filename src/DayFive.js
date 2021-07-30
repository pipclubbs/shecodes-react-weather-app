import React from "react";

export default function DayFive() {
  let date = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let dayFive = date.getDay() + 5;
  if (dayFive > 6) {
    dayFive = date.getDay() - 2;
  }
  return <span className="DayFive">{days[dayFive]}</span>;
}
