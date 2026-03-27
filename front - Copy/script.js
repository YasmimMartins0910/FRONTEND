const button = document.querySelector("button");

button.addEventListener("click", () => {
  const buttonDescription = button.textContent;
  if (buttonDescription === "dark") {
    button.textContent = "light";
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    button.textContent = "dark";
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});
