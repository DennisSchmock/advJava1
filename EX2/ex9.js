/**
 * Created by dennisschmock on 16/02/2017.
 */
class Shape {
    constructor(color) {
        this._color = color;
    }

    getArea() {
        return undefined;
    }

    getPerimeter() {
        return undefined;
    }

    toString() {
        return `Color: ${this._color}`
    }

    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius
    }

    getRadius() {
        return this._radius;
    }

    setRadius(radius) {
        this._radius = radius;
    }

    area = function() {
        return (this._radius * this._radius) * Math.PI;
    }

    perimeter = function() {
        return (2 * this._radius) * Math.PI;
    }

    toString() {
        return `Color: ${this.getColor()}
Area: ${this.area}
Perimeter: ${this.perimeter}`
    }

}

class Cylinder extends Circle {
    constructor(color,radius,height){
        super(color,radius);
        this._height = height;
    }
    getHeight(){
        return this._height;
    }
    setHeight(height){
        this._height = height;
    }
    getVolume(){
        return this.getArea()*this._height;
    }

    toString(){
        return `Color. ${this.getColor()}
Area: ${this.area}`
    }

}