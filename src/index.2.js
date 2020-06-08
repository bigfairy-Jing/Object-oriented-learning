// class Persion {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name
//   }
// }
// let pet = new Persion('靖阳帅哥');
// alert(pet.getName())


class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}
class KuaiCar extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 2
  }
}
class ZhuanCar extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 5
  }
}
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log('行程开始,展示信息')
  }
  end() {
    console.log('行程结束,金额:' + this.car.price * 5);
  }
}
let car1 = new KuaiCar(10, 'fanyue');
let car2 = new ZhuanCar(20, 'yuhou');
let trip1 = new Trip(car1);
let trip2 = new Trip(car2);
trip1.end()
// alert(trip1.end())
// alert(trip2.end())