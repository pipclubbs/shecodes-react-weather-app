import React from "react";

export default function DayThree() {
  let date = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let dayThree = date.getDay() + 3;
  if (dayThree > 6) {
    dayThree = date.getDay() - 4;
  }
  return <span className="DayThree">{days[dayThree]}</span>;
}
