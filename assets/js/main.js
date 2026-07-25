/**
 * Theming.
 *
 * Defaults the site to light theme for all users visiting and navigating the site.
 * Preserves explicit user toggle if they choose dark theme.
 */
const themeToggle = document.querySelector(".theme-toggle");

function applyTheme() {
  const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
  if (chosenTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function switchTheme(e) {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    if (window.localStorage) window.localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    if (window.localStorage) window.localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
  window.location.reload();
}

if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
}

applyTheme();
