const header = document.querySelector(".header");
const stickyHeader = document.querySelector(".s-header");
const bottomMenuList = document.querySelectorAll(".menu-bottom li a");
const mobileBottomAllMenu = document.querySelectorAll(
  ".mobile-menu-bottom li a"
);
const mobileTopAllMenu = document.querySelectorAll(".mobile-menu-top li a");
const topMenuList = document.querySelectorAll(".menu-top li a");
const logoLink = document.querySelector(".logo-link");
const customSelect = document.querySelector(".custom-select");
const toggleNav = document.querySelector(".toggle-nav");
const toggleIcon = document.querySelector(".toggle-nav i");
const mobileMenu = document.querySelector(".mobile-menu");
const closeNav = document.querySelector(".close-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    stickyHeader.style.display = "flex";
    toggleNav.classList.add("t-nav");
    toggleIcon.style.color = "black";
  } else {
    stickyHeader.style.display = "none";
    toggleNav.classList.remove("t-nav");
    toggleIcon.style.color = "white";
  }
});
// mobile menu open
toggleNav.addEventListener("click", () => {
  mobileMenu.style.left = "0";
});
// mobile menu close
closeNav.addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
});

// If any mobile menu item is clicked, remove the mobile menu
// mobileTopAllMenu.forEach((e) => {
//   e.addEventListener("click", () => {
//     mobileMenu.style.left = "-100%";
//   });
// });
// mobileBottomAllMenu.forEach((e) => {
//   e.addEventListener("click", () => {
//     mobileMenu.style.left = "-100%";
//   });
// });
console.log(mobileBottomAllMenu, mobileTopAllMenu);
//  destination slider
let currentIndex = 0;
const slides = document.querySelectorAll(".dest-slide");
const totalSlides = slides.length;
const visibleSlides = 2; // Number of visible slides
const slideWidth = slides[0].clientWidth + 12; // Adjust width with the gap (12px)
let isDragging = false;
let startX;
let currentTranslate = 0;
let prevTranslate = 0;
let autoSlideInterval;

// Handling the Next button click
document.querySelector(".dest-next-btn").addEventListener("click", function () {
  goToNextSlide();
  resetAutoSlide(); // Reset auto-slide when manually clicked
});

// Handling the Previous button click
document.querySelector(".dest-prev-btn").addEventListener("click", function () {
  goToPreviousSlide();
  resetAutoSlide(); // Reset auto-slide when manually clicked
});

// Go to the next slide
function goToNextSlide() {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide if at the last
  }
  updateSlider();
}

// Go to the previous slide
function goToPreviousSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
}

// Update the slider position
function updateSlider() {
  document.querySelector(".dest-slides").style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

// Auto-slide functionality (slide every 3 seconds)
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    goToNextSlide();
  }, 3000); // Slide every 3 seconds
}

// Reset auto-slide when user interacts manually
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide(); // Restart auto-slide
}

// Start auto-slide when the page loads
startAutoSlide();

// Dragging functionality
const slidesContainer = document.querySelector(".dest-slides");

slidesContainer.addEventListener("mousedown", dragStart);
slidesContainer.addEventListener("mouseup", dragEnd);
slidesContainer.addEventListener("mouseleave", dragEnd);
slidesContainer.addEventListener("mousemove", dragMove);

// For touch devices
slidesContainer.addEventListener("touchstart", dragStart);
slidesContainer.addEventListener("touchend", dragEnd);
slidesContainer.addEventListener("touchmove", dragMove);

function dragStart(event) {
  isDragging = true;
  startX = getPositionX(event);
  prevTranslate = currentTranslate;
  slidesContainer.style.transition = "none"; // Disable transition during drag
  clearInterval(autoSlideInterval); // Pause auto-slide when dragging starts
}

function dragEnd() {
  isDragging = false;
  slidesContainer.style.transition = "transform 0.5s ease-in-out"; // Enable transition after drag
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
  } else if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }

  // Reset to first slide if moved to last slide
  if (currentIndex === totalSlides - visibleSlides) {
    currentIndex = 0; // Go back to the first slide
  }

  updateSlider();
  resetAutoSlide(); // Restart auto-slide after drag ends
}

function dragMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startX;
    slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].pageX;
}

// resturant secton slider
let resCurrentIndex = 0;
const resSlides = document.querySelectorAll(".res-slide");
const resTotalSlides = resSlides.length;
const resVisibleSlides = 2; // Number of visible slides
const resSlideWidth = resSlides[0].clientWidth + 12; // Adjust width with the gap (12px)
let resIsDragging = false;
let resStartX;
let resCurrentTranslate = 0;
let resPrevTranslate = 0;
let resAutoSlideInterval;

// Handling the Next button click
document.querySelector(".res-next-btn").addEventListener("click", function () {
  resGoToNextSlide();
  resResetAutoSlide(); // Reset auto-slide when manually clicked
});

// Handling the Previous button click
document.querySelector(".res-prev-btn").addEventListener("click", function () {
  resGoToPreviousSlide();
  resResetAutoSlide(); // Reset auto-slide when manually clicked
});

// Go to the next slide
function resGoToNextSlide() {
  if (resCurrentIndex < resTotalSlides - resVisibleSlides) {
    resCurrentIndex++;
  } else {
    resCurrentIndex = 0; // Loop back to the first slide if at the last
  }
  resUpdateSlider();
}

// Go to the previous slide
function resGoToPreviousSlide() {
  if (resCurrentIndex > 0) {
    resCurrentIndex--;
  }
  resUpdateSlider();
}

// Update the slider position
function resUpdateSlider() {
  document.querySelector(".res-slides").style.transform = `translateX(-${
    resCurrentIndex * resSlideWidth
  }px)`;
}

// Auto-slide functionality (slide every 3 seconds)
function resStartAutoSlide() {
  resAutoSlideInterval = setInterval(() => {
    resGoToNextSlide();
  }, 3000); // Slide every 3 seconds
}

// Reset auto-slide when user interacts manually
function resResetAutoSlide() {
  clearInterval(resAutoSlideInterval);
  resStartAutoSlide(); // Restart auto-slide
}

// Start auto-slide when the page loads
resStartAutoSlide();

// Dragging functionality
const resSlidesContainer = document.querySelector(".res-slides");

resSlidesContainer.addEventListener("mousedown", resDragStart);
resSlidesContainer.addEventListener("mouseup", resDragEnd);
resSlidesContainer.addEventListener("mouseleave", resDragEnd);
resSlidesContainer.addEventListener("mousemove", resDragMove);

// For touch devices
resSlidesContainer.addEventListener("touchstart", resDragStart);
resSlidesContainer.addEventListener("touchend", resDragEnd);
resSlidesContainer.addEventListener("touchmove", resDragMove);

function resDragStart(event) {
  resIsDragging = true;
  resStartX = resGetPositionX(event);
  resPrevTranslate = resCurrentTranslate;
  resSlidesContainer.style.transition = "none"; // Disable transition during drag
  clearInterval(resAutoSlideInterval); // Pause auto-slide when dragging starts
}

function resDragEnd() {
  resIsDragging = false;
  resSlidesContainer.style.transition = "transform 0.5s ease-in-out"; // Enable transition after drag
  const resMovedBy = resCurrentTranslate - resPrevTranslate;

  if (
    resMovedBy < -100 &&
    resCurrentIndex < resTotalSlides - resVisibleSlides
  ) {
    resCurrentIndex++;
  } else if (resMovedBy > 100 && resCurrentIndex > 0) {
    resCurrentIndex--;
  }

  // Reset to first slide if moved to last slide
  if (resCurrentIndex === resTotalSlides - resVisibleSlides) {
    resCurrentIndex = 0; // Go back to the first slide
  }

  resUpdateSlider();
  resResetAutoSlide(); // Restart auto-slide after drag ends
}

function resDragMove(event) {
  if (resIsDragging) {
    const resCurrentPosition = resGetPositionX(event);
    resCurrentTranslate = resPrevTranslate + resCurrentPosition - resStartX;
    resSlidesContainer.style.transform = `translateX(${resCurrentTranslate}px)`;
  }
}

function resGetPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].pageX;
}

// parador section slider
let paraCurrentIndex = 0;
const paraSlides = document.querySelectorAll(".para-slide");
const paraTotalSlides = paraSlides.length;
const paraVisibleSlides = 2; // Number of visible slides
const paraSlideWidth = paraSlides[0].clientWidth + 12; // Adjust width with the gap (12px)
let paraIsDragging = false;
let paraStartX;
let paraCurrentTranslate = 0;
let paraPrevTranslate = 0;
let paraAutoSlideInterval;

// Handling the Next button click
document.querySelector(".para-next-btn").addEventListener("click", function () {
  paraGoToNextSlide();
  paraResetAutoSlide(); // Reset auto-slide when manually clicked
});

// Handling the Previous button click
document.querySelector(".para-prev-btn").addEventListener("click", function () {
  paraGoToPreviousSlide();
  paraResetAutoSlide(); // Reset auto-slide when manually clicked
});

// Go to the next slide
function paraGoToNextSlide() {
  if (paraCurrentIndex < paraTotalSlides - paraVisibleSlides) {
    paraCurrentIndex++;
  } else {
    paraCurrentIndex = 0; // Loop back to the first slide if at the last
  }
  paraUpdateSlider();
}

// Go to the previous slide
function paraGoToPreviousSlide() {
  if (paraCurrentIndex > 0) {
    paraCurrentIndex--;
  }
  paraUpdateSlider();
}

// Update the slider position
function paraUpdateSlider() {
  document.querySelector(".para-slides").style.transform = `translateX(-${
    paraCurrentIndex * paraSlideWidth
  }px)`;
}

// Auto-slide functionality (slide every 3 seconds)
function paraStartAutoSlide() {
  paraAutoSlideInterval = setInterval(() => {
    paraGoToNextSlide();
  }, 3000); // Slide every 3 seconds
}

// Reset auto-slide when user interacts manually
function paraResetAutoSlide() {
  clearInterval(paraAutoSlideInterval);
  paraStartAutoSlide(); // Restart auto-slide
}

// Start auto-slide when the page loads
paraStartAutoSlide();

// Dragging functionality
const paraSlidesContainer = document.querySelector(".para-slides");

paraSlidesContainer.addEventListener("mousedown", paraDragStart);
paraSlidesContainer.addEventListener("mouseup", paraDragEnd);
paraSlidesContainer.addEventListener("mouseleave", paraDragEnd);
paraSlidesContainer.addEventListener("mousemove", paraDragMove);

// For touch devices
paraSlidesContainer.addEventListener("touchstart", paraDragStart);
paraSlidesContainer.addEventListener("touchend", paraDragEnd);
paraSlidesContainer.addEventListener("touchmove", paraDragMove);

function paraDragStart(event) {
  paraIsDragging = true;
  paraStartX = paraGetPositionX(event);
  paraPrevTranslate = paraCurrentTranslate;
  paraSlidesContainer.style.transition = "none"; // Disable transition during drag
  clearInterval(paraAutoSlideInterval); // Pause auto-slide when dragging starts
}

function paraDragEnd() {
  paraIsDragging = false;
  paraSlidesContainer.style.transition = "transform 0.5s ease-in-out"; // Enable transition after drag
  const paraMovedBy = paraCurrentTranslate - paraPrevTranslate;

  if (
    paraMovedBy < -100 &&
    paraCurrentIndex < paraTotalSlides - paraVisibleSlides
  ) {
    paraCurrentIndex++;
  } else if (paraMovedBy > 100 && paraCurrentIndex > 0) {
    paraCurrentIndex--;
  }

  // Reset to first slide if moved to last slide
  if (paraCurrentIndex === paraTotalSlides - paraVisibleSlides) {
    paraCurrentIndex = 0; // Go back to the first slide
  }

  paraUpdateSlider();
  paraResetAutoSlide(); // Restart auto-slide after drag ends
}

function paraDragMove(event) {
  if (paraIsDragging) {
    const paraCurrentPosition = paraGetPositionX(event);
    paraCurrentTranslate = paraPrevTranslate + paraCurrentPosition - paraStartX;
    paraSlidesContainer.style.transform = `translateX(${paraCurrentTranslate}px)`;
  }
}

function paraGetPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].pageX;
}

//gift box section slider
let giftBoxCurrentIndex = 0;
const giftBoxSlides = document.querySelectorAll(".gift-box-slide");
const giftBoxTotalSlides = giftBoxSlides.length;
const giftBoxVisibleSlides = 2; // Number of visible slides
const giftBoxSlideWidth = giftBoxSlides[0].clientWidth + 12; // Adjust width with the gap (12px)
let giftBoxIsDragging = false;
let giftBoxStartX;
let giftBoxCurrentTranslate = 0;
let giftBoxPrevTranslate = 0;
let giftBoxAutoSlideInterval;

// Handling the Next button click
document
  .querySelector(".gift-box-next-btn")
  .addEventListener("click", function () {
    giftBoxGoToNextSlide();
    giftBoxResetAutoSlide(); // Reset auto-slide when manually clicked
  });

// Handling the Previous button click
document
  .querySelector(".gift-box-prev-btn")
  .addEventListener("click", function () {
    giftBoxGoToPreviousSlide();
    giftBoxResetAutoSlide(); // Reset auto-slide when manually clicked
  });

// Go to the next slide
function giftBoxGoToNextSlide() {
  if (giftBoxCurrentIndex < giftBoxTotalSlides - giftBoxVisibleSlides) {
    giftBoxCurrentIndex++;
  } else {
    giftBoxCurrentIndex = 0; // Loop back to the first slide if at the last
  }
  giftBoxUpdateSlider();
}

// Go to the previous slide
function giftBoxGoToPreviousSlide() {
  if (giftBoxCurrentIndex > 0) {
    giftBoxCurrentIndex--;
  }
  giftBoxUpdateSlider();
}

// Update the slider position
function giftBoxUpdateSlider() {
  document.querySelector(".gift-box-slides").style.transform = `translateX(-${
    giftBoxCurrentIndex * giftBoxSlideWidth
  }px)`;
}

// Auto-slide functionality (slide every 3 seconds)
function giftBoxStartAutoSlide() {
  giftBoxAutoSlideInterval = setInterval(() => {
    giftBoxGoToNextSlide();
  }, 3000); // Slide every 3 seconds
}

// Reset auto-slide when user interacts manually
function giftBoxResetAutoSlide() {
  clearInterval(giftBoxAutoSlideInterval);
  giftBoxStartAutoSlide(); // Restart auto-slide
}

// Start auto-slide when the page loads
giftBoxStartAutoSlide();

// Dragging functionality
const giftBoxSlidesContainer = document.querySelector(".gift-box-slides");

giftBoxSlidesContainer.addEventListener("mousedown", giftBoxDragStart);
giftBoxSlidesContainer.addEventListener("mouseup", giftBoxDragEnd);
giftBoxSlidesContainer.addEventListener("mouseleave", giftBoxDragEnd);
giftBoxSlidesContainer.addEventListener("mousemove", giftBoxDragMove);

// For touch devices
giftBoxSlidesContainer.addEventListener("touchstart", giftBoxDragStart);
giftBoxSlidesContainer.addEventListener("touchend", giftBoxDragEnd);
giftBoxSlidesContainer.addEventListener("touchmove", giftBoxDragMove);

function giftBoxDragStart(event) {
  giftBoxIsDragging = true;
  giftBoxStartX = giftBoxGetPositionX(event);
  giftBoxPrevTranslate = giftBoxCurrentTranslate;
  giftBoxSlidesContainer.style.transition = "none"; // Disable transition during drag
  clearInterval(giftBoxAutoSlideInterval); // Pause auto-slide when dragging starts
}

function giftBoxDragEnd() {
  giftBoxIsDragging = false;
  giftBoxSlidesContainer.style.transition = "transform 0.5s ease-in-out"; // Enable transition after drag
  const giftBoxMovedBy = giftBoxCurrentTranslate - giftBoxPrevTranslate;

  if (
    giftBoxMovedBy < -100 &&
    giftBoxCurrentIndex < giftBoxTotalSlides - giftBoxVisibleSlides
  ) {
    giftBoxCurrentIndex++;
  } else if (giftBoxMovedBy > 100 && giftBoxCurrentIndex > 0) {
    giftBoxCurrentIndex--;
  }

  // Reset to first slide if moved to last slide
  if (giftBoxCurrentIndex === giftBoxTotalSlides - giftBoxVisibleSlides) {
    giftBoxCurrentIndex = 0; // Go back to the first slide
  }

  giftBoxUpdateSlider();
  giftBoxResetAutoSlide(); // Restart auto-slide after drag ends
}

function giftBoxDragMove(event) {
  if (giftBoxIsDragging) {
    const giftBoxCurrentPosition = giftBoxGetPositionX(event);
    giftBoxCurrentTranslate =
      giftBoxPrevTranslate + giftBoxCurrentPosition - giftBoxStartX;
    giftBoxSlidesContainer.style.transform = `translateX(${giftBoxCurrentTranslate}px)`;
  }
}

function giftBoxGetPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].pageX;
}
