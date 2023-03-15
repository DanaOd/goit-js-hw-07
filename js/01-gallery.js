import { galleryItems } from "./gallery-items.js";
// Change code below this line


//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

const markUp = galleryItems
  .map((image) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", markUp);

//Реализация делегирования на div.gallery и получение url большого изображения.
galleryRef.addEventListener("click", onGalleryClickHandler);



function onGalleryClickHandler(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bigImageLink = event.target.dataset.source;
  console.log("click", bigImageLink);

  const instance = basicLightbox.create(
    `<img src="${bigImageLink}" width="800" height="600">`
  );
  instance.show();

  
  if (instance.visible()){
    console.log('modal is opened');

    //Добавь закрытие модального окна по нажатию клавиши Escape
    document.addEventListener('keydown', onKeyEscHandler);
  }
  
  function onKeyEscHandler (event) {
    console.log(event.key);
    if (event.key === 'Escape'){
        instance.close();
        document.removeEventListener('keydown', onKeyEscHandler);
    }
}

}


