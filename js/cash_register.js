console.log('cash register connected');



var calculator = calculatorModule();
var currentNumbers = [];
var currentOperation = null;
//screen
var screen = document.querySelector(".screen");




function clearCurrentNumber(){
  screen.innerHTML = "0";
  currentNumbers=[];
  memory = 0;
};

var keys = document.querySelectorAll(".keys");
for (var i=0; i<keys.length; i++){
  keys[i].addEventListener("click", function(event){
    console.log(event.target.innerHTML);
    var numberValue = parseInt(event.target.innerHTML);
    currentNumbers.push(numberValue);
    screen.innerHTML = numberValue;
  });
}

//number keys 

var addButton = document.getElementById("addme");
  addButton.addEventListener("click", function (event){
  console.log("addme");
  currentOperation = 'add';
  var result = calculator.add();
  console.log("result", result);

});
    var currentNumberToLoad = parseInt(currentNumbers.join(" "));
    calculator.load(currentNumberToLoad);
//event.currentTarget.dataset.number

var equalButton = document.getElementById("equal");
equalButton.addEventListener("click", function (event){
  console.log("get result");
  var result = calculator.getTotal();
  console.log('result', result);
  }
);

if (currentOperation === 'add'){
  console.log("will do adding");
      var currentNumberToLoad = parseInt(currentNumbers.join(" "));
  console.log("bleeeh");
      calculator.add(currentNumberToLoad);
}


