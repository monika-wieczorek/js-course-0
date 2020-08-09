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
    },

    test2: function(){
        console.log(this);
    }
};

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive();

var myCar3 = {
    driver: "Krzysztof",
    drive: function(speed, time){
        console.log("you have traveled the distance of: ");
        console.log(speed * time);
    },
    logDriver: function() {
        console.log("Driver name is " + this.driver);        
    }
};

myCar3.drive(50, 3);
myCar2.test2();
myCar3.logDriver();

var myArray = new Array(); //constructor function that creats new array

var Bike = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log("you have traveled the distance of: ");
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("Driver name is " + this.driver);        
    };
    
}

var myBike = new Bike(20, "Monika");
var myBike1 = new Bike(10, "Piotr");
var myBike2 = new Bike(12, "Kasia");
var myBike3 = new Bike(15, "Paweł");
var myBike4 = new Bike(17, "Ania");

myBike3.logDriver();






