class Block {
  constructor(x, y, width, height){

    var options = {

      restitution: 0.4,
      friction: 1.0,
      //isStatic: true

    }
    //super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    // this.x = x;
    // this.y = y;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){

    var angle = this.body.angle;    
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();

  }
}


// class Block{
//   constructor(x, y, width, height) {
//       var options = {
         
//           restitution :0.4,
//           friction :1.0,
//           //isStatic:true
         
//       }
//       this.body = Bodies.rectangle(x, y, width, height, options);
//       this.width = width;
//       this.height = height;
//       World.add(world, this.body);
//     }
//     display(){
//       var angle = this.body.angle;
//       var pos= this.body.position;
//       push();
//       translate(pos.x, pos.y);
//       rotate(angle);
//       rectMode(CENTER);
//       rect(0,0,this.width, this.height);
//       pop();
      
//     }
// }








// //extends BaseClass 

// class Block{
//   constructor(x, y, width, height) {
//       var options = {
         
//           // restitution :0.4,
//           // friction :1.0,
//           //isStatic:true
         
//       }
//       this.body = Bodies.rectangle(x, y, width, height, options);y;
//       this.x = x;
//       this.y = y;
//       this.width = width;
//       this.height = height;
//       World.add(world, this.body);
//     }
//     display(){
//     //   var angle = this.body.angle;
//     //   var pos= this.body.position;
//     //   push();
//     //   translate(pos.x, pos.y);
//     //   rotate(angle);
//     //   rectMode(CENTER);
//     //  // rect(0,0,this.width, this.height);
//     //   pop();
      
//     }
// }
