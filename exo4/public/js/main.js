let monArray = ["coding 20", "coding 21", "coding 22"];
console.log(monArray[0]);
console.log(monArray[1]); 
console.log(monArray[2]);
monArray.push("Quentin");
console.log(monArray[3]); 

monArray[1] = "coding 23";
console.log(monArray[1]);
monArray.splice(2, 1); 
console.log(monArray); 

