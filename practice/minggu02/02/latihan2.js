// let Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name);

//   let Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name);

// Dibawah ini adalah prototype

// function Vihicle(make, model, color) {
//     this.make = make,
//     this.model = model,
//     this.color = color,
//     this.getName = function () {
//         return this.make + "" + this.model;
//     }
// }
// var corolla = new Vihicle("toyota","corolla","black")
// Vihicle.prototype.year = "2014"
// var civic = new Vehicle("honda","civic","white")


// ini contoh Subklasifikasi / Subclassing, tapi masih console.error
// class Vehicle {
//     constructor(make, model, color) {
//         this.make = make;
//         this.model = model;
//         this.color = color;
//     }

//     getName() {
//         return this.make + " " + this.model;
//     }
// }

// class Car extends Vehicle{
//     getName(){
//         return this.make + " " + this.model +" in child class.";
//     }
// }

// let car = new Car("Honda", "Accord", "Purple");

// car.getName();
// console.log car.getName()

// const y = class {}

// Initialize a constructor from a class
// const constructorFromClass = new y();

// console.log(constructorFromClass);
