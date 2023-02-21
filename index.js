
let isMobile=true;
let options = {
  root: null, // Parent of object we are observing
  rootMargin: '0px',   // Area around root checking if element is intersecting with root
  threshold: 0.5  // Area by which element becomes visible in the viewport
};

// For each element, create an entry
let callback = (entries, observer)=>{
  // Iterate over area to find active element to implement specific behavior
  entries.forEach(entry => {
          if (entry.isIntersecting) { // Check if video is visible on viewport
              entry.target.play();
          } else {
              entry.target.pause();
          }

          return false;
      
  });

};

let observer = new IntersectionObserver(callback, options);
let desktop_videos = document.querySelectorAll('.desktop-video');
for (let i = 0; i < desktop_videos.length; i++) {
observer.observe(desktop_videos[i]);
}
let mobile_videos = document.querySelectorAll('.mobile-video');
for (let i = 0; i < mobile_videos.length; i++) {
  observer.observe(mobile_videos[i]);
  }


function handleImageClick(clicked_id) {
  document.querySelector('.container').style.display = 'flex';
  document.getElementsByClassName(clicked_id)[0].classList.add("active");

  document.querySelector('.master-container').style.filter = 'blur(5px)';

}

function windowClose() {

var sections=document.getElementsByClassName("section");

for(var i=0;i<sections.length;i++){
  sections[i].classList.remove("active");
}

  document.querySelector('.container').style.display = 'none';
  document.querySelector('.master-container').style.filter = 'blur(0px)';
}
window.addEventListener("load", () => {
  isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if(isMobile && window.innerWidth <= 800){
    isMobile=true;
  }
  console.log(isMobile);
  init();
});

function init(){
  if(!isMobile){

  let parent=document.getElementsByClassName('section');
  for(let i=0;i<parent.length; i++){
    
    parent[i].children[0].children[1].children[0].classList.add("hidden");
    parent[i].children[1].children[1].classList.remove("hidden");
    parent[i].children[0].children[1].children[1].src="Buttons/Watch.png";
    console.log(parent[i].children[0]);
  }
}
}

function revealSpecs(name){
  let parent=document.querySelector('.'+name);
  parent.children[1].children[0].classList.remove("hidden");
  parent.children[1].children[1].classList.add("hidden");
  parent.children[1].children[2].classList.add("hidden");

  parent.children[0].children[1].children[0].src="Buttons/Specifications.png";
  parent.children[0].children[1].children[1].src="Buttons/Watch_Disable.png";
  parent.children[0].children[1].children[2].src="Buttons/Paytable_Disable.png";
}

function revealVid(name){

  let parent=document.querySelector('.'+name);
  if(isMobile){
  parent.children[1].children[0].classList.add("hidden");
  }
  parent.children[1].children[1].classList.remove("hidden");
  parent.children[1].children[2].classList.add("hidden");

  parent.children[0].children[1].children[0].src="Buttons/Specifications_Disable.png";
  parent.children[0].children[1].children[1].src="Buttons/Watch.png";
  parent.children[0].children[1].children[2].src="Buttons/Paytable_Disable.png";

}

function revealPlay(name){
  let parent=document.querySelector('.'+name);
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  parent.children[1].children[0].classList.add("hidden");
  }
  parent.children[1].children[1].classList.add("hidden");
  parent.children[1].children[2].classList.remove("hidden");

  parent.children[0].children[1].children[0].src="Buttons/Specifications_Disable.png";
  parent.children[0].children[1].children[1].src="Buttons/Watch_Disable.png";
  parent.children[0].children[1].children[2].src="Buttons/Paytable.png";
}

function toggleFullscreen() {
let elem = document.querySelector("video");

if (!document.fullscreenElement) {
  elem.requestFullscreen().catch((err) => {
    alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
  });
} else {
  document.exitFullscreen();
}
}

