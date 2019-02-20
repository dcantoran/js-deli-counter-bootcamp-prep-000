function takeANumber(currLine, newName) {
  currLine.push(`${newName}`);
  return `Welcome, ${newName}. You are number ${currLine.length} in line.`;
}