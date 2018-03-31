var button = document.querySelector(".search-form-button");
var modal = document.querySelector(".modal");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});
