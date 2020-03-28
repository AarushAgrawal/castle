
function setup() {
  createCanvas(800,400);

  createSprite(100,400,20,700);
  createSprite(150,400,50,500);
  createSprite(220,400,50,400);
  createSprite(300,400,70,350);
  createSprite(380,400,50,400);
  createSprite(450,400,50,500);
  createSprite(500,400,20,700);

 

}

function draw() {
  background(0); 

  triangle(125,150,172,149,150,98);
  triangle(426,150,475,150,450,98);
  triangle(264,225,332,225,300,155);

  console.log(mouseX +" "+ mouseY);

  drawSprites();
}