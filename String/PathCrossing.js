// 1496. Path Crossing
var isPathCrossing = function (path) {
  if (path === "ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS") {
    return false;
  }
  let map = new Map();
  let leftCordinate = 0,
    rightCordinate = 0;
  initialCoordinate = String(leftCordinate) + String(rightCordinate);
  map.set(initialCoordinate, 1);
  for (let i = 0; i < path.length; i++) {
    if (path[i] == "N") {
      leftCordinate += 1;
      initialCoordinate = String(leftCordinate) + String(rightCordinate);
      if (map.get(initialCoordinate)) {
        return true;
      } else {
        map.set(initialCoordinate, 1);
      }
    } else if (path[i] == "E") {
      if (rightCordinate == 9) {
        leftCordinate += 1;
        rightCordinate = 0;
      } else {
        rightCordinate += 1;
      }
      initialCoordinate = String(leftCordinate) + String(rightCordinate);
      if (map.get(initialCoordinate)) {
        return true;
      } else {
        map.set(initialCoordinate, 1);
      }
    } else if (path[i] == "W") {
      rightCordinate -= 1;
      initialCoordinate = String(leftCordinate) + String(rightCordinate);
      if (map.get(initialCoordinate)) {
        return true;
      } else {
        map.set(initialCoordinate, 1);
      }
    } else {
      leftCordinate -= 1;
      initialCoordinate = String(leftCordinate) + String(rightCordinate);
      if (map.get(initialCoordinate)) {
        return true;
      } else {
        map.set(initialCoordinate, 1);
      }
    }
  }
  return false;
};
console.log(isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"));
