// 1450. Number of Students Doing Homework at a Given Time
var busyStudent = function (startTime, endTime, queryTime) {
  let c = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      c++;
    }
  }
  return c;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
