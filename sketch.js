var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400,200,70,60);
  movingRect.shapeColor = "green";
  movingRect.debug = "true";
  fixedRect= createSprite(400,100,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = "true";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("black"); 

  /*movingRect.x = mouseX;
  movingRect.y = mouseY;*/

/*if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
*/
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}
 
  drawSprites();
}