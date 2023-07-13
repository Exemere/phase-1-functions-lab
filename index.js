function distanceFromHqInBlocks(block){
if (block>=42)
return block-42
else if (block<42)
return 42-block
}
  

function distanceFromHqInFeet(blocks) {
  const distance=distanceFromHqInBlocks(blocks);
  const interval=264
  return interval * distance
  
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
  function distanceTravelledInFeet(start, destination) {
    const distanceTravelledInFeet = traveldistance * 264 ;
    let traveldistance = Math.abs(destination - start);
    let interval = 264;
    return traveldistance * interval

  }
  function calculatesFarePrice(start, destination) {
    let traveldistance = distanceinfeet(start,destination)
    if (traveldistance <= 400){
      return 0;
    }else if (traveldistance> 400 && traveldistance<2000){
      return(0.02*(traveldistance - 400))
    }else if (traveldistance >200 && traveldistance <2500){
      return 25;
    }else {
      return 'Cannot travel that far';
    }
  }