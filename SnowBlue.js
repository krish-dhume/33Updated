class SnowBlue{
    constructor(x,y){
      
        var options={
           restitution:0.4
            
        }
      
        this.body=Bodies.circle(x,y,60,options)
        World.add(myworld,this.body)
        this.radius=60;
       this.image=loadImage("snow4.webp")

    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
      pop()
    }
}
