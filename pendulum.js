class Pendulum{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:200

        }
        this.pendulum= Matter.Constraint.create(options);
        World.add(world,this.pendulum);
    }
}