class Footer extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<footer>
    <span>© IscCdr ${new Date().getFullYear()} website made by Thomas Pellekens</span>
    <nav class="socialMediaNav">
      <a href="https://www.instagram.com/isaac.caudron/"><i class="flaticon-instagram"></i></a>
      <a href="https://flic.kr/ps/34QA55"><i class="flaticon-flickr"></i></a>
      <a href="https://www.facebook.com/isaac.caudron"><i class="flaticon-facebook"></i></a>
    </nav>
  </footer>`
  }
}

export { Footer }