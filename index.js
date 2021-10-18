function distanceFromHqInBlocks (blocks) {
    if (blocks >= 42) {
        return (blocks - 42);
    }
    else if (blocks < 42) {
        return (42 - blocks);
    }
    return blocks;
}

function distanceFromHqInFeet (blocks) {
   if (blocks >= 42) {
    return (blocks - 42) * 264;
   }
   else if (blocks < 42) {
       return (42 - blocks) * 264;
   }
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
    if (startingBlock >= 42) {
        return (endingBlock - startingBlock) * 264;
    }
    else if (startingBlock < 42) {
        return (startingBlock - endingBlock) *264;
    }
}

function calculatesFarePrice(startingBlock, endingBlock) {
    if (distanceTravelledInFeet(startingBlock, endingBlock) < 400) {return 0;}
    else if (distanceTravelledInFeet(startingBlock, endingBlock) > 400 && distanceTravelledInFeet(startingBlock, endingBlock) <= 2000) {
        return (distanceTravelledInFeet(startingBlock, endingBlock) - 400) * .02;}
    else if (distanceTravelledInFeet(startingBlock, endingBlock) > 2000 && distanceTravelledInFeet(startingBlock, endingBlock) <= 2500) {
        return 25;}
    else if (distanceTravelledInFeet(startingBlock, endingBlock) > 2500) {
        return "cannot travel that far";}
    }