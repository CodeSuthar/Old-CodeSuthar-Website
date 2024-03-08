document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Function to add the "sticky" class to the navbar when you reach its scroll position
    function stickyNavbar() {
        if (window.scrollX >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Attach the function to the scroll event
    window.onscroll = function() {
        stickyNavbar();
    };
});
