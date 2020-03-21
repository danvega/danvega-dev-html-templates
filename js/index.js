const toggleSwitch = document.querySelector(".toggle-container i");

function switchTheme(e) {
  console.log(document.documentElement.getAttribute("data-theme"));
  if (document.documentElement.getAttribute("data-theme") === null) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.classList.remove("fa-moon");
    toggleSwitch.classList.add("fa-sun");
  } else {
    document.documentElement.removeAttribute("data-theme");
    toggleSwitch.classList.remove("fa-sun");
    toggleSwitch.classList.add("fa-moon");
  }
}

toggleSwitch.addEventListener("click", switchTheme);

const hamburger = document
  .querySelector(".hamburger")
  .addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("show");
  });
