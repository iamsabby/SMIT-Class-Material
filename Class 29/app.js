// function Car1(name, model, color){
//     this.name = name;
//     this.model = model;
//     this.color = color;
// }

// const alto = new Car1("alto", 2019, "black")
// console.log(alto)

// class Car {
//     constructor(name, model, color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }
// }

//

class Shape {
    constructor(id, x, y){
        this.id =id;
        this.x = x;
        this.y = y;
    }
}

class Circle extends Shape{
    constructor(id, x, y, width, height){
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
}

const abc = new Circle(1,12,12,200,200)
console.log(abc)