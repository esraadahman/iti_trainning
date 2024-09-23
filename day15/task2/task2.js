class Shape {
    constructor(width, height) {
        if (this.constructor === Shape) {
            throw new Error("Can't instantiate abstract class Shape");
        }
        this.width = width;
        this.height = height;
    }
    
    area() {
        throw new Error("method not implemented yet");
    }
    
    perimeter() {
        throw new Error("method not implemented yet");
    }
}

class Rectangle extends Shape {
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side); 
    }
    
    area() {
        return this.width * this.height; 
    }
    
    perimeter() {
        return 4 * this.width;
    }
}

class Triangle extends Shape {
    constructor(base, height, sideA, sideB, sideC) {
        super(base, height);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    
    area() {
        return (this.width * this.height) / 2; 
    }
    
    perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}


const rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter()); // 30

const square = new Square(4);
console.log("Square Area:", square.area()); 
console.log("Square Perimeter:", square.perimeter()); // 16

const triangle = new Triangle(10, 5, 6, 8, 10);
console.log("Triangle Area:", triangle.area());
console.log("Triangle Perimeter:", triangle.perimeter()); // 24

