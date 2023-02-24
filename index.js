// Code your solution in this file!
function distanceFromHqInBlocks(block) {
	return Math.abs(42 - block);
}
function distanceFromHqInFeet(block) {
	const blocksAway = distanceFromHqInBlocks(block)
	return blocksAway * 264;
}
function distanceTravelledInFeet(blockStart, blockEnd) {
	return Math.abs(blockEnd - blockStart) * 264;
}
function calculatesFarePrice(blockStart, blockEnd) {
	const distanceTravelled = distanceTravelledInFeet(blockStart, blockEnd);
	if (distanceTravelled <= 400) {
		return 0;
	}
	else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
		return (distanceTravelled - 400) * 0.02;
	} else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
		return 25;
	} else {
		return "cannot travel that far";
	}
}