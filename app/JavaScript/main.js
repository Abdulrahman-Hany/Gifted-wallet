// Sticky Header Functionality
const header = document.querySelector("header");
function checkStickyHeader() {
    header.classList.toggle("sticky", window.scrollY > 2);
}
window.addEventListener("scroll", checkStickyHeader);
window.addEventListener("load", checkStickyHeader);

// Toggle Sidebar Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-bar .bar-icon");
    const menuBtnClose = document.querySelector(".menu-bar .close-bar-icon");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function (event) {
        sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
        event.stopPropagation();
        menuBtn.classList.add("active");
        menuBtnClose.classList.add("active");
    });

    menuBtnClose.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        menuBtnClose.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && event.target !== menuBtn) {
            sidebar.style.display = "none";
            menuBtn.classList.remove("active");
            menuBtnClose.classList.remove("active");
        }
    });
});