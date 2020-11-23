class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.04, 
            
        }
        this.Chain = Constraint.create(options)
        World.add(world,this.Chain)
    }
    display(){
        var pointA = this.Chain.bodyA.position
        var pointB = this.Chain.bodyB.position
        push()
        strokeWeight(3)
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}