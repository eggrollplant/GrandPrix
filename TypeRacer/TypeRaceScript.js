/*var letters = ["a", "b"];
var letter = "a";

addEventListener("keyup", function(e){
	if (e.code == "Space") {
        if ((String)(document.getElementById("type").value == "a")) {
            console.log(document.getElementById("type").value);
            getLetter();
        }
        this.document.getElementById("type").value = "";
    }
})

function getLetter() {
    var letter = letters[Math.floor(Math.random() * 2)];
    var placeHolder = document.createElement("input");

    placeHolder.className = "type-container";
    placeHolder.id = letter;

    t = document.createTextNode(letter);
    placeHolder.appendChild(t);
    document.getElementById("type").appendChild(placeHolder);
}*/

var SuperPlaceholder = function(options) {  
    this.options = options;
    this.element = options.element
    this.placeholderIdx = 0;
    this.charIdx = 0;
    
  
    this.setPlaceholder = function() {
        placeholder = options.placeholders[this.placeholderIdx];
        var placeholderChunk = placeholder.substring(0, this.charIdx+1);
        document.querySelector(this.element).setAttribute("placeholder", this.options.preText + " " + placeholderChunk)
    };
    
    this.onTickReverse = function(afterReverse) {
      if (this.charIdx === 0) {
        afterReverse.bind(this)();
        clearInterval(this.intervalId); 
        this.init(); 
      } else {
        this.setPlaceholder();
        this.charIdx--;
      }
    };
    
    this.goReverse = function() {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.onTickReverse.bind(this, function() {
          this.charIdx = 0;
          this.placeholderIdx++;
          if (this.placeholderIdx === options.placeholders.length) {
            // end of all placeholders reached
            this.placeholderIdx = 0;
          }
        }), this.options.speed)
    };
    
    this.onTick = function() {
        var placeholder = options.placeholders[this.placeholderIdx];
        if (this.charIdx === placeholder.length) {
          // end of a placeholder sentence reached
          setTimeout(this.goReverse.bind(this), this.options.stay);
        }
        
        this.setPlaceholder();
      
        this.charIdx++;
      }
    
    this.init = function() {
      this.intervalId = setInterval(this.onTick.bind(this), this.options.speed);
    }
    
    this.kill = function() {
      clearInterval(this.intervalId); 
    }
  }