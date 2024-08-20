export function generateTimeArray() {
  const timeArray = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 60) {
      // You can adjust the interval here
      let period = hour < 12 ? "AM" : "PM";
      let hour12 = hour % 12;
      if (hour12 === 0) hour12 = 12;
      let minuteStr = minute < 10 ? `0${minute}` : minute;
      timeArray.push(`${hour12}:${minuteStr} ${period}`);
    }
  }
  return timeArray;
}

// const timeArray = generateTimeArray();
// console.log(timeArray);
