//观察者模式1  
//主题保存状态  状态变化之后促发所有的观察者对象
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }
  attach(observer) {

    this.observers.push(observer)
  }
}
//观察者
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update,state: ${this.subject.getState()}`)
  }
}

//测试   主题传入到观察者,  
let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s);
s.setState(1)

//主题变化   促发观察者