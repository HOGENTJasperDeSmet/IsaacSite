(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('asyncImage');
  Array.from(objects).map((item) => {
    // Start loading image
    console.log(window.innerWidth);

    const img = new Image();
    let x;
    if (window.innerWidth < 769 && item.dataset.srcmobile) {
      x = item.dataset.srcmobile;

    } else {
      x = item.dataset.src;
    }
    img.src = x;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ?
        item.src = x :
        item.style.backgroundImage = `url(${x})`;
    };
  });
})();