var rect1; 
var rect2 ;
var rect3 ;


function setup() {
  createCanvas(800,400);
   rect1 = createSprite(200, 200, 50, 50);
    rect2 = createSprite(400,200,50,50);
    rect3 = createSprite(600,200,50,50);
}

function draw() {
  background(0);  

  rect1.x = mouseX + 300;
  rect1.y = mouseY + 200;

  rect2.x = mouseX + 150;
  rect2.y = mouseY + 150;

  rect3.x = mouseX;
  rect3.y = mouseY;

  drawSprites();
}