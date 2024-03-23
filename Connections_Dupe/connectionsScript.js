const element1 = document.getElementById("1");
const element2 = document.getElementById("2");
const element3 = document.getElementById("3");
const element4 = document.getElementById("4");
const element5 = document.getElementById("5");
const element6 = document.getElementById("6");
const element7 = document.getElementById("7");
const element8 = document.getElementById("8");
const element9 = document.getElementById("9");
const element10 = document.getElementById("10");
const element11 = document.getElementById("11");
const element12 = document.getElementById("12");
const element13 = document.getElementById("13");
const element14 = document.getElementById("14");
const element15 = document.getElementById("15");
const element16 = document.getElementById("16");

const milk = [Racecar, Racecar, Racecar, Racecar];
const bowl = [Racer, Racer, Racer, Racer];
const cereal = [Racist, Racist, Racist, Raceist];
const spoon = [Race, Race, Race, Race];
const breakfast = [];


element.addEventListener("click", function()
{
    alert("you son of a bitch");
});

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createButtons(){
    var list = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

        for (var i = list.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = list[i];
              list[i] = list[j];
              list[j] = temp;
          }
          
        for( var i = 1; i <= list.length; i++){
          var btn = document.createElement("button");
          btn.className = "grid-cell open-sans-font grid_button";
          btn.id = list;
          t = document.createTextNode(list[i-1]);
          btn.appendChild(t);
          document.getElementById("racer").appendChild(btn);
        }
      </script>
}

