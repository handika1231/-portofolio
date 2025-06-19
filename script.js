// script.js
const pages = document.querySelectorAll(".page");
let currentPage = 0;

document.querySelector(".next-page").onclick = () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    pages[currentPage].scrollIntoView({ behavior: "smooth", inline: "start" });
  }
};

document.querySelector(".prev-page").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].scrollIntoView({ behavior: "smooth", inline: "start" });
  }
};




nextButton.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
});

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
});

playPauseIcon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});

// Initialize
showPage(currentPage);

