
//Declaration of global variables
const FEMALE_NAMES = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const MALE_NAMES = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let userAkanName = null;
let cc=null;
let yy=null;
let mm=null;
let dd=null;
let gender= null;

// Function to get raw data from user

function getUserInfo(){
  let birthYear = prompt("Enter your birth year");
  cc = parseInt(birthYear.slice(0, 2));
  yy = parseInt(birthYear.slice(2));
  mm = parseInt(prompt("Enter month"));
  dd = parseInt(prompt("Enter day"));
  gender = prompt("Enter gender");
}

// Formula to calculate the day from raw data provided

function calculateDayIndex(cc, yy, mm, dd) {
  let indexOfDay =Math.floor(
    (cc/4-2*cc -2+ (5*yy) / 4 + (26 * (mm + 1))/10 + dd)%7
  );
  return indexOfDay;
}

// Function to generate Akan Name

function getAkanName(indexOfDay) {
  let dayIndex= calculateDayIndex(cc,yy,mm,dd
    );
  if (gender == "m") {
    userAkanName = MALE_NAMES[dayIndex];
  } else if (gender == "f") {
    userAkanName = FEMALE_NAMES[dayIndex];
  } else {
    console.log("Gender is not known");
  }
}

// Main function to combine all functions.

function main(){
  let dayIndex=getUserInfo();
  getAkanName(dayIndex);
  console.log(userAkanName);
  response = `Your Akan name is ${userAkanName}` 
  document.getElementById('namedisplay').innerHTML=response;
}

 