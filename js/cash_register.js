console.log('cash register connected');


/*
var button1 = document.querySelector("#button1");
  button1.addEventListener("click", function () {
  console.log("1");
  currentNumber = 1;
});*/


/*var keys = document.querySelectorAll(".keys");
  keys.addEventListener("click", function () {
  console.log("What number am I?");
});*/

currentNumber = null;

var keys = document.querySelectorAll(".keys");
for (var i=0; i<keys.length; i++){
  keys[i].addEventListener("click", function(){
    console.log(event.target.innerHTML);
  });
}

//event.currentTarget.dataset.number

