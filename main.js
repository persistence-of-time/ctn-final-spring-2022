const dots = document.querySelectorAll(".dot");

dots.forEach(function(dot) {
    dot.addEventListener("click", function (e) {
        e.preventDefault();
        const clicked_dot = e.target;
        clicked_dot.classList.toggle("active");
    });
});

const close_buttons = document.querySelectorAll(".close");

close_buttons.forEach(function (close_button) {
    close_button.addEventListener("click", function (e) {
        e.preventDefault();

        const clicked_close_button = e.target;
        const clicked_dot = clicked_close_button.closest(".dot");

        clicked_dot.classList.remove("active");
    });
});
