
var calculatorModule = (function (){
  var _memory = 0;
  var _total = 0;

  function inspect(num1){
    if(typeof num1 !== "number"){
      throw new Error("Hey, I'mma give you Lickins!");
    }
  }

   function load (xLoad){
    inspect(xLoad);
    _total = xLoad;
    return _total;
   }

   function getTotal (){
    return _total;
   }

   function add(x){
    inspect(x);
    _total += x;
    return _total;
   }


   function subtract(x){
    inspect(x);
    _total -= x;
    return _total;
   }

   function multiply(x){
    inspect(x);
    _total *= x;
    return _total;
   }

   function divide(num1, num2){
    inspect(x);
    _total /= x;
    return _total;

   }


   function recallMemory(){
    return  _memory;
   }



   function saveMemory(){
    _memory = total;
    return _memory;
   }

   function clearMemory(){
    _memory = 0;
    return _memory;
   }



  var calculator = {
    load:load,
    getTotal:getTotal,
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide: divide,
    getBalance: getBalance,
    depBalance: depBalance,
    wdBalance: wdBalance,
    clearMemory: clearMemory,
  };

  return calculator;
});
console.log('calcu connected')
/*var calcTest = calculatorModule();
calcTest.add(50);
calcTest.add(50);
calcTest.multiply(2);
console.log(calcTest.getTotal());*/


