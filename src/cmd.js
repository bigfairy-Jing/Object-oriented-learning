//命令者模式

//接收者 

class Receiver {
  exec(){
    console.log('执行')
  }
}

class Command {
  constructor(receiver){
    this.receiver = receiver
  }
  cmd(){
    console.log('执行命令')
    this.receiver.exec()
  }
}

class Invoker {
  constructor(command){this.command = command}
  invoke(){
    console.log('开始')
    this.command.cmd();
  }  
}
let soldier = new Receiver();
let trupeter = new Command(soldier);
let general = new Invoker(trupeter);

general.invoke();