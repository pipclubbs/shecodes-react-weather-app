import React from "react";

export default function DayFour() {
  let date = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let dayFour = date.getDay() + 4;
  if (dayFour > 6) {
    dayFour = date.getDay() - 3;
  }
  return <span className="DayFour">{days[dayFour]}</span>;
}
