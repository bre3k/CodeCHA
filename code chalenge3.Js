function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsPerDemerit = 5;
  const demeritThreshold = 12;

  if (speed < speedLimit) {
      console.log("Ok");
  } else {
      const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
      
      if (demeritPoints > demeritThreshold) {
          console.log("License suspended");
      } else {
          console.log("Points: " + demeritPoints);
      }
  }
}
checkSpeed(80);