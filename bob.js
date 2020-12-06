class Bob{
    constructor(x,y,r){
        var options ={
            isStatic : false,
            restituition:1,
            friction:0,
            density:0.8
        }
        this.body= Matter.Bodies.circle(x,y,r,options);
        this.r = 20;
        World.add(world,this.body);
        //console.log(this.body)
        
       
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        fill("white");
        ellipseMode(RADIUS);        
        ellipse(0,0,this.r,this.r);
        pop();
    
    }
}