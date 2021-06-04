class Particle {
    constructor(x,y){
        var options = {
            

        }

        this.x = x,
        this.y = y
        this.r = 20
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        ellipse(0,0,this.r, this.r)
        pop()

    }
}