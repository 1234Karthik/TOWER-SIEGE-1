class Ground {
  constructor(x,y,height,width) {
    var options = {
        isStatic: true
    }
    this.ground = Bodies.rectangle(x, y, height, width, options);      
    World.add(world, this.ground);
  }

  display(){     
    strokeWeight(2);
    fill("black");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,900,20);
  }
}

//450,390,900,20,