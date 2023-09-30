class Menu extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<header>
    <a class="logo" href="index.html"><img src="images/Logoo.svg" alt="Company ISC Logo"></a>
    <nav class="siteNav">
        <a href="work.html">work</a>
        <a href="about.html">about</a>
        <a href="contact.html">contact</a>
    </nav>
    <nav class="socialMediaNav">
        <a href="https://www.instagram.com/isaac.caudron/"><i class="flaticon-instagram"></i></a>
        <a href="https://flic.kr/ps/34QA55"><i class="flaticon-flickr"></i></a>
        <a href="https://www.facebook.com/isaac.caudron"><i class="flaticon-facebook"></i></a>
    </nav>
</header>`
  }
}

export { Menu }