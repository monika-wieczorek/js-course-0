var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 1, 10, 30, 59);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 59);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1985, 0, 15, 11, 25, 35);
var birthday2 = new Date(1985, 0, 15, 11, 25, 35);

//get the month of the date (0-11), 0=Jan, 11=Dec
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1-31)
console.log(birthday.getDate());

//get the day of the week (0-6), 0=Sun, 6=Sat
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

/*get the number of milliseconds since 1st Jan 1970
till birthday*/
console.log(birthday.getTime());

//useful method to compare dates!
if (birthday.getTime() == birthday2.getTime()){
    console.log("Birthdays are equal");
} else {
    console.log("Birthdays are not equal");
}

if (birthday == birthday2){
    console.log("Birthdays are equal");
} else {
    console.log("Birthdays are not equal");
}






