class LoteryManager {
  constructor () {
    console.info('ES6 Modules work!');
  }
  
  init(value){
    this.value = value;
    console.log("this.value", this.value);
    
  }
}

export default LoteryManager;

