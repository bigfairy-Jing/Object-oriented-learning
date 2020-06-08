class SingleObject {
  login() {
    console.log('login')
  }
}
SingleObject.getInstance = (() => {
  let instance;
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  }
})();