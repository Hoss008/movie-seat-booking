var chosenSeat = document.querySelectorAll(".seat:not(.occupied)");
var countval = parseInt(document.querySelector("#count").textContent);
var count = document.getElementById("count");
var total = document.querySelector("#total");
var movie = document.getElementById("movie");
var price = 10;
let totalval = 0;

chosenSeat.forEach(function (seat) {
  seat.addEventListener("click", function () {
    if (seat.classList.toggle("selected")) {
      countval++;

      totalval = totalval + price;
      count.textContent = `${countval}`;
    } else {
      countval--;
      totalval = totalval - price;
      count.textContent = `${countval}`;
    }
    total.textContent = parseInt(totalval);
  });
});

movie.addEventListener("change", function (e) {
  price = +e.target.value;
});
