var dictionary = ["this", "is", "just", "a", "test"];
var word = "a";

fetch("dictionary.txt")
  .then((res) => res.text())
  .then((text) => {
    dictionary = text.split('\r\n');
    start();
   })
  .catch((e) => console.error(e));

getWord();

addEventListener("keyup", function(e){
	if (e.code == "Space" || e.code == "Enter") {
        if (("" + document.getElementById("type").value) == word + " " || ("" + document.getElementById("type").value) == word) {
            console.log(document.getElementById("type").value);
            getWord();
        }

        this.document.getElementById("type").value = "";
    }
  
    document.getElementById("type").setAttribute("placeholder", word)
})

function getWord() {
  word = dictionary[Math.floor(Math.random() * dictionary.length)];
}

function start() {
  getWord();
  this.document.getElementById("type").setAttribute("placeholder", word);
  this.document.getElementById("type").focus();
}