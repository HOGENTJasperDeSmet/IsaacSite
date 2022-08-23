// 1. Define route components.
// These can be imported from other files
const Albums = {
  template: `<main class="workShowcase">
                <router-link to="/brusselsairlines"><div class="bair hvr-bob">Brussels Airlines</div></router-link>
                <router-link to="/concerts"><div class="concerts hvr-bob">Concerts</div></router-link>
                <router-link to="/travel" class="travel hvr-bob"><div class="">Travel</div></router-link>
                <router-link to="/knokke"><div class="knokke hvr-bob">Knokke-Heist</div></router-link>
                <router-link to="/aalst"><div class="aalst hvr-bob">Aalst Carnaval</div></router-link>

            </main>`,
};
const Ab = {
  template: `<main class="showcase">
                  <img src="images/ab/4Klein.jpg" onclick="openImg(4)">
                  <img src="images/ab/5Klein.jpg" onclick="openImg(5)">
                  <img src="images/ab/3Klein.jpg" onclick="openImg(3)">
                  <img src="images/ab/2Klein.jpg" onclick="openImg(2)">
           
                  <img src="images/ab/1.jpg" onclick="openImg(1)">
                </main>`,
};
const Travel = {
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
};
const Knokke = {
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
};
const Concerts = {
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
};
const Aalst = {
  template: `<main class="showcase">
                  <img src="images/aalstcarnaval/1.jpg">
                  <img src="images/aalstcarnaval/2.jpg">
                  <img src="images/aalstcarnaval/3.jpg">
                  <img src="images/aalstcarnaval/4.jpg">
                  <img src="images/aalstcarnaval/5.jpg">
                  <img src="images/aalstcarnaval/6.jpg">
                </main>`,
};
const Bair = {
  template: `<main class="showcase">
                    <iframe class="smallytplayer" src="https://www.youtube.com/embed/pgVSdmyoU-I?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe class="smallytplayer" src="https://www.youtube.com/embed/yd8fS001jTQ?autoplay=0&mute=0&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img src="images/bair/5.jpg">                    
                    <img src="images/bair/3.jpg">
                    <img class="verticalpicture" src="images/bair/4.jpg">
                    <img src="images/bair/6.jpg">
                    <img src="images/bair/2.jpg">
                    
                    
                </main>`,
};
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Albums },
  { path: "/travel", component: Travel },
  { path: "/knokke", component: Knokke },
  { path: "/concerts", component: Concerts },
  { path: "/aalst", component: Aalst },
  { path: "/brusselsairlines", component: Bair },
  { path: "/ab", component: Ab },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

var app = new Vue({
  router,
  el: "#workShowcase",
  data: {
    product: "Socks",
  },
});
function openImg(img) {
  console.log("hello");
  const elem = document.getElementById("bigPic");
  const elemCont = document.getElementById("bigPicCont");

  elem.src = `images/ab/${img}.jpg`;
  elemCont.style.display = "flex";
}
function hideImg() {
  const elemCont = document.getElementById("bigPicCont");

  elemCont.style.display = "none";
}
document.querySelector(".anchorlink").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#scrollTo").scrollIntoView({
    behavior: "smooth",
  });
});
