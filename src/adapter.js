class Adaptee {
  specificRequest() {
    return '靖阳是一个大帅哥'
  }
}
class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }
  request() {
    let info = this.adaptee.specificRequest();
    return `${info} -- 说明 --- 毋庸置疑`
  }
}


let target = new Target();
let res = target.request();
console.log(res)