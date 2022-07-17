const HAMBURGER_ICON = document.getElementById("helpful_menu_icon");
const HELPFUL_LINK = document.getElementById("helpful_links");
const MOBILE = {
  on: false,
  hamburger_menu: false
}
hamburger_click = () => {
  let CURRENT_DISPLAY = window.getComputedStyle(HELPFUL_LINK).display;

  if (CURRENT_DISPLAY != "none") {
    MOBILE.hamburger_menu = false
    HELPFUL_LINK.style.display = "none";
  } else {
    MOBILE.hamburger_menu = true
    HELPFUL_LINK.style.display = "flex";
  }
};

addEventListener('resize', () => {
  let size = window.getComputedStyle(document.body).width.replace("px", "")
  
  
  if (size >= 850) {
    HELPFUL_LINK.style.display = "flex";
  } else {
    MOBILE.on = true
    if (MOBILE.hamburger_menu != true) {
      HELPFUL_LINK.style.display = "none";
    }

  }
});

