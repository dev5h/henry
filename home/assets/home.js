const joinBtns = document.querySelectorAll(".btn-click-to-view-profit");
for (var i = 0; i < joinBtns.length; i++) {
  joinBtns[i].addEventListener("click", function (e) {
    document.querySelector("#somelines").scrollIntoView({
      behavior: "smooth",
    });
  });
}
