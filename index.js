// Code your solution in this file!
function distanceFromHqInBlocks(startingPoint) {
  let hq = 42
  return Math.abs(startingPoint - hq)
}

function distanceFromHqInFeet(startingPoint) {
  return distanceFromHqInBlocks(startingPoint) * 264;
}

function distanceTravelledInFeet(startingPoint,endingPoint) {
  return Math.abs(startingPoint - endingPoint) * 264 ;
}

function calculatesFarePrice(start, destination) {
  
}