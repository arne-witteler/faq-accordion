const questions = document.querySelectorAll(".accordion__question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".accordion__item");
    item.classList.toggle("is-active");
  });
});