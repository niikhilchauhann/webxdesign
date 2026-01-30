const letters = "abcdefghijklmnopqrstuvwxyz";
let interval = null;

function scrambleText(element) {
  let iteration = 0;
  clearInterval(interval);

  const originalText = element.dataset.value;

  interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 4;
  }, 30);
}

document.querySelector("span[data-value]").onmouseover = event => {
  scrambleText(event.target);
};

window.addEventListener("DOMContentLoaded", () => {
  const span = document.querySelector("span[data-value]");

  setTimeout(() => {
    scrambleText(span);
  }, 400); 
});
