// const particles = [];
// let bg;

// function setup() {
//   bg = loadImage("bg.png");
//   var cnv = createCanvas(window.innerWidth, window.innerHeight);
//   cnv.parent("particle-container");
//   const particlelen = Math.floor(width/20);

//   for(let i=0;i<particlelen;i++){
//       particles.push(new Particle());
//   }
// }

// function draw() {
//   background(bg);
//   particles.forEach((p,index) => {
//       p.update();
//       p.draw();
//       p.checkParticles(particles.slice(index));
//   })
// }

// class Particle {
//   constructor() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(random(-2, 2), random(-2, 2));
//     this.size = 10;
//   }

//   draw() {
//     noStroke();
//     fill("rgba(41, 49, 71,0.5)");
//     circle(this.pos.x, this.pos.y, this.size);
//   }

//   update() {
//     this.pos.add(this.vel);
//     this.edges();   
//   }

//   edges() {
//       if(this.pos.x<0 || this.pos.x > width){
//           this.vel.x *= -1;
//       }

//       if(this.pos.y <0 || this.pos.y > height){
//           this.vel.y *= -1;
//       }
//   }

//   checkParticles(particles) {
//       particles.forEach(particle => {
//           const d = dist(this.pos.x,this.pos.y, particle.pos.x, particle.pos.y);
//           if(d<120){
//               stroke("rgba(41, 49, 71,0.1)");
//               line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
//           }
//       })
//   }
// }

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var target = 
setInterval(() => {
    console.log(new Date().getTimezoneOffset());
},1000);
