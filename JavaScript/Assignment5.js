/*
1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();
*/


class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
    // Getter
    get getVolume() {
      return this.calcVolume();
    }
    // Method
    calcVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
  }
  
  const cylinder = new Cylinder(2, 10);
  
  console.log(cylinder.getVolume);




  class Sphere {
    constructor(radius){
        this.radius = radius;
    }

    get getVolume(){
        return this.calcVolume()
    }

    calcVolume(){
        return (( 4 * Math.PI * Math.pow(this.radius, 3)) / 3 ).toFixed(4)
    }
  }
  

  const sphere = new Sphere(4, 8);
  console.log(sphere.getVolume);




  class Cone {
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    get getVolume(){
        return this.calcVolume()
    }

    calcVolume(){
        return (( Math.PI * Math.pow(this.radius, 2) * this.height) / 3).toFixed(4)
    }
  }
  

  const cone = new Cone(4, 8);
  console.log(cone.getVolume);