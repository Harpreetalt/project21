var canvas;
var music,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(770,600);

    //create 4 different surfaces
    box1=createSprite(100,550,170,15);
    box1.shapeColor="blue";
    box2=createSprite(280,550,170,15);
    box2.shapeColor="cyan";
    box3=createSprite(470,550,170,15);
    box3.shapeColor="green";
    box4=createSprite(660,550,180,15);
    box4.shapeColor="maroon";




    //create box sprite and give velocity
    ball=createSprite(random(20,750),200,15,15);
    ball.shapeColor="white";
    ball.setVelocity(4,7);
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
  
    ball.bounceOff(edges);

   

    //add condition to check if box touching surface and make it box

    if(box1.isTouching(ball)  && ball.bounceOff(box1) )
    {
        ball.shapeColor="blue";
        music.play();
        

    }
    if(box2.isTouching(ball))
    {
        ball.shapeColor="cyan";
        ball.setVelocity(0,0);
        music.stop();

    }
    if(box3.isTouching(ball) &&ball.bounceOff(box3))
    {
        ball.shapeColor="green";
        //ball.setVelocity(0,0);

    }
    if(box4.isTouching(ball) && ball.bounceOff(box4))
    {
        ball.shapeColor="maroon";
       // ball.setVelocity(0,0);
    }
    drawSprites();
}
