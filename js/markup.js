// function creating markup for one element
export function markup({ image, title, tags }) {
  const imagesTags = tags.map((tag) => `#${tag}`).join(", ");
  let currentImage = `../assets/${image}`;

  return `<li class="gallery__item">
      <img class="gallery__image" src="${currentImage}" onerror="javascript:this.src='../assets/images/Image_placeholder.jpg'"alt="${title}" loading="lazy" />
      <div class="gallery__info">
      <p class="gallery__info-title">${title}</p>
      <div class="gallery__info-tags">
         ${imagesTags}
      </div>
      </div>
    </li>`;
}
