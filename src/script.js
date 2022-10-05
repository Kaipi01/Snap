const hamburgerBtn = document.querySelector(".nav__hamburger");
const anchors = document.querySelectorAll(".nav__item-anchor");

anchors.forEach((a, index) =>
  a.addEventListener("focus", () => showNestedListOnFocus(a, index))
);
window.addEventListener("click", closeNestedList);
hamburgerBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".nav__menu");
  const icon = document.querySelectorAll(".nav__hamburger img");
  menu.classList.toggle("nav__menu--hide");

  icon.forEach((icon) => icon.classList.toggle(`${icon.classList[0]}--hide`));
}

function showNestedListOnFocus(a, index) {
  closeNestedList();
  const ul = document.querySelector(
    `.${a.className} ~ .nav__item-list-${index + 1}`
  );

  if (!ul) {
    return;
  } else {
    ul.style.display = "flex";
  }
}

function closeNestedList() {
  const lists = document.querySelectorAll(".nav__item-list");
  lists.forEach((ul) => (ul.style.display = ""));
}
