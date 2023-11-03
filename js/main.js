import { travelImages } from './galleries/travel.js'
import { knokkeImages } from './galleries/knokke.js'
import { concertImages } from './galleries/concert.js'
import { corporateImages } from './galleries/corporate.js'
import { bairImages } from './galleries/bair.js'


const Ab = {
  path: 'concerts',
  component: {
    images: concertImages,
    template: function () {
      return `
      <a href="#mainMenu">
        <img class="backArrow" src="images/arrowBack.svg" />
      </a>
      <main class="showcase">
      ${this.images.map((elem, index) => {
        if (elem.video) {
          return `<iframe class="smallytplayer" src="https://www.youtube.com/embed/${elem.src}?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        }
        return `<img 
        src="${elem.src}" 
        ${elem.vertical ? `class="verticalpicture"` : ""} 
        style="view-transition-name: photo-${index}" 
        onclick="openImg(this.src, ${index},'${elem.title}','${elem.place}','${elem.description}')"
        >`
      }
      ).join("")}
      </main>`;
    }
  }
};
const Travel = {
  path: 'travel',
  component: {
    images: travelImages,
    template: function () {
      return `
      <a href="#mainMenu">
        <img class="backArrow" src="images/arrowBack.svg" />
      </a>
      <main class="showcase">
      ${this.images.map((elem, index) => {
        if (elem.video) {
          return `<iframe class="smallytplayer" src="https://www.youtube.com/embed/${elem.src}?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        }
        return `<img 
        src="${elem.src}" 
        ${elem.vertical ? `class="verticalpicture"` : ""} 
        style="view-transition-name: photo-${index}" 
        onclick="openImg(this.src, ${index},'${elem.title}','${elem.place}','${elem.description}')"
        >`
      }
      ).join("")}
      </main>`;
    }
  }
};

const Knokke = {
  path: 'knokke',
  component: {
    images: knokkeImages,
    template: function () {
      return `
      <a href="#mainMenu">
        <img class="backArrow" src="images/arrowBack.svg" />
      </a>
      <main class="showcase">
      ${this.images.map((elem, index) => {
        if (elem.video) {
          return `<iframe class="smallytplayer" src="https://www.youtube.com/embed/${elem.src}?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        }
        return `<img 
        src="${elem.src}" 
        ${elem.vertical ? `class="verticalpicture"` : ""} 
        style="view-transition-name: photo-${index}" 
        onclick="openImg(this.src, ${index},'${elem.title}','${elem.place}','${elem.description}')"
        >`
      }
      ).join("")}
      </main>`;
    }
  }
};
const Concerts = {
  path: 'concerts',
  component: {
    images: concertImages,
    template: function () {
      return `
      <a href="#mainMenu">
        <img class="backArrow" src="images/arrowBack.svg" />
      </a>
      <main class="showcase">
      ${this.images.map((elem, index) => {
        if (elem.video) {
          return `<iframe class="smallytplayer" src="https://www.youtube.com/embed/${elem.src}?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        }

        return `<img 
        src="${elem.src}" 
        ${elem.vertical ? `class="verticalpicture"` : ""} 
        style="view-transition-name: photo-${index}" 
        onclick="openImg(this.src, ${index},'${elem.title}','${elem.place}','${elem.description}')"
        >`
      }
      ).join("")}
      </main>`;
    }
  }
};

const brusselsairlines = {
  path: 'brusselsairlines',
  component: {
    images: bairImages,
    template: function () {
      return `
      <a href="#mainMenu">
        <img class="backArrow" src="images/arrowBack.svg" />
      </a>
      <main class="showcase">
      ${this.images.map((elem, index) => {
        if (elem.video) {
          return `<iframe class="smallytplayer" src="https://www.youtube.com/embed/${elem.src}?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
        return `<img 
        src="${elem.src}" 
        ${elem.vertical ? `class="verticalpicture"` : ""} 
        style="view-transition-name: photo-${index}" 
        onclick="openImg(this.src, ${index},'${elem.title}','${elem.place}','${elem.description}')"
        >`
      }
      ).join("")}
      </main>`;
    }
  }
}

const corporate = {
  path: 'corporate',
  component: {
    images: corporateImages,
    template: function () {
      return `
      <a href="#mainMenu">
        <img class="backArrow" src="images/arrowBack.svg" />
      </a>
      <main class="showcase">
      ${this.images.map((elem, index) => `<img 
          src="${elem.src}" 
          ${elem.vertical ? `class="verticalpicture"` : ""} 
          style="view-transition-name: photo-${index}" 
          onclick="openImg(this.src, ${index},'${elem.title}','${elem.place}','${elem.description}')"
          >`
      ).join("")}
      </main>`;
    }
  }
}


const mainMenu = {
  path: 'mainMenu',
  component: {
    template: `
    <main class="workShowcase">
    <a href="#knokke">
      <div class="knokke hvr-bob">Knokke-Heist</div>
    </a>
    <a href="#concerts">
      <div class="concerts hvr-bob">Concerts</div>
    </a>
    <a href="#travel" class="travel hvr-bob">
      <div >Travel</div>
    </a>
    <a href="#brusselsairlines">
    <div class="bair hvr-bob">Brussels Airlines</div>
    </a>
    <a href="#corporate">
      <div class="corporate hvr-bob">Corporate</div>
    </a>
  </main>
  `
  }
}

const routes = [
  Travel,
  Knokke,
  Concerts,
  Ab,
  brusselsairlines,
  corporate
];

function openGallery() {
  var showcase = document.getElementById("workShowcase");
  temp = showcase.innerHTML;

  var component = routes.find(x => x.path === window.location.hash.split('#')[1])?.component;
  if (component) {
    document.startViewTransition(() => {
      showcase.innerHTML = component.template();
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

var temp;


//Smooth scrolling operator
document.querySelector(".anchorlink").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#scrollTo").scrollIntoView({
    behavior: "smooth",
  });
});

