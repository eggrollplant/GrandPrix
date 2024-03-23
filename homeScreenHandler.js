const img = document.getElementById('img');
let vector = 0;
let x = 0;
let y = 0;
let speed = 15;

document.addEventListener('keydown', function(e) 
{
    if (e.keyCode === 27) {
        speed += 10;
    }
	if (e.keyCode === 87) { //W
		y -= Math.round(speed * Math.cos(Math.PI * (vector/180)));
        x += Math.round(speed * Math.sin(Math.PI * (vector/180)));
		applyStyle();
  }
	if (e.keyCode === 83) { //S
		y += Math.round(speed * Math.cos(Math.PI * (vector/180)));
        x -= Math.round(speed * Math.sin(Math.PI * (vector/180)));
		applyStyle();
  }

	if (e.keyCode === 68) { //D
        vector += 10;
		if (vector === 360) {
			vector = 0;
		}
		applyStyle();
	}
	if (e.keyCode === 65) { //A
        vector -= 10;
		if (vector === -360) {
			vector = 0;
		}
		applyStyle();
	}
    
	if(e.code == "Space")
	{
        if(screen.width * .2 + screen.width * .516 + parkingsize/2 > img.getBoundingClientRect().left && 
			screen.width * .2 + screen.width * .516 + parkingsize/2 < screen.width * .2 + img.getBoundingClientRect().left + size && 
			screen.height * .1 < img.getBoundingClientRect().top && 
			screen.height * .1 + screen.height * .063 > img.getBoundingClientRect().top)
            window.location.href = "Connections_Dupe/connectionsIndex.html";
        if(screen.width * .2 + screen.width * .396 + parkingsize/2 > img.getBoundingClientRect().left &&
			screen.width * .2 + screen.width * .396 + parkingsize/2 < screen.width * .2 + img.getBoundingClientRect().left + size && 
			screen.height * .1 < img.getBoundingClientRect().top && 
			screen.height * .1 + screen.height * .063 > img.getBoundingClientRect().top)
            window.location.href = "TypeRacer/typeRacerIndex.html";
        if(screen.width * .2 + screen.width * .276 + parkingsize/2 > img.getBoundingClientRect().left &&
			screen.width * .2 + screen.width * .276 + parkingsize/2 < screen.width * .2 + img.getBoundingClientRect().left + size && 
			screen.height * .1 < img.getBoundingClientRect().top && 
			screen.height * .1 + screen.height * .063 > img.getBoundingClientRect().top)
            window.location.href = "Dinosaur/dinosaurIndex.html";
		if(screen.width * .2 + screen.width * .156 + parkingsize/2 > img.getBoundingClientRect().left &&
			screen.width * .2 + screen.width * .156 + parkingsize/2 < screen.width * .2 + img.getBoundingClientRect().left + size && 
			screen.height * .1 < img.getBoundingClientRect().top && 
			screen.height * .1 + screen.height * .063 > img.getBoundingClientRect().top)
			   window.location.href = "ConnectFour/connectFourIndex.html";
        if(screen.width * .2 + screen.width * .036 + parkingsize/2 > img.getBoundingClientRect().left &&
			screen.width * .2 + screen.width * .036 + parkingsize/2 < screen.width * .2 + img.getBoundingClientRect().left + size && 
			screen.height * .1 < img.getBoundingClientRect().top && 
			screen.height * .1 + screen.height * .063 > img.getBoundingClientRect().top)
            window.location.href = "index.html";
	}
});

function applyStyle() {
	img.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${vector}deg) scale(${.3})`;
	img.style.top = img.offsetTop + y + "px";
	img.style.left = img.offsetLeft + x + "px";
    img.scrollIntoView();
    y = 0; x = 0;
  }