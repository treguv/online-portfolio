// handle the clicks for all the card elements
// $("#fly-high").on("click", function () {
//   open("https://treguv.github.io/fly-high/");
// });

// $("#pdf-highlight").on("click", function () {
//   open("https://github.com/treguv/dubhacks2020");
// });

// $("#weather-dashboard").on("click", function () {
//   open("https://treguv.github.io/weather-dashboard/");
// });

// $("#run-buddy").on("click", function () {
//   open("https://treguv.github.io/run-buddy/");
// });
// $("#note-taker").on("click", function () {
//   open("https://github.com/treguv/note-taker/tree/main");
// });
// $("#stuck-inside").on("click", function () {
//   open("http://www.stuckinside.tech");
// });

//Make the nav bar elements change size based on screen size
function resizeNav() {
  if ($(window).width() > 768) {
    $(".nav-item").each(function () {
      $(this).removeClass("list-inline-item");
      $(this).addClass("text-right");
    });
    // console.log($("#footer-row #contact-list"));
    // $("#contact-me").removeClass("text-center");
    // $("#contact-me").addClass("text-left");
    // $("#contact-list").removeClass("text-center").addClass("text-right"); Fix this crap
  }
}
resizeNav();
