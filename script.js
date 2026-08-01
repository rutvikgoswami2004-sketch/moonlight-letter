const sky = document.getElementById("sky");

// Create Stars

for(let i=0;i<300;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*70+"vh";

star.style.animationDelay=Math.random()*2+"s";

sky.appendChild(star);

}
