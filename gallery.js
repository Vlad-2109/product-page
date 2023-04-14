// отримати елементи DOM
const mainImage = document.querySelector('.main_image');
const thumbnails = document.querySelectorAll('.thumbnail');
const arrows = document.querySelectorAll('.arrow');

// індекс поточного зображення
let currentIndex = 0;

// додати обробник події кліку для стрілочок
arrows.forEach((arrow) => {
  arrow.addEventListener('click', (event) => {
    if (event.target.classList.contains('left')) {
      // переміститися до попереднього зображення
      currentIndex = currentIndex - 1 < 0 ? thumbnails.length - 1 : currentIndex - 1;
    } else if (event.target.classList.contains('right')) {
      // переміститися до наступного зображення
      currentIndex = (currentIndex + 1) % thumbnails.length;
    }

    // оновити головне зображення
    const thumbnail = thumbnails[currentIndex];
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
  });
});

// додати обробник події кліку для мініатюр
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // оновити головне зображення
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;

    // оновити індекс поточного зображення
    currentIndex = index;
  });
});