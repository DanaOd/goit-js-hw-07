import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markUp = galleryItems
  .map((image) => {
    return `<a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", markUp);

galleryRef.addEventListener("click", onGalleryClickHandler);

const lightbox = new SimpleLightbox('.gallery a', { captions:true, captionsData: "alt", captionDelay: 250});


function onGalleryClickHandler(event) {
    event.preventDefault();  
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    lightbox.open(event.target);
  }
  