const questions = document.querySelectorAll(".accordion__question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".accordion__item");
    item.classList.toggle("is-active");

    const expanded = item.classList.contains("is-active");
    question.setAttribute("aria-expanded", expanded);
  });
});