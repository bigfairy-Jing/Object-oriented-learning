//备忘录模式

//状态备忘类
class Memento {
  constructor (content){
    this.content  = content;
  }  
  getContent(){
    return this.content;
  }
}

//备忘列表

class CareTaker{
  constructor (){
    this.list = []
  }
  add(memento){
    this.list.push(memento)
  }
  sub(){
    return this.list.pop();
  }
  get(index){
    return this.list[index]
  }
}


//编译器
class Editor {
  constructor() {
    this.content = null;
  }
  setContent(content){
    this.content = content;
  }
  getContent(){
    return this.content;
  }
  saveContentToMemento(){
    return new Memento(this.content)
  }
  getContentFromMemento(memento){
    this.content = memento.getContent();
  }
}

//测试代码
let editor = new Editor();
let careTaker = new CareTaker();

editor.setContent('1111');
editor.setContent('2222');

careTaker.add(editor.saveContentToMemento());  //存储备忘录

editor.setContent('3333');
careTaker.add(editor.saveContentToMemento());
editor.setContent('44444');

console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(1));

console.log(editor.getContent());













