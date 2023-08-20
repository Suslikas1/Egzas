const darkModeButton = document.getElementById("dark-mode-button");
const lightModeButton = document.getElementById("light-mode-button");

darkModeButton.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
});

lightModeButton.addEventListener("click", () => {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
});
