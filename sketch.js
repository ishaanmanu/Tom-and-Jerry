var cat 
var catm 
var cats

var mouse
var mouses
var mousem

function preload() {
    //load the images here
    bg1 = loadImage("images/garden.png")

    cat = loadAnimation("images/cat1.png")
    catm = loadAnimation("images/cat2.png","images/cat3.png")
    cats = loadAnimation("images/cat4.png")

    mouse = loadAnimation("images/mouse1.png")
    mousem = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouses = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
   
    bg=createSprite(500,400, 1000,800)
    bg.addImage(bg1)

    tom=createSprite(780, 650, 20, 20)
    tom.addAnimation("tom",cat)
    tom.scale=0.2
    
     jerry=createSprite(150,650)
     jerry.addAnimation("jerry",mouse)
     jerry.scale=0.16

     
     

     tom.setCollider("circle",0,0, 600)
     
     jerry.setCollider("circle",0,0,400)
}

function draw() {

    background(255);
    if (keyDown("left")) {
        tom.velocityX=-4
        tom.addAnimation("tom",catm)
    }

    if (tom.isTouching(jerry)) {
    tom.velocityX=0
    jerry.addAnimation("jerry", mouses)
    tom.addAnimation("tom", cats)        
    }


    drawSprites();
}



