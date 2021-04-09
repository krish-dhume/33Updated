const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld,backgroundImage,ground;
var snow=[];
var snowblue=[];
function preload(){
  backgroundImage=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1200,700);
  

  myengine=Engine.create();
  myworld=myengine.world;
  
  
  
}

function draw() {
  Engine.update(myengine)
  background(backgroundImage);
  if(frameCount%60===0){
snow.push(new Snow(random(width/2+700,width/2-700,width/2+800,width/2-800,width/2+600,width/2-600),10,10))
  }
  if(frameCount%65===0){
snowblue.push(new SnowBlue(random(width/2+400,width/2-400,width/2+500,width/2-500),10,10))
  }
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  for(var i=0;i<snowblue.length;i++){
    snowblue[i].display();
  }


}