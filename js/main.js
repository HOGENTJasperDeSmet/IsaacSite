
const Ab = {
  path: 'concerts',
  component: {
    template: `<main class="showcase">
                  <img src="images/ab/4Klein.jpg" onclick="openImg(this.src)">
                  <img src="images/ab/5Klein.jpg"  onclick="openImg(this.src)">
                  <img src="images/ab/3Klein.jpg"  onclick="openImg(this.src)">
                  <img src="images/ab/2Klein.jpg" onclick="openImg(this.src)">
                  <img src="images/ab/1.jpg"  onclick="openImg(this.src)">
                </main>`,
  }
};
const Travel = {
  path: 'travel',
  component: {
    template: `<main class="showcase">
                  <img src="images/travel/10.jpg"  onclick="openImg(this.src)">
                    <img class="verticalpicture" src="images/travel/8.jpg" onclick="openImg(this.src)">
                    <img src="images/travel/7.jpg" onclick="openImg(this.src)">
                    <img src="images/travel/5.jpg" onclick="openImg(this.src)">                                      
                    <img src="images/travel/1.jpg" onclick="openImg(this.src)">
                    <img src="images/travel/9.jpg" onclick="openImg(this.src)">                     
                    <img src="images/travel/3.jpg" onclick="openImg(this.src)">
                    <img src="images/travel/4.jpg" onclick="openImg(this.src)">
                    <img src="images/travel/2.jpg" onclick="openImg(this.src)">
                    
                </main>`,
  }
};
const Knokke = {
  path: 'knokke',
  component: {

    template: `<main class="showcase">
                    <img src="images/knokke/1.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/2.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/3.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/5.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/6.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/7.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/8.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/9.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/10.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/11.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/12.jpg" onclick="openImg(this.src)">
                    <img src="images/knokke/13.jpg" onclick="openImg(this.src)">
               </main>`,
  }
};
const Concerts = {
  path: 'concerts',
  component: {
    template: `<main class="showcase">
                    <img src="images/concerts/1.jpg" onclick="openImg(this.src)">
                    <img src="images/concerts/2.jpg" onclick="openImg(this.src)">
                    <img src="images/concerts/3.jpg"> onclick="openImg(this.src)"
                    <img src="images/concerts/4.jpg"> onclick="openImg(this.src)"
                    <img src="images/concerts/5.jpg"> onclick="openImg(this.src)"
                    <img src="images/concerts/7.jpg"> onclick="openImg(this.src)"
                    <img src="images/concerts/8.jpg"> onclick="openImg(this.src)"
                    <img src="images/concerts/10.jpg" onclick="openImg(this.src)"> 
                    <img src="images/student-kickoff/1.jpg" onclick="openImg(this.src)">
                    <img src="images/student-kickoff/2.jpg" onclick="openImg(this.src)">
                    <iframe class="ytplayer" src="https://www.youtube.com/embed/Q8LGHWTlgbs?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </main>`,
  }
};
const Aalst = {
  path: 'aalst',
  component: {
    template: `<main class="showcase">
                  <img src="images/aalstcarnaval/1.jpg" style="view-transition-name: photo-1" onclick="openImg(this.src,1)">
                  <img src="images/aalstcarnaval/2.jpg" style="view-transition-name: photo-2" onclick="openImg(this.src,2)">
                  <img src="images/aalstcarnaval/3.jpg" style="view-transition-name: photo-3" onclick="openImg(this.src,3)">
                  <img src="images/aalstcarnaval/4.jpg" style="view-transition-name: photo-4" onclick="openImg(this.src,4)">
                  <img src="images/aalstcarnaval/5.jpg" style="view-transition-name: photo-5" onclick="openImg(this.src,5)">
                  <img src="images/aalstcarnaval/6.jpg" style="view-transition-name: photo-6" onclick="openImg(this.src,6)">
                </main>`,
  }
};

const brusselsairlines = {
  path: 'brusselsairlines',
  component: {
    template: `<main class="showcase">
    <img src="images/bair/5.jpg"  style="view-transition-name: photo-1" onclick="openImg(this.src,1)">                    
    <img src="images/bair/3.jpg" style="view-transition-name: photo-2" onclick="openImg(this.src,2)">
    <img class="verticalpicture"  style="view-transition-name: photo-3" src="images/bair/4.jpg" onclick="openImg(this.src,3)">
    <img src="images/bair/6.jpg"  style="view-transition-name: photo-4" onclick="openImg(this.src,4)">
    <img src="images/bair/2.jpg"  style="view-transition-name: photo-5" onclick="openImg(this.src,5)">
</main>`
  }
}
const mainMenu = {
  path: 'mainMenu',
  component: {
    template: `<main class="workShowcase">
    <a href="#brusselsairlines">
      <div class="bair hvr-bob">Brussels Airlines</div>
    </a>
    <a href="#concerts">
      <div class="concerts hvr-bob">Concerts</div>
    </a>
    <a href="#travel" class="travel hvr-bob">
      <div >Travel</div>
    </a>
    <a href="#knokke">
      <div class="knokke hvr-bob">Knokke-Heist</div>
    </a>
    <a href="#aalst">
      <div class="aalst hvr-bob">Aalst Carnaval</div>
    </a>
  </main>
  `
  }
}



const routes = [
  Travel,
  Knokke,
  Concerts,
  Aalst,
  Ab,
  brusselsairlines
];

function openGallery() {
  var showcase = document.getElementById("workShowcase");
  temp = showcase.innerHTML;

  var component = routes.find(x => x.path === window.location.hash.split('#')[1])?.component;
  if (component) {
    document.startViewTransition(() => {
      showcase.innerHTML = component.template;
    });
  } else {
    showcase.innerHTML = mainMenu.component.template;
  }
}

openGallery();
window.onhashchange = locationHashChanged;

function locationHashChanged() {
  openGallery();
}

var temp, topOffset;

function openImg(img, x) {
  temp = document.body.innerHTML;
  topOffset = window.scrollY;

  document.startViewTransition(() => {
    document.body.innerHTML = `<div class="bigPic" onclick="hideImg()">
    <figure itemscope="" itemtype="https://schema.org/Photograph">
        <img src="${img}" itemprop="image" alt="The hood of a red Ford Mustang" style="view-transition-name: photo-${x}">
      <figcaption>
        <h2 itemprop="name headline">Airbus A330</h2>

        <div>
          Brussels, Brussels Airport
          <time datetime="2023-11-26T00:00:00.000Z" itemprop="dateCreated">
            2023
          </time>
        </div>
        <dl>
          <dd>Canon baby</dd>
          <dd> 500mm</dd>
        </dl>
      </figcaption>
    </figure>
  </main>`;
  });
}

function hideImg() {
  document.startViewTransition(() => {

    document.body.innerHTML = temp;
    window.scrollTo({
      top: topOffset,
    });
  });


}
//Smooth scrolling operator
document.querySelector(".anchorlink").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#scrollTo").scrollIntoView({
    behavior: "smooth",
  });
});

