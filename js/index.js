import { markup } from "./markup.js";
const trendList = document.querySelector(".trend-gallery");
const newestList = document.querySelector(".newest-gallery");

async function getImages() {
  const response = await fetch("../db/data.json");
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

getImages()
  .then((result) => {
    const trendImages = [...result]
      .sort((a, b) => b.rating - a.rating)
      .filter((_, idx) => idx < 5);
    const newestImages = [...result]
      .sort((a, b) => a.age - b.age)
      .filter((_, idx) => idx < 2);
    const trendMarkup = trendImages.map((image) => markup(image)).join("");
    trendList.insertAdjacentHTML("beforeend", trendMarkup);
    const newestMarkup = newestImages.map((image) => markup(image)).join("");
    newestList.insertAdjacentHTML("beforeend", newestMarkup);
  })
  .catch((error) => {
    console.log(error);
  });
