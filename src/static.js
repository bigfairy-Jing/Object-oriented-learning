class State {
  constructor(color){
    this.color = color;
  }
  handle(context){
    console.log(`turn to ${this.color} light`);
    //设置状态
    context.setState(this)
  }
}

class Context {
  constructor(){
    this.state = null;
  }
  getState(){return this.state;}
  setState(state){this.state = state}
}
let context = new Context;
let green = new State('green');
let yellow = new State('yellow')