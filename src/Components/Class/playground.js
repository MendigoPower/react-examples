// Class in JS? - template / blueprint

class Rectangle {
  constructor(len, width) {
    this.len = len;
    this.width = width;
  }
  area() {
    return this.len * this.width;
  }
}

class Cube extends Rectangle {
  constructor(len, width, heigth) {
    super(len, width);
    this.heigth = heigth;
  }
  volume() {
    return this.area() * this.heigth;
  }
}

const rect1 = new Rectangle(2, 3);
rect1.area(); //6
const rect2 = new Rectangle(4, 5);
// rect1.length; //2
// rect2.length; //4
const cube1 = new Cube(3, 4, 5);
cube1.volume(); //
console.log('volume', cube1.volume());
console.log('area', cube1.area());
