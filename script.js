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

var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var target = new Date(2020, 02, 08, 00, 00, 00, 00).getTime();
setInterval(() => {
  var d = new Date().getTime();
  var diff = target - d;
  if (diff < 0) {
    document.getElementById("closed-text").style.display = "block";
    document.getElementById("countdown").style.display = "none";
  } else {
    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= day * 24 * 60 * 60 * 1000;
    var h = Math.floor(diff / (1000 * 60 * 60));
    diff -= h * 60 * 60 * 1000;
    var m = Math.floor(diff / (1000 * 60));
    diff -= m * 60 * 1000;
    var s = Math.floor(diff / 1000);
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    days.innerHTML = day;
  }
}, 1000);


document.querySelector('#speaker-1').addEventListener('mouseenter', function () {
  document.querySelector('.speaker-1-data').style.display = 'block';
})
document.querySelector('#speaker-1').addEventListener('mouseleave', function () {
  document.querySelector('.speaker-1-data').style.display = 'none';
})
document.querySelector('#speaker-1').addEventListener('click', function () {
  if(document.querySelector('.speaker-1-data').style.display == 'block'){
    document.querySelector('.speaker-1-data').style.display = 'none';
  }
  else{
    document.querySelector('.speaker-1-data').style.display = 'block';
  }
})


document.querySelector('#speaker-2').addEventListener('mouseenter', function () {
  document.querySelector('.speaker-2-data').style.display = 'block';
})
document.querySelector('#speaker-2').addEventListener('mouseleave', function () {
  document.querySelector('.speaker-2-data').style.display = 'none';
})
document.querySelector('#speaker-2').addEventListener('click', function () {
  if(document.querySelector('.speaker-2-data').style.display == 'block'){
    document.querySelector('.speaker-2-data').style.display = 'none';
  }
  else{
    document.querySelector('.speaker-2-data').style.display = 'block';
  }
})


document.querySelector('#speaker-3').addEventListener('mouseenter', function () {
  document.querySelector('.speaker-3-data').style.display = 'block';
})
document.querySelector('#speaker-3').addEventListener('mouseleave', function () {
  document.querySelector('.speaker-3-data').style.display = 'none';
})
document.querySelector('#speaker-3').addEventListener('click', function () {
  if(document.querySelector('.speaker-3-data').style.display == 'block'){
    document.querySelector('.speaker-3-data').style.display = 'none';
  }
  else{
    document.querySelector('.speaker-3-data').style.display = 'block';
  }
})


document.querySelector('#speaker-4').addEventListener('mouseenter', function () {
  document.querySelector('.speaker-4-data').style.display = 'block';
})
document.querySelector('#speaker-4').addEventListener('mouseleave', function () {
  document.querySelector('.speaker-4-data').style.display = 'none';
})
document.querySelector('#speaker-4').addEventListener('click', function () {
  if(document.querySelector('.speaker-4-data').style.display == 'block'){
    document.querySelector('.speaker-4-data').style.display = 'none';
  }
  else{
    document.querySelector('.speaker-4-data').style.display = 'block';
  }
})


document.querySelector('#speaker-5').addEventListener('mouseenter', function () {
  document.querySelector('.speaker-5-data').style.display = 'block';
})
document.querySelector('#speaker-5').addEventListener('mouseleave', function () {
  document.querySelector('.speaker-5-data').style.display = 'none';
})
document.querySelector('#speaker-5').addEventListener('click', function () {
  if(document.querySelector('.speaker-5-data').style.display == 'block'){
    document.querySelector('.speaker-5-data').style.display = 'none';
  }
  else{
    document.querySelector('.speaker-5-data').style.display = 'block';
  }
})
