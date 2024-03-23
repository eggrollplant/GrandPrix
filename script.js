const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const car = document.getElementById("img");

// img = new Image();
// img.src = 'f1car.png';

// let rotation = 0;
// let x = canvas.width * .04;
// let y = 5;
// let magnitude = 0;
// let vector = 0;
const size = 30;
const parkingsize = 20;
let select = false;

function update()
{
    ctx.clearRect(0,0, canvas.width, canvas.height)
		// y += magnitude;
		// x += magnitude;
		// y += magnitude * Math.cos(vector);
		// x += magnitude * Math.sin(vector);
    if(select)
    {
        if(canvas.width * .86 + parkingsize/2 > car.x && canvas.width * .86 + parkingsize/2 < car.x + size && car.y < 20)
            window.location.href = "Connections_Dupe/connectionsIndex.html";
        if(canvas.width * .66 + parkingsize/2 > car.x && canvas.width * .66 + parkingsize/2 < car.x + size && car.y < 20)
            window.location.href = "TypeRacer/typeRacerIndex.html";
        if(canvas.width * .46 + parkingsize/2 > car.x && canvas.width * .46 + parkingsize/2 < car.x + size && car.y < 20)
            window.location.href = "Dinosaur/dino-game/dinosaurIndex.html";
        if(canvas.width * .06 + parkingsize/2 > car.x && canvas.width * .06 + parkingsize/2 < car.x + size && car.y < 20)
            window.location.href = "index.html";
    }
    
    ctx.fillText("Paddock", canvas.width * .05, 10)
    ctx.fillText("Connections", canvas.width * .797, 10)
    ctx.fillText("TypeRacer", canvas.width * .618, 10)  
    ctx.fillText("Dinosaur", canvas.width * .438, 10)
    // car.drawImage(img, x, y, 50, 60);
    // ca.rotate(rotation);
    // requestAnimationFrame(update)
}
update()