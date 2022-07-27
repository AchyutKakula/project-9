var box 

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
box.velocityX = box.velocityX + 3;
function draw() 
{
  background(220);
drawSprites();
}




