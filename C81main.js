
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d")

color = "red";

ctx.beginPath();
ctx.strokestyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
//taking color from input box
//additional activity start
  color = document.getElementById("color").Value;
  console.log(color);
//addition activity ends

mouse_x = e.clientX - canvas. offsetleft;
mouse_y = e.clientY - canvas. offsettop;

console.log("x = " + mouse_x + ",Y = " +mouse_Y
circle(mouse_x, mouse_Y);

}
function circle(mouse_x,mouse_Y)
{
ctx.beginPath();
ctx.strokestyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x,mouse_Y,40,0,2*Math.PI);
ctx.stroke();
}

//additional activty

function clearArea()
{
    ctx.clearRect(0,0, canvas.width,canvas.height);
}