function goPage(url){
  window.open(url);
}

let files = ["ciphers.png", "crypto.jpeg", "crypto2.jpeg"];
let images = new Array();
for(let i=0;i<files.length;i++){
  images[i] = new Image();
  images[i].src = files[i];
}

let next = 1;

function change(img){
  img.src = images[next].src;
  next++;
  next %= images.length;
}

function filter(){
  let search = document.getElementById("search").value;
  let listInner = document.getElementsByClassName("listInner");

  for(let i=0;i<listInner.length;i++){
    if (listInner[i].includes(search))
      listInner[i].style.display = "flex";
    else
      listInner[i].style.display = "none";
  }
}

let canvas, context;
function init() {
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");

  context.lineWidth = 2;
  context.strokeStyle = "black";

  canvas.addEventListener("mousemove", function (e) { move(e) }, false);
  canvas.addEventListener("mousedown", function (e) { down(e) }, false);
  canvas.addEventListener("mouseup", function (e) { up(e) }, false);
  canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}

let startX=0, startY=0;
let drawing=false;
function draw(curX, curY) {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(curX, curY);
  context.stroke();
}
function down(e) {
  startX = e.offsetX; startY = e.offsetY;
  drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
  if(!drawing) return;
  let curX = e.offsetX, curY = e.offsetY;
  draw(curX, curY);
  startX = curX; startY = curY;
}
function out(e) { drawing = false; }