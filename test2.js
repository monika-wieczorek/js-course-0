var myArray = [8, true, 99, "Hi there"];

console.log(myArray);

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.color = "brown";
myCar.driver = "Monika";
myCar.drive = function(){
    console.log("now you are driving");
};

myCar.drive();
console.log(myCar.maxSpeed);
console.log(myCar.color);
console.log(myCar.driver);

var myCar2 = {

    maxSpeed: 70,
    color: "blue",
    driver: "Piotr",
    drive: function(){
        console.log("now you are driving again");
    }
};

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive();

var myCar3 = {
    drive: function(speed, time){
        console.log("you have traveled the distance of: ");
        console.log(speed * time);
    }
}

myCar3.drive(50, 3);
