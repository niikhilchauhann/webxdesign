const track = document.getElementById("image-track");
const background = document.getElementById("projects-background");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
  

const backgroundImages = document.querySelectorAll(".projects-background img");

// Optional: scale how much movement should affect animation
const animationScale = 3.0;

backgroundImages.forEach((img, index) => {
  let transform = "";

  // Example logic: vary transform based on image index and track movement
  switch (index) {
    case 0:
      transform = `translateY(${nextPercentage * 0.5 * animationScale}px) rotate(${nextPercentage * 0.36}deg)`;
      break;
    case 1:
      transform = `translateX(${nextPercentage * 0.3 * animationScale}px) rotate(${nextPercentage * 0.36}deg)`;
      break;
    case 2:
      transform = `translate(${nextPercentage * 0.1 * animationScale}px, ${nextPercentage * -0.15 * animationScale}px)`;
      break;
    default:
      break;
  }

  img.animate({
    transform: transform
  }, { duration: 1200, fill: "forwards" });
});


}


/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);