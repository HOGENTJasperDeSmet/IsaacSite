function openImg(img, x, title, place, description) {
  temp = document.body.innerHTML;
  topOffset = window.scrollY;
  console.log(title);
  document.startViewTransition(() => {
    document.body.innerHTML = `<div class="bigPic" onclick="hideImg()">
    <figure itemscope="" itemtype="https://schema.org/Photograph">
        <img src="${img}" itemprop="image" alt="The hood of a red Ford Mustang" style="view-transition-name: photo-${x}">
      <figcaption>
        ${title !== 'undefined' ? `<h2 itemprop="name headline">${title}</h2>` : ""}
        ${place !== 'undefined' ? `<div>${place}</div>` : ""}
        ${description !== 'undefined' ? `<dl><dd>${description}</dd></dl>` : ""}
      </figcaption>
    </figure>
  </main>`;
  });
}

function hideImg() {

  if (!document.startViewTransition) {
    document.body.innerHTML = temp;
    window.scrollTo({
      top: topOffset,
    });
    return;

  }
  document.startViewTransition(() => {

    document.body.innerHTML = temp;
    window.scrollTo({
      top: topOffset,
    });
  });


}