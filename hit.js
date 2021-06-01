class Hit extends Baseclass{
    constructor(x,y,width,height,color){
        super(x,y,width,height,color);
        this.image = loadImage("img/hit.png")
     }

     display(){
         //this.body.position.x = mouseX;
         //this.body.position.y = mouseY;
         super.display();
     }
}