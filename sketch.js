
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const MouseConstraint= Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var canvas;
var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var myMouse,myMouseConstraint;



function setup() {
	canvas=createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof= new Roof(400,150,250,20);
    //console.log(roof.body)
    bob1= new Bob(400,350,20);
    //console.log(bob1.body)
    bob2= new Bob(440,350,20);
    bob3= new Bob(480,350,20);
    bob4= new Bob(360,350,20);
    bob5= new Bob(320,350,20);

    rope1= new Rope(bob1.body,roof.body,0,0);
    rope2 = new Rope(bob2.body,roof.body,40,0);
    rope3 = new Rope(bob3.body,roof.body,80,0);
    rope4 = new Rope(bob4.body,roof.body,-40,0);
    rope5 = new Rope(bob5.body,roof.body,-80,0);

    // myMouse= Mouse.create(canvas.elt)
    // myMouse.pixelRatio= pixelDensity();
    // console.log(myMouse);
    // var options= {mouse:myMouse};
    // myMouseConstraint= MouseConstraint.create(engine,options);
    // World.add(world,myMouseConstraint)
    // console.log(myMouseConstraint);

}


function draw() {

  
  
  background(220);
  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  // if(myMouseConstraint.body){
  //   Matter.Body.applyForce(myMouseConstraint.body,myMouseConstraint.body.position,{x:80,y:-100})
  // }
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position, {x:-100,y:-100});
   // Matter.Body.translate(bob3.body,{x:50,y:-50})
  }
}



