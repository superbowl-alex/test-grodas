import { countElements } from "./count.js";
import { createList } from "./createList.js";
import { getRefs } from "./getRefs.js";
const LOCALSTORAGE_KEY = "checked-images";

const mask = document.querySelector(".mask");
window.addEventListener("load", () => {
  mask.remove();
});

const refs = getRefs();

let storage;
let trendImages;
let newestImages;

const getImages = async () => {
  const response = await fetch("../db/data.json");
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

getImages()
  .then((result) => {
    trendImages = [...result]
      .sort((a, b) => b.rating - a.rating)
      .filter((_, idx) => idx < 5);
    newestImages = [...result]
      .sort((a, b) => a.age - b.age)
      .filter((_, idx) => idx < 2);
    createList(refs.trendList, trendImages);
    createList(refs.newestList, newestImages);
    countElements();
  })
  .catch((error) => {
    console.log(error);
  });

refs.trendList.addEventListener("click", onClick);
refs.newestList.addEventListener("click", onClick);

function onClick(e) {
  storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
  const el = e.target;
  if (!storage.includes(el.id)) {
    storage.push(el.id);
  } else {
    const idx = storage.indexOf(el.id);
    storage.splice(idx, 1);
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storage));
  createList(refs.trendList, trendImages);
  createList(refs.newestList, newestImages);
}
