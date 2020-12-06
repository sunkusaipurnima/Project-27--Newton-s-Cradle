class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
        this.offsetX= offsetX;
        this.offsetY= offsetY;
        // console.log(bodyA);
        // console.log(bodyB)
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{
                x:this.offsetX,
                y:this.offsetY
            },
            stiffness:1,
            length:200
        }

        
        //console.log(options)
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
        //console.log(this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY );
       
    }
}