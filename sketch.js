const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

var c
function setup(){
    canvas = createCanvas(1640,890);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,200)

    ground = new Ground(600,840,400,200)

    stand = new Ground (1000,550,100,20)

    stand1 = new Ground (600, 590, 100, 20)

    stand2 = new Ground (800,500, 100, 20)

    stand3 = new Ground (700,450, 100, 20)

    stand4 = new Ground (890,400, 100, 20)

    stand5 = new Ground (600,350, 100, 20)

    stand6 = new Ground (700, 225, 100, 20)

    
    winStand = new Ground (800,100,100,20)
    

    invisibleGround = new Ground(960, 880, 2000000,20)
}
    function draw(){
        background(0);
        Engine.update(engine);
        box1.display();
        ground.display();
        invisibleGround.display();
        stand1.display();
        stand2.display();
        stand3.display();
        stand4.display();
        stand5.display();
        stand6.display();
        stand.display();

        RGB:255,140, 360
        winStand.display();

        
      console.log(fill)

    }
    function keyPressed(){
        
        if (keyCode===39)
        {
            
            Matter.Body.setVelocity(box1.body,{x:1.3,y:0})
            
        }

        if (keyCode===37)
        {
            
            Matter.Body.setVelocity(box1.body,{x:-1.3,y:0})
            
        }

        if (keyCode===38)
        {
            
            Matter.Body.setVelocity(box1.body,{x:0,y:-8})
            
        }
    }