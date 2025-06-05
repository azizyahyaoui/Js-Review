let legalAge = 18;
let yourAge;

yourAge = 14;

if (yourAge >= legalAge ) {
  console.log("You can drive");
}
else if(yourAge >= 15 && yourAge < legalAge) {
  console.log("you can drive with your parent license.");
} else{
  console.log("Your age is not valid")
}