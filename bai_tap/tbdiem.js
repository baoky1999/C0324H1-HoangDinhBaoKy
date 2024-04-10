inputPhysics = prompt("Enter the Physics");
inputChemistry = prompt("Enter the Chemistry");
inputBiology = prompt("Enter the Biology");
let physics = parseInt(inputPhysics);
let chemistry = parseInt(inputChemistry);
let biology = parseInt(inputBiology);
let area = (physics + chemistry + biology)/3
document.write("the area a:" + area);