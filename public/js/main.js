const FEMALE_NAMES = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
const MALE_NAMES = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
let userAkanName = null;
let cc=null;
let yy=null;
let mm=null;
let dd=null;
let gender= null;

function getUserInfo() {
  let birthYear = prompt("Enter your birth year");
  cc = parseInt(birthYear.slice(0, 2));
  yy = parseInt(birthYear.slice(2));
  mm = parseInt(prompt("Enter month"));
  dd = parseInt(prompt("Enter day"));
  gender = prompt("Enter gender");
}

function calculateDayIndex(cc, yy, mm, dd) {
  let indexOfDay = Math.floor(
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );
  return indexOfDay;
}

function getAkanName(indexOfDay) {
  let indexOfDay= calculateDayIndex();
  if (gender == "m") {
    userAkanName = MALE_NAMES[indexOfDay];
  } else if (gender == "f") {
    userAkanName = FEMALE_NAMES[indexOfDay];
  } else {
    console.log("Gender is not known");
  }
}
function main() {
  let indexOfDay= getUserInfo()
    getUserInfo();
    let returnedDayIndex=calculateDayIndex(cc,yy,mm,dd);
getAkanName(returnedDayIndex);
}
main();

/*{
  getUserInfo();
  calculateDayIndex(cc,yy,mm,dd);
  let returnedDayIndex=calculateDayIndex();
  getAkanName(returnedDayIndex);
}*/
