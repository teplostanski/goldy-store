//selector
const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

//slider
// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider__image'),
  sliderLine = document.querySelector('.slider__line'),
  sliderDots = document.querySelectorAll('.slider__dot'),
  sliderButtonNext = document.querySelector('.slider__button-next'),
  sliderButtonPrev = document.querySelector('.slider__button-prev');

// Переменные
let sliderCount = 0,
  sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Кнопки листания слайдов вперед и назад
sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrev.addEventListener('click', prevSlide);

// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach((item) => (item.style.width = sliderWidth + 'px'));

  rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;

  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove('slider__dot_active'));
  sliderDots[index].classList.add('slider__dot_active');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

//const tooltipTriggerList = [].slice.call(
//  document.querySelectorAll('[data-bs-toggle="tooltip"]')
//);
//const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//  return new bootstrap.Tooltip(tooltipTriggerEl, {
//    customClass: 'custom-tooltip',
//  });
//});

//tooltips
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//tabs
const saleTab = document.querySelector('#sale-tab');

const changeClassActiveSale = (e) => {
  const navElems = document.querySelector('.sale__tab_active');
  if (navElems !== null) {
    navElems.classList.remove('sale__tab_active');
  }
  e.target.classList.add('sale__tab_active');
};

saleTab.addEventListener('click', (e) => {
  changeClassActiveSale(e);
});

const colorTab = document.querySelector('#color-tab');

const changeClassActiveColor = (e) => {
  const navElems = document.querySelector(
    '.product-card__choice-color-tab_active'
  );
  if (navElems !== null) {
    navElems.classList.remove('product-card__choice-color-tab_active');
  }
  e.target.classList.add('product-card__choice-color-tab_active');
};

colorTab.addEventListener('click', (e) => {
  changeClassActiveColor(e);
});

const sizeTab = document.querySelector('#size-tab');

const changeClassActiveSize = (e) => {
  const navElems = document.querySelector(
    '.product-card__choice-size-tab_active'
  );
  if (navElems !== null) {
    navElems.classList.remove('product-card__choice-size-tab_active');
  }
  e.target.classList.add('product-card__choice-size-tab_active');
};

sizeTab.addEventListener('click', (e) => {
  changeClassActiveSize(e);
});

// timer
function countDown() {
  let mins = 46;
  let hours = 12;
  let secs = 51;
  setInterval(() => {
    document.getElementById('seconds').innerText =
      secs < 10 ? '0' + secs : secs;
    document.getElementById('minutes').innerText =
      mins < 10 ? '0' + mins : mins;
    document.getElementById('hours').innerText =
      hours < 10 ? '0' + hours : hours;
    secs--;
    if (secs === 0) {
      if (mins === 0) {
        mins = 59;
        secs = 59;
        hours--;
      } else {
        secs = 59;
        mins--;
      }
    }
  }, 1000);
}

window.onload = countDown;
