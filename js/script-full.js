var button = document.querySelector(".search-form-button");
var modal = document.querySelector(".modal");

modal.classList.add("modal-hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});
