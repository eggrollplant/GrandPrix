let speed = 5;

addEventListener("keydown", function(e){
    if(e.code == 'KeyW')vyu = -1 * speed;
    if(e.code == "KeyA")vxl = -1 * speed;
    if(e.code == "KeyS")vyd = speed;
    if(e.code == "KeyD")vxr = speed;
    if(e.code == "Space") select = true;
})

addEventListener("keyup", function(e){
    if(e.code == 'KeyW')vyu = 0;
    if(e.code == "KeyA")vxl = 0;
    if(e.code == "KeyS")vyd = 0;
    if(e.code == "KeyD")vxr = 0;
    if(e.code == "Space") select = false;
})