import { getRefs } from "./getRefs.js";
import { markup } from "./markup.js";
const LOCALSTORAGE_KEY = "checked-images";
const refs = getRefs();

export const createList = (el, arr) => {
  const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];

  el.innerHTML = "";
  const currentMarkup = arr.map((item) => markup(item)).join("");
  el.insertAdjacentHTML("beforeend", currentMarkup);
  const arrNode = el.children;
  for (const e of arrNode) {
    const elSvg = e.querySelector(".gallery__star");
    if (elSvg) {
      if (storage.includes(e.id)) {
        e.classList.add("checked");
        elSvg.innerHTML =
          '<use href="../assets/icons/symbol-defs.svg#icon-star-solid"></use>';
      } else {
        e.classList.remove("checked");
        elSvg.innerHTML =
          '<use href="../assets/icons/symbol-defs.svg#icon-star-regular"></use>';
      }
    }
  }
};
