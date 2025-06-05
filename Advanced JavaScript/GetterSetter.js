class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

let rect = new Rectangle(10, 20);
console.log(rect.area);
rect.dimensions = { width: 15, height: 25 };
console.log(rect.area); 