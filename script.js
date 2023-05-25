// testimonial

let testimonialColletion = [
  {
    username: "Alan Walker",
    designation: "Developer, Xynapse Tech",
    comment:
      "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    username: "Kyle Zorro",
    designation: "Developer, Xynapse Tech",
    comment:
      "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    username: "Signen sati",
    designation: "Developer, Xynapse Tech",
    comment:
      "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    username: "Dimti Karlenkov",
    designation: "Developer, Xynapse Tech",
    comment:
      "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    username: "Ferro Quereshi",
    designation: "Developer, Xynapse Tech",
    comment:
      "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const testimonials = document.querySelector(".testimonials");
const scrollBtn = document.querySelectorAll(".scroll-dot");

let firstTestimonial = `
<div class="profile-section">
  <div class="image-div">
    <img src="./images/man.png" alt="" />
  </div>
  <div class="name-div">
    <p class="name-p">${testimonialColletion[0].username}</p>
    <p class="designa-p">${testimonialColletion[0].designation}</p>
  </div>
</div>

<div class="comment-section">
  <i class="bi bi-quote"></i>
  <p>
  ${testimonialColletion[0].comment}
  </p>
</div>
`;

const firstTestiimonialDiv = document.createElement("div");
firstTestiimonialDiv.className = "comments-container";
firstTestiimonialDiv.innerHTML = firstTestimonial;

testimonials.appendChild(firstTestiimonialDiv);

for (let i = 0; i < 5; i++) {
  scrollBtn[i].onclick = function () {
    let newTestimonial = `
        <div class="profile-section">
          <div class="image-div">
            <img src="./images/man.png" alt="" />
          </div>
          <div class="name-div">
            <p class="name-p">${testimonialColletion[i].username}</p>
            <p class="designa-p">${testimonialColletion[i].designation}</p>
          </div>
        </div>

        <div class="comment-section">
          <i class="bi bi-quote"></i>
          <p>
          ${testimonialColletion[i].comment}
          </p>
        </div>
      `;

    const div = document.createElement("div");
    div.className = "comments-container";
    div.innerHTML = newTestimonial;

    testimonials.replaceChild(div, testimonials.children[0]);
    for (let i = 0; i < 5; i++) {
      scrollBtn[i].classList.remove("active");
    }
    this.classList.add("active");
  };
}

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
  },
});
