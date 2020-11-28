var bullet, wall,speed, thickness, weight

function setup(){
  createCanvas(1000,400);
  bullet=createSprite(50,200,50,10);
  speed=random(223,321);
  thickness=random(22,83);
  weight- random(30,52);
  wall = createSprite(800,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;

}
function draw(){


background ("black");
drawSprites()
if (hasCollided(bullet,wall)){
  bullet.velocityX=0;}
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
console.log(damage);

if( damage >10){
  wall.shapeColor="red";
console.log(damage);
}
if (damage<10){
  wall.shapeColor= "green";
  console.log(damage);
  

}
}

function hasCollided(lBullet,lWall){
  bulletEdge=lBullet.x+lBullet.width;
  wallEdge=lWall.x;
  console.log("insideFucntion")
  if (bulletEdge>=wallEdge){
    return true;
  }
  return false;

}