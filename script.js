const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionDiv = document.getElementById("question");
const redRoses = document.querySelector(".red-roses");
const bouquet = document.querySelector(".bouquet");
const messageDiv = document.getElementById("message");
const typeText = document.getElementById("typeText");

const secretBox = document.getElementById("secretBox");
const unlockBtn = document.getElementById("unlockBtn");
const secretInput = document.getElementById("secretInput");

const themeBtn = document.getElementById("themeBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");


/* ===== SHORT PREVIEW MESSAGE ===== */

const previewMessage = `This little page was made with care 🌸

Some things are simple,
some things are special —
and this is one of them.

Unlock the secret message below.`;

/* ===== YOUR ORIGINAL LONG MESSAGE ===== */

const fullMessage = `Happy Valentine’s Day.

You are the poetry in my silence,
the light in my darkest nights,
and the reason my heart beats with hope.

Every moment with you feels like
a timeless story written in the stars,
and I can’t wait to keep writing
our chapters together.

You are not just my Valentine today —
you are my forever.

I LOVE YOU SOO MUCH
Meri Sweetuu ❤️🎀
Meri Kuchupuchuuuuuuu ❤️✨ ` ;

/* ===== TYPEWRITER ===== */

function typeWriter(text, i=0){
  if(i < text.length){
    typeText.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    setTimeout(()=>typeWriter(text, i+1), 35);
  }
}

/* ===== HEARTS ===== */

function createHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDuration=4+Math.random()*3+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),7000);
}

let heartInterval=null;

/* ===== YES CLICK ===== */

yesBtn.onclick = () => {
  questionDiv.style.display="none";
  redRoses.classList.add("hidden");
  bouquet.classList.remove("hidden");
  messageDiv.classList.remove("hidden");
  secretBox.classList.remove("hidden");

  typeText.innerHTML="";
  typeWriter(previewMessage);   // 👈 SHORT MESSAGE FIRST

  if(!heartInterval){
    heartInterval=setInterval(createHeart,500);
  }
  if (!musicPlaying) {
  bgMusic.play();
  musicBtn.textContent = "🔇 Pause Music";
  musicPlaying = true;
}

};

/* ===== SECRET UNLOCK → SHOW LONG MESSAGE ===== */

unlockBtn.onclick = () => {
  if(secretInput.value.toLowerCase()==="smile"){
    typeText.innerHTML="";
    typeWriter(fullMessage);   // 👈 LONG MESSAGE AFTER CODE
  }
};

/* ===== THEME SWITCH ===== */

let themeIndex=0;
const themes=[
  ["#ffdde1","#ee9ca7"],
  ["#e0c3fc","#8ec5fc"],
  ["#d4fc79","#96e6a1"]
];

themeBtn.onclick=()=>{
  themeIndex=(themeIndex+1)%themes.length;
  document.documentElement.style.setProperty("--bg1",themes[themeIndex][0]);
  document.documentElement.style.setProperty("--bg2",themes[themeIndex][1]);
};
let musicPlaying = false;

musicBtn.onclick = () => {
  if (!musicPlaying) {
    bgMusic.play();
    musicBtn.textContent = "🔇 Pause Music";
    musicPlaying = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🔊 Play Music";
    musicPlaying = false;
  }
};

