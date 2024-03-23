// let speed = 1;
// let vyu = 0;
// let vxl = 0;
// let vyd = 0;
// let vxr = 0;
// let y = 0;
// let x = 0;
// let scale = .4;

// addEventListener("keydown", function(e){
//     if(e.code == 'KeyW')vyu +=  speed;
//     if(e.code == "KeyA")vxl +=  speed;
//     if(e.code == "KeyS")vyd += speed;
//     if(e.code == "KeyD")vxr += speed;
//     if(e.code == "Space")
// 	{
// 		console.log(x)
// 		console.log(y)
//         if(	.width * .86 + parkingsize/2 > x && canvas.width * .86 + parkingsize/2 < x + size && y < 20)
//             window.location.href = "Connections_Dupe/connectionsIndex.html";
//         if(canvas.width * .66 + parkingsize/2 > x && canvas.width * .66 + parkingsize/2 < x + size && y < 20)
//             window.location.href = "TypeRacer/typeRacerIndex.html";
//         if(canvas.width * .46 + parkingsize/2 > x && canvas.width * .46 + parkingsize/2 < x + size && y < 20)
//             window.location.href = "Dinosaur/dino-game/dinosaurIndex.html";
//         if(canvas.width * .06 + parkingsize/2 > x && canvas.width * .06 + parkingsize/2 < x + size && y < 20)
//             window.location.href = "index.html";
// 	}

// 		applyStyle();
// })

// addEventListener("keyup", function(e){
//     if(e.code == 'KeyW')vyu = 0;
//     if(e.code == "KeyA")vxl = 0;
//     if(e.code == "KeyS")vyd = 0;
//     if(e.code == "KeyD")vxr = 0;
// 	applyStyle();
// })


// let vector = 0;
// let magnitude = 0;
// let magnitudeChange = 0;

// addEventListener("keydown", function(e){
// 	if(e.code == 'KeyW' && magnitude >= -2)
// 	{
// 		if(magnitude == 0)
// 		{
// 			magnitude = -1
// 		}
// 		magnitude += (magnitude) * 1.5;
// 	}
// 	if(e.code == "KeyS" && magnitude <= 2)
// 	{
// 		if(magnitude == 0)
// 		{
// 			magnitude = 1;
// 		}
// 		magnitude += (magnitude) * 1.5;
// 	}

// 	if(e.code == 'KeyD')
// 	{
// 		rotation = 1;
// 		vector += .1 * Math.sqrt(magnitude);
// 		if(vector >= 360)
// 		{
// 			vector = 0;
// 		}
// 	}
// 	if(e.code == 'KeyA')
// 	{
// 		rotation = -1;
// 		vector -= .1 * Math.sqrt(magnitude);
// 		if(vector <= 0)
// 		{
// 			vector = 360;
// 		}
// 	}

// 	if(e.code == "Space") select = true;
// })

// addEventListener("keyup", function(e){
// 	if(e.code == 'KeyW')
// 	{
// 		magnitude = 0;
// 	}
// 	if(e.code == "KeyS")
// 	{
// 		magnitude = 0;
// 	}
// 	if(e.code == "KeyD" || e.code == "KeyA")rotation = 0;
// 	if(e.code == "Space") select = false;
// })

const img = document.getElementById('img');
let vector = 0;
// let magnitude = 0;   
// let offset = 0;
let x = 0;
let y = 0;
// key = [0, 0, 0, 0, 0];

document.addEventListener('keydown', function(e) 
{
	if (e.keyCode === 87) { //W
		y -= Math.round(15 * Math.cos(Math.PI * (vector/180)));
        x += Math.round(15 * Math.sin(Math.PI * (vector/180)));
		applyStyle();
  }
	if (e.keyCode === 83) { //S
		y += Math.round(15 * Math.cos(Math.PI * (vector/180)));
        x -= Math.round(15 * Math.sin(Math.PI * (vector/180)));
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
		console.log(img.getBoundingClientRect().top);
		console.log(img.getBoundingClientRect().left);
		console.log(screen.height * .7);
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

// function move()
// {
// 	if(key[0] == 1) //W
// 	{
// 		if(magnitude == 0) magnitude = -1;
// 		if(magnitude >= -2) magnitude += (magnitude) * 1.5;
// 		// applyStyle();

// 		if(key[2] == 1) //D
// 		{
// 			vector += 1 * Math.sqrt(Math.abs(magnitude));
// 			if (vector === 360) {
// 				vector = 0;
// 			}
// 			// applyStyle();
// 		}
// 		else if(key[3] == 1) //A
// 		{
// 			vector -= 1 * Math.sqrt(Math.abs(magnitude));
// 			if (vector === -360) {
// 				vector = 0;
// 			}
// 			// applyStyle();
// 		}
// 		applyStyle();
// 	}
// 	else if(key[1] == 1) //S
// 	{
// 		if(magnitude == 0) magnitude = 1;
// 		if(magnitude <= 2) magnitude += (magnitude) * 1.5;
// 		// applyStyle();

// 		if(key[2] == 1) //D
// 		{
// 			vector -= 1 * Math.sqrt(Math.abs(magnitude));
// 			if (vector === 360) {
// 				vector = 0;
// 			}
// 			// applyStyle();
// 		}
// 		else if(key[3] == 1) //A
// 		{
// 			vector += 1 * Math.sqrt(Math.abs(magnitude));
// 			if (vector === -360) {
// 				vector = 0;
// 			}
// 			// applyStyle();
// 		}
// 		applyStyle();
// 	}
// }

// document.addEventListener('keyup', function(e) {
// 	if (e.keyCode === 87) { //W
// 		key[0] = 0;
// 	  magnitude = 0;
// 	}if (e.keyCode === 83) { //S
// 		key[1] = 0;
// 	  magnitude = 0;
// 	} 
// 	if (e.keyCode === 68) { //D
// 		key[2] = 0;
// 	}
// 	if (e.keyCode === 65) { //A
// 		key[3] = 0;
// 	}
// 	if(e.code == "Space") 
// 	{
// 		key[4] = 0;
// 		select = false;
// 	}
//   });

function applyStyle() {
	img.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${vector}deg) scale(${Math.trunc(screen.width/400) * .1})`;
	img.style.top = img.offsetTop + y + "px";
	img.style.left = img.offsetLeft + x + "px";
    y = 0; x = 0;
  }

//   function update(){
// 	applyStyle();
//   }
//   update()

// const rotated = document.getElementById("rotated");

// let rotation = 0;

// const angle = 1;

// function rotateImage() {
// 	// Ensure angle range of 0 to 359 with "%" operator,
  
// 	// e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
  
// 	rotation = (rotation + angle) % 360;
  
// 	rotated.style.transform = `rotate(${rotation}deg)`;
//   }