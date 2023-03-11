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



// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект
//  ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна
// с изображением из примеров библиотеки basicLightbox.
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
  return instance.show();
}


