console.log("TESTING")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
const gameOne = canvas.getContext('2d')

let x = 5;
let y = 5;
let vxl = 0;
let vxr = 0;
let vyu = 0;
let vyd = 0;
let size = 20;
let select = false;

function update()
{
    ctx.clearRect(0,0, canvas.width, canvas.height)
    if(x + size < canvas.width - 5)
        x += vxr;
    if(x >= 10)
        x += vxl;
    if(y + size < canvas.height - 5)
        y += vyd;
    if(y >= 10)
        y += vyu;
    if(select)
    {
        if(canvas.width - size + 5 > x && canvas.width - size + 5 < x + size && y < 20)
            window.location.href = "connectionsIndex.html";
    }
    gameOne.fillRect(canvas.width - size, 10,10,10)
    ctx.fillRect(x,y, size, size)   
    requestAnimationFrame(update)
}
update()