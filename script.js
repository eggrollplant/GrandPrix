const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const car = document.getElementById("img");
const player = document.getElementById("aita");

// img = new Image();
// img.src = 'f1car.png';

// let rotation = 0;
// let x = canvas.width * .04;
// let y = 5;
// let magnitude = 0;
// let vector = 0;
const size = 30;
const parkingsize = canvas.width *.2;

function update()
{
    ctx.clearRect(0,0, canvas.width, canvas.height)
		// y += magnitude;
		// x += magnitude;
		// y += magnitude * Math.cos(vector);
		// x += magnitude * Math.sin(vector);

    ctx.fillStyle="rgba(255,255,255)";
    ctx.fillText("Paddock", canvas.width * .05, 10)
    ctx.fillText("Connections", canvas.width * .797, 10)
    ctx.fillText("TypeRacer", canvas.width * .618, 10)  
    ctx.fillText("Dinosaur", canvas.width * .438, 10)
    ctx.fillText("Connect Four", canvas.width * .2201, 10)
    // car.drawImage(img, x, y, 50, 60);
    // ca.rotate(rotation);
    // requestAnimationFrame(update)
}
update()