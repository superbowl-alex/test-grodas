// function creating markup for one element
export const markup = ({ image, title, tags, id }) => {
  const imagesTags = tags.map((tag) => `#${tag}`).join(", ");
  let currentImage = `../assets/${image}`;

  return `<li class="gallery__item" id=${id} >
  <div class="gallery__wrap-image" style="">
    <img class="gallery__image" src="${currentImage}" onerror="javascript:this.src='../assets/images/Image_placeholder.jpg'"alt="${title}" loading="lazy" />
      <div class="gallery__info">
      <p class="gallery__info-title">${title}</p>
      <div class="gallery__info-tags">
         ${imagesTags}
      </div>
      </div>
      <svg class="gallery__star">
        <use href="../assets/icons/symbol-defs.svg#icon-star-regular"></use>
      </svg>
</div>    
    </li>`;
};
