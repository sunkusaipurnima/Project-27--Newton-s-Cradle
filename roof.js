class Roof{
    constructor(x,y,w,h){
        var options= {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width= w;
        this.height= h;

    }

    display(){
        var pos= this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}