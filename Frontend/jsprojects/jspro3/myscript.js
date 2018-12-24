var firstName = prompt("First Name please:")
var lastName = prompt("Last Name please:")
var age = prompt("How old are you?")
var height = prompt("What is your height")
var petName = prompt("What is your pet name?")
alert("Thank you so much for the information!")

//LOGIC


//Four conditions
var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;

//Name conditions
if(firstName[0] === lastName[0]) {
  namecond = true;
}else {
  namecond = false;
}

//Age conditions
if(age > 20 && age < 30) {
  agecond = true;
}else {
  agecond = false;
}

//Height conditions
if(height >= 170){
  heightcond = true;
}else {
  heightcond = false;
}

//pet name
if(petName[petName.length-1] === "y") {
  petcond = true;
}else {
  petcond = false;
}

//Check all conditions
if(namecond && agecond && heightcond && petcond) {
  console.log("Welcome spy!");
}else {
  console.log("Nothing to see here");
}
