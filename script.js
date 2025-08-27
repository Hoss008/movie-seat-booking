var chosenSeat = document.querySelectorAll(".seat:not(.occupied)");
var count = document.querySelector("#count");

chosenSeat.forEach(function (seat) {
  seat.addEventListener("click", function () {
    if (seat.classList.toggle("selected")) {
      count.textContent = parseInt(count.textContent) + 1;
    } else {
      count.textContent = parseInt(count.textContent) - 1;
    }
  });
});
