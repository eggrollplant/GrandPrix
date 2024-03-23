const milk = ["CREDIT", "GLORY", "PRAISE", "PROPS"];
const bowl = ["DISCOVER", "FIND", "LEARN", "REALIZE"];
const cereal = ["CHASE", "SHADOW", "TAIL", "TRACK"];
const spoon = ["NAME", "PHOTO", "STAMP", "VISA"];
const breakfast = [];
const meals = [];
const hints = ["KUDOS","BECOME AWARE OF","PURSUE","SEEN IN A PASSPORT"];

var list = milk.concat(bowl).concat(cereal).concat(spoon);

document.addEventListener("DOMContentLoaded", createButtons);


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function createButtons() {
  shuffleArray(list);
  for (var i = 0; i < list.length; i++) {
    var btn = document.createElement("button");
    btn.className = "grid-cell open-sans-font grid_button";
    btn.id = list[i];
    t = document.createTextNode(list[i]);
    btn.appendChild(t);
    document.getElementById("racer").appendChild(btn);
    breakfast[i] = document.getElementById(list[i]);
  }
}

window.addEventListener("load", function () {
  breakfast[0].addEventListener("click", function () { addToList(0) });
  breakfast[1].addEventListener("click", function () { addToList(1) });
  breakfast[2].addEventListener("click", function () { addToList(2) });
  breakfast[3].addEventListener("click", function () { addToList(3) });
  breakfast[4].addEventListener("click", function () { addToList(4) });
  breakfast[5].addEventListener("click", function () { addToList(5) });
  breakfast[6].addEventListener("click", function () { addToList(6) });
  breakfast[7].addEventListener("click", function () { addToList(7) });
  breakfast[8].addEventListener("click", function () { addToList(8) });
  breakfast[9].addEventListener("click", function () { addToList(9) });
  breakfast[10].addEventListener("click", function () { addToList(10) });
  breakfast[11].addEventListener("click", function () { addToList(11) });
  breakfast[12].addEventListener("click", function () { addToList(12) });
  breakfast[13].addEventListener("click", function () { addToList(13) });
  breakfast[14].addEventListener("click", function () { addToList(14) });
  breakfast[15].addEventListener("click", function () { addToList(15) });
});


function addToList(index) {
  var property = document.getElementById(list[index]);
  if (meals.includes(list[index])) {
    property.style.backgroundColor = "#FFFFFF";
    meals.splice(meals.indexOf(list[index]), 1);
    return;
  }
  property.style.backgroundColor = "#7FFF00";
  meals.push(list[index]);
  //alert(meals.length);
  if (meals.length == 4) {
    if (compareArrays(milk, meals)){
      alert(hints[0]);
      removeCorrect(meals);
      meals.splice(0, meals.length)
      return;
    }
    if (compareArrays(bowl, meals)){
      alert(hints[1]);
      removeCorrect(meals);
      meals.splice(0, meals.length)
      return;
    }
    if (compareArrays(cereal, meals)){
      alert(hints[3]);
      removeCorrect(meals);
      meals.splice(0, meals.length)
      return;
    }
    if (compareArrays(spoon, meals)){
      alert(hints[4]);
      removeCorrect(meals);
      meals.splice(0, meals.length)
      return;
    }

    alert("YOU'RE DOGSHIT");
    setTimeout(function () {
      meals.forEach(element => {
        document.getElementById(element).style.backgroundColor = "#FFFFFF";
      });
      meals.splice(0, meals.length)
    }, 1000);
  }
}

function compareArrays(arr1, arr2) {
  if (!(arr1 != null && arr2 != null && arr1.length == arr2.length)) 
      return false;
  /* copy the arrays so that the original arrays are not affected when we set the indices to "undefined" */
  arr1 = [].concat(arr1);
  arr2 = [].concat(arr2);

  return arr1.every(function (element, index) {
    return arr2.some(function (e, i) {
      return e === element && (arr2[i] = undefined, true);
    });
  });

}

function removeCorrect(arr) {
  arr.forEach(element => {
    list[list.indexOf(element)] = undefined;
    document.getElementById(element).remove();
  })
}