const slider = document.querySelector('.sliderBlock .slider');
const sliderItem = document.querySelectorAll('.sliderBlock .slider .item');
const image = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const dots = document.querySelectorAll('.sliderBlock .dots input');
let current = 0;
let index = 0;
let x = 0;

for (let i = 0; i < image.length; i++) {
    sliderItem[i].style.backgroundImage = `url(${image[i]})`;
}

next.onclick = () => {
    current -= 100;
    c = '' + current;
    c = c[1];
    c == image.length ? c = 0 : '';
    dots[+c].checked = true;
    current < -400 ? current = 0 : '';
    slider.style.left = current + '%';
};
prev.onclick = () => {
    current += 100;
    current > 0 ? current = -400 : '';
    c = '' + current;
    c = c[1];
    c == undefined ? c = 0 : '';
    dots[+c].checked = true;
    slider.style.left = current + '%';
};


dots.forEach ((item, num) => {
    item.onchange = () => {
        x = -num + '00';
        index = num;
        current = +x;
        slider.style.left = current + '%';
    }
});




