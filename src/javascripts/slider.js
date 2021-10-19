import $ from 'jquery';
import img1 from '../images/reviews/Ellipse-9.png';
import img2 from '../images/reviews/Ellipse-10.png';
import img3 from '../images/reviews/Ellipse-11.png';
import img4 from '../images/reviews/Ellipse-12.png';
import img5 from '../images/reviews/Ellipse-13.png';
import img6 from '../images/reviews/Ellipse-14.png';
import img7 from '../images/reviews/Ellipse-15.png';

const img = [img1, img2, img3, img4, img5, img6, img7];
let curSlide = -1;
let isMobile = false;

$(document).ready(function () {
  $('.js-slider').slick({
    dots: true,
    onAfterChange: function (slider, index) {
      console.log('+');
      console.log($(slider.$slides.get(index)).data('caption'));
    },
  });
});
const createImg = source => `<img
      class="reviews__image-slider"
      src="${source}"
      alt="Фотография выпускника"
      width="54"
      height="54" />`;
//
//
const renderMobileDots = () => {
  console.log('+');
  const dotsRefs = document.querySelectorAll('.slick-dots li');
  const numOfCurrentDot = Number($('.slick-active').attr('data-slick-index')) + 1;

  if (curSlide === numOfCurrentDot) {
    return console.log('curSlide === numOfCurrentDot');
  }

  dotsRefs.forEach((el, index) => {
    if (
      index === numOfCurrentDot ||
      index === numOfCurrentDot - 1 ||
      index === numOfCurrentDot + 1 ||
      (numOfCurrentDot === img.length && index === img.length - 3) ||
      (numOfCurrentDot === img.length && index === img.length - 2) ||
      (numOfCurrentDot === img.length - 1 && index === img.length - 3) ||
      (numOfCurrentDot === 0 && index === 2)
    ) {
      const elWithImg = createImg(img[index]);
      el.firstChild.innerHTML = elWithImg;
      el.classList.remove('visually-hidden');
    } else {
      el.classList.add('visually-hidden');
    }
  });
  curSlide = numOfCurrentDot;
};

$('.js-slider').on('afterChange', function () {
  if (isMobile) {
    renderMobileDots();
  }
});
function initNav() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    const dotsRefs = document.querySelectorAll('.slick-dots li');
    dotsRefs.forEach((el, index) => {
      el.classList.remove('visually-hidden');
      const elWithImg = createImg(img[index]);
      el.firstChild.innerHTML = elWithImg;
    });
  } else {
    isMobile = true;
    renderMobileDots();
  }
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  // if (!e.matches) return;
  console.log('change');
  initNav();
});

$('.js-slider').on('init', function (event, slick) {
  initNav();
});
