
const Albums = {
  path: '/',
  component: {
    template: `<main class="workShowcase">
                <router-link to="/brusselsairlines"><div class="bair hvr-bob">Brussels Airlines</div></router-link>
                <router-link to="/concerts"><div class="concerts hvr-bob">Concerts</div></router-link>
                <router-link to="/travel" class="travel hvr-bob"><div class="">Travel</div></router-link>
                <router-link to="/knokke"><div class="knokke hvr-bob">Knokke-Heist</div></router-link>
                <router-link to="/aalst"><div class="aalst hvr-bob">Aalst Carnaval</div></router-link>
            </main>`,
  }
};
const Ab = {
  path: '/concerts',
  component: {
    template: `<main class="showcase">
                  <img src="images/ab/4Klein.jpg" onclick="openImg(4)">
                  <img src="images/ab/5Klein.jpg" onclick="openImg(5)">
                  <img src="images/ab/3Klein.jpg" onclick="openImg(3)">
                  <img src="images/ab/2Klein.jpg" onclick="openImg(2)">
                  <img src="images/ab/1.jpg" onclick="openImg(1)">
                </main>`,
  }
};
const Travel = {
  path: '/travel',
  component: {
    template: `<main class="showcase">
                  <img src="images/travel/10.jpg">
                    <img class="verticalpicture" src="images/travel/8.jpg">
                    <img src="images/travel/7.jpg">
                    <img src="images/travel/5.jpg">                                      
                    <img src="images/travel/1.jpg">
                    <img src="images/travel/9.jpg">                     
                    <img src="images/travel/3.jpg">
                    <img src="images/travel/4.jpg">
                    <img src="images/travel/2.jpg">
                    
                </main>`,
  }
};
const Knokke = {
  path: '/knokke',
  component: {
    template: `<main class="showcase">
                    <img src="images/knokke/1.jpg">
                    <img src="images/knokke/2.jpg">
                    <img src="images/knokke/3.jpg">
                    <img src="images/knokke/5.jpg">
                    <img src="images/knokke/6.jpg">
                    <img src="images/knokke/7.jpg">
                    <img src="images/knokke/8.jpg">
                    <img src="images/knokke/9.jpg">
                    <img src="images/knokke/10.jpg">
                    <img src="images/knokke/11.jpg">
                    <img src="images/knokke/12.jpg">
                    <img src="images/knokke/13.jpg">
               </main>`,
  }
};
const Concerts = {
  path: '/aalst',
  component: {
    template: `<main class="showcase">
                    <img src="images/concerts/1.jpg">
                    <img src="images/concerts/2.jpg">
                    <img src="images/concerts/3.jpg">
                    <img src="images/concerts/4.jpg">
                    <img src="images/concerts/5.jpg">
                    <img src="images/concerts/7.jpg">
                    <img src="images/concerts/8.jpg">
                    <img src="images/concerts/10.jpg"> 
                    <img src="images/student-kickoff/1.jpg">
                    <img src="images/student-kickoff/2.jpg">
                    <iframe class="ytplayer" src="https://www.youtube.com/embed/Q8LGHWTlgbs?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </main>`,
  }
};
const Aalst = {
  path: '/aalst',
  component: {
    template: `<main class="showcase">
                  <img src="images/aalstcarnaval/1.jpg">
                  <img src="images/aalstcarnaval/2.jpg">
                  <img src="images/aalstcarnaval/3.jpg">
                  <img src="images/aalstcarnaval/4.jpg">
                  <img src="images/aalstcarnaval/5.jpg">
                  <img src="images/aalstcarnaval/6.jpg">
                </main>`,
  }
};

const brusselsairlines = {
  path: '/brusselsairlines',
  component: {
    template: `<main class="showcase">
    <iframe class="smallytplayer" src="https://www.youtube.com/embed/pgVSdmyoU-I?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe class="smallytplayer" src="https://www.youtube.com/embed/yd8fS001jTQ?autoplay=0&mute=0&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img src="images/bair/5.jpg">                    
    <img src="images/bair/3.jpg">
    <img class="verticalpicture" src="images/bair/4.jpg">
    <img src="images/bair/6.jpg">
    <img src="images/bair/2.jpg">
</main>`
  }
}

const routes = [
  Albums,
  Travel,
  Knokke,
  Concerts,
  Aalst,
  Ab,
  brusselsairlines
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

var app = new Vue({
  router,
  el: "#workShowcase",
});


//Smooth scrolling operator
document.querySelector(".anchorlink").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#scrollTo").scrollIntoView({
    behavior: "smooth",
  });
});


