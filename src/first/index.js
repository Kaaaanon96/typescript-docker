function increment(num) {
    return num + 1;
}
// console.log(increment("999"));
console.log(increment(999));
// let foo:number = '123';
var foo = 123;
console.log(increment(foo));
var point2D = { x: 0, y: 20 };
var point3D = { x: 2, y: 2, z: 2 };
function echoPoint2D(point) {
    console.log(point.x);
    console.log(point.y);
}
echoPoint2D(point2D);
echoPoint2D(point3D);
echoPoint2D({ x: 0, y: 20 });
// echoPoint2D({x: 0})
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 0);
var p3 = p1.add(p2);
console.log(p3);
