const selector = (tag) => document.querySelector(`${tag}`);
const selectorAll = (tag) => document.querySelectorAll(`${tag}`);

const themeBtn = selector(".theme_btn");
const menuBtn = selector(".menu_btn");
const BODY = selector("BODY");

themeBtn.addEventListener("click", () => {
    console.log("click");
    if (BODY.className === "dark_theme") {
        BODY.className = "light_theme";
    } else {
        BODY.className = "dark_theme";
    }
});
let menuState = false;
const animationIn = (item, delay = 500) => {
    item.animate([{ transform: `translateX(-100%)` }, { transform: `translateX(0)` }], { duration: delay, fill: `forwards` });
};
const animationOut = (item, delay = 500) => {
    item.animate([{ transform: `translateX(0)` }, { transform: `translateX(-100%)` }], { duration: delay, fill: `forwards` });
};
menuBtn.addEventListener("click", () => {
    const navMenu = selector(".nav_menu");
    if (!menuState) {
        menuState = true;
        animationIn(navMenu);
    } else {
        animationOut(navMenu);
        menuState = false;
    }
});
