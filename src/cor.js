//职责链模式
class action {
  constructor(name){
    this.name = name;
    this.nextAction = null;
  }
  setNextAction(action){
    this.nextAction = action;
  }
  handle(ev){
    if(!ev)return;
    console.log(`${this.name} 审批 ${ev}`  );
    // let flag= false;
    // if(!flag){
    //   console.log(`${this.name}审批不通过`);
    //   return
    // }
    if(this.nextAction != null)this.nextAction.handle(ev);
  }
}


//三个实例
let a1 = new action('组长');
let a2 = new action('经理');
let a3 = new action('总监');

//每个实例的上一层及
a1.setNextAction(a2);
a2.setNextAction(a3);

a1.handle('hjy,请假');