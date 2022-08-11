const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const featuresLink = document.querySelector(".list-item-1");
const companyLink = document.querySelector(".list-item-2");
const subMenu1 = document.querySelector(".sub-menu__1");
const subMenu2 = document.querySelector(".sub-menu__2");
const svgFeatures = document.querySelector(".svg__features");
const svgCompany = document.querySelector(".svg__company");

const newAttribute = `
<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4" />
</svg>
`;
navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }

  featuresLink.addEventListener("click", function (e) {
    const subMenu1IsHidden = subMenu1.getAttribute("class");
    if (subMenu1IsHidden) subMenu1.classList.toggle("sub1hidden");
  });
  companyLink.addEventListener("click", function () {
    const subMenu2IsHidden = subMenu2.getAttribute("class");
    if (subMenu2IsHidden) subMenu2.classList.toggle("sub2hidden");
  });
});
