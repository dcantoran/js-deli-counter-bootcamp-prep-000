function takeANumber(currLine, newName) {
  currLine.push(`${newName}`);
  return `Welcome, ${newName}. You are number ${currLine.length} in line.`;
}

function nowServing(currLine) {
  
  if (currLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${currLine.shift()}`
  // for (var i = 0; i < currLine.length; i ++) {
  //   return 
  // }
}


