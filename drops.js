class Drops {
    constructor(x,y){
        var options = {
            isStatic: false,
            friction:0.1
        }
        this.image = loadImage("r.png");
        this.drops = Bodies.circle(x,y,5,options)
        this.drops.scale=0.5
       // this.radius = 5;
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world,this.drops);
       
        
    }

    update(){
        if(this.rain.position.y>height){

            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})

        }
    }

    display(){
        var pos = this.drops.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,30,50);
    }
}
