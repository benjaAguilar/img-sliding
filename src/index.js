// eslint-disable-next-line no-unused-vars
import css from './sliderStyles.css';
import leavesImg from './imgs/leaves.jpg';
import playaImg from './imgs/playa.jpg';
import rightBtn from './imgs/arrow-right.svg';
import leftBtn from './imgs/arrow-left.svg';

const imgsArr = [];
let currentSlide = 0;

function slideRight() {
  if (imgsArr.length > currentSlide + 1) {
    imgsArr[currentSlide].style.display = 'none';
    imgsArr[currentSlide + 1].style.display = 'flex';
    currentSlide += 1;
  } else {
    imgsArr[currentSlide].style.display = 'none';
    imgsArr[0].style.display = 'flex';
    currentSlide = 0;
  }
}

function slideLeft() {
  console.log('left');
  if (currentSlide - 1 >= 0) {
    imgsArr[currentSlide].style.display = 'none';
    imgsArr[currentSlide - 1].style.display = 'flex';
    currentSlide -= 1;
  } else {
    imgsArr[currentSlide].style.display = 'none';
    imgsArr[imgsArr.length - 1].style.display = 'flex';
    currentSlide = imgsArr.length - 1;
  }
}

function timer() {
  const time = setInterval(() => {
    slideRight();
  }, 5000);

  return time;
}

export default function imgSlider(slider, selector) {
  slider.images.forEach((image) => {
    const img = document.createElement('img');
    const imgContainer = document.createElement('div');
    const caption = document.createElement('p');

    img.classList.add('imgs-slider');
    img.classList.add('fade');
    imgContainer.classList.add('img-container');
    caption.classList.add('img-caption');
    imgContainer.style.display = 'none';

    img.src = image.src;
    caption.textContent = image.caption;
    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    selector.appendChild(imgContainer);
    imgsArr.push(imgContainer);
  });

  const imgRightBtn = document.createElement('img');
  const imgLeftBtn = document.createElement('img');
  const ContainerRightBtn = document.createElement('div');
  const ContainerLeftBtn = document.createElement('div');

  imgRightBtn.src = rightBtn;
  imgLeftBtn.src = leftBtn;
  ContainerRightBtn.classList.add('right-arrow');
  ContainerLeftBtn.classList.add('left-arrow');
  selector.classList.add('img-arrange');

  imgsArr[0].style.display = 'flex';
  ContainerRightBtn.appendChild(imgRightBtn);
  ContainerLeftBtn.appendChild(imgLeftBtn);
  selector.appendChild(ContainerLeftBtn);
  selector.appendChild(ContainerRightBtn);

  let time = timer();

  ContainerRightBtn.addEventListener('click', () => {
    clearInterval(time);
    slideRight();
    time = timer();
  });

  ContainerLeftBtn.addEventListener('click', () => {
    clearInterval(time);
    slideLeft();
    time = timer();
  });
}

const slide = document.querySelector('.myslide');

const mySlider = {
  images: [
    {
      caption: 'photo by: idk',
      src: playaImg,
    },
    {
      caption: 'another cap',
      src: leavesImg,
    },
  ],
};

imgSlider(mySlider, slide);
