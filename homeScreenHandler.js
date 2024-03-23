// let speed = 3;

// addEventListener("keydown", function(e){
//     if(e.code == 'KeyW')vyu = -1 * speed;
//     if(e.code == "KeyA")vxl = -1 * speed;
//     if(e.code == "KeyS")vyd = speed;
//     if(e.code == "KeyD")vxr = speed;
//     if(e.code == "Space") select = true;
// })

// addEventListener("keyup", function(e){
//     if(e.code == 'KeyW')vyu = 0;
//     if(e.code == "KeyA")vxl = 0;
//     if(e.code == "KeyS")vyd = 0;
//     if(e.code == "KeyD")vxr = 0;
//     if(e.code == "Space") select = false;
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
// let vector = 0;
// let magnitude = 0;
let offset = 0;
let x = 0;
let y = 0;
let scale = .4;

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 68) { //D
    offset += 3;
    if (offset === 360) {
      offset = 0;
    }
    applyStyle();
  } else if (e.keyCode === 65) { //A
    offset -= 3;
    if (offset === -360) {
      offset = 0;
    }
    applyStyle();

  } else if (e.keyCode === 87) { //W
	y -= 50;
    applyStyle();
  } else if (e.keyCode === 83) { //S
	y += 50;
    applyStyle();
  }else if(e.code == "Space") select = true;
});

document.addEventListener('keyup', function(e) {
	// if (e.keyCode === 68) { //D
	//   offset += 3;
	//   if (offset === 360) {
	// 	offset = 0;
	//   }
	//   applyStyle();
	// } else if (e.keyCode === 65) { //A
	//   offset -= 3;
	//   if (offset === -360) {
	// 	offset = 0;
	//   }
	//   applyStyle();
  
	// } else if (e.keyCode === 87) { //W
	//   y -= 50;
	//   applyStyle();
	// } else if (e.keyCode === 83) { //S
	//   y += 50;
	//   applyStyle();
	// }else 
	if(e.code == "Space") select = false;
  });

function applyStyle() {
	img.style.transform = `rotate(${offset}deg) translateY(${y}px) scale(${scale})`;
	// alert(img.offsetTop);
	img.style.top = img.offsetTop + y + "px";
	y = 0;
	img.style.left = img.offsetLeft;
  }

// const rotated = document.getElementById("rotated");

// let rotation = 0;

// const angle = 1;

// function rotateImage() {
// 	// Ensure angle range of 0 to 359 with "%" operator,
  
// 	// e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.
  
// 	rotation = (rotation + angle) % 360;
  
// 	rotated.style.transform = `rotate(${rotation}deg)`;
//   }