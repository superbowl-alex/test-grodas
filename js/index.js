import { createList } from "./createList.js";
import { getRefs } from "./getRefs.js";
const LOCALSTORAGE_KEY = "checked-images";

const refs = getRefs();

let storage = [];

const getImages = async () => {
  const response = await fetch("/test-grodas/db/data.json");
  console.log(response);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

getImages()
  .then((result) => {
    const trendImages = [...result]
      .sort((a, b) => b.rating - a.rating)
      .filter((_, idx) => idx < 5);
    const newestImages = [...result]
      .sort((a, b) => a.age - b.age)
      .filter((_, idx) => idx < 2);
    createList(refs.trendList, trendImages);
    createList(refs.newestList, newestImages);
  })
  .catch((error) => {
    console.log(error);
  });

refs.trendList.addEventListener("click", onClick);
refs.newestList.addEventListener("click", onClick);

function onClick(e) {
  storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
  const el = e.target;
  if (!el.classList.contains("checked")) {
    storage.push(el.id);
    el.classList.add("checked");
  } else {
    el.classList.remove("checked");
    const idx = storage.indexOf(e.target.id);
    storage.splice(idx, 1);
  }
  location.reload();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storage));
}
