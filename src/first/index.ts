function increment(num: number) {
  return num + 1;
}

// console.log(increment("999"));
console.log(increment(999))

// let foo:number = '123';
let foo: number = 123;

console.log(increment(foo));

interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

let point2D: Point2D = { x: 0, y: 20 }
let point3D: Point3D = { x: 2, y: 2, z: 2 }

function echoPoint2D(point: Point2D) {
  console.log(point.x);
  console.log(point.y);
}

echoPoint2D(point2D);
echoPoint2D(point3D);
echoPoint2D({x: 0, y: 20});
// echoPoint2D({x: 0})

class Point {
  constructor(public x: number, public y: number) {
  }

  add(point: Point){
    return new Point(this.x + point.x, this.y + point.y)
  }
}

let p1 = new Point(0, 10);
let p2 = new Point(10, 0);
let p3 = p1.add(p2);

console.log(p3);


