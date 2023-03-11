import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. 
// Используй готовый код из первого задания.


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



function onGalleryClickHandler(event) {
    event.preventDefault();  
    // console.log("click on", event.target.nodeName);

    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const lightbox = new SimpleLightbox('.gallery a', { captions:true, captionsData: "alt"});
    console.log("lightbox");
    // const imageLink = event.target.parentNode.href;
    // console.log("click, imageLink", imageLink);
  


  
  }

// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься 
// с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».

// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. 
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.