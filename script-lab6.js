var convertedTemp;

function convertTemp (temp, unit){
    
if (unit === "C"){
  
  convertedTemp=(temp - 32) *5/9;  //f to C
  console.log(convertedTemp);
}
  
else if (unit === "F")

  {
  convertedTemp = (temp * 9/5) + 32;// c to f
  console.log(convertedTemp);
}

  else{
console.log("Wrong input, please try again.");
  }
  
}


function tempUser() {
var userTemp = prompt("temp : ", "");
var userUnit = prompt("unit : ", "");

convertTemp (userTemp, userUnit);}

tempUser();