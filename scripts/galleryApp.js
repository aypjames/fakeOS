const addImg = document.getElementById("addToGalleryBtn");
const remoImg = document.getElementById("removeFromGalleryBtn");
const imgPrev = document.getElementById("imgPrev");
const imgNext = document.getElementById("imgNext");
const imgCarousel = document.getElementById("imgCarousel");
const galleryWindow = document.getElementById("galleryWindow");

let currentIndex = 0;

// Sys Pref Window Close Button
const galleryClose = document.getElementById("galleryClose");

const imageGallery = [
  "https://wallpapershome.com/images/pages/pic_h/11473.jpg",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
];

/// Opening App from Dock.
const galleryOpen = document.getElementById("galleryApp");
galleryOpen.addEventListener("click", () => {
  galleryWindow.style.display = "block";
  imgCarousel.style.content = `url(${imageGallery[currentIndex]})`;
});

// Closing App.
galleryClose.addEventListener("click", () => {
  galleryWindow.style.display = "none";
});

// Add image to array list.
addImg.addEventListener("click", () => {
  const imgUrl = document.getElementById("galleryImgUrl").value;
  if (imgUrl === "") {
    return;
  }
  imageGallery.push(imgUrl);
  document.getElementById("galleryImgUrl").value = "";
  alert(`New Image added to gallery from: ${imgUrl}`);
});

// // Remove image
// remoImg.addEventListener("click", () => {
//   imageGallery.slice(currentIndex, currentIndex + 1);
//   console.log(imageGallery);
// });

// Prev Image Click
imgPrev.addEventListener("click", () => {
  imgNext.disabled = false;
  //   let lastImgIndex = imageGallery.length;
  if (currentIndex <= 1) {
    imgPrev.disabled = true;
  }
  currentIndex--;
  imgCarousel.style.content = `url(${imageGallery[currentIndex]})`;
});

// Next Image Click
imgNext.addEventListener("click", () => {
  imgPrev.disabled = false;
  if (currentIndex >= imageGallery.length - 2) {
    imgNext.disabled = true;
  }
  currentIndex++;
  imgCarousel.style.content = `url(${imageGallery[currentIndex]})`;
});
