const drawer = document.getElementById("drawer");
const menuBtn = document.querySelector(".menu-btn");

function toggleDrawer() {
    drawer.classList.toggle("active");
}

document.addEventListener("click", function (event) {

    const clickedInsideDrawer = drawer.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (
        drawer.classList.contains("active") &&
        !clickedInsideDrawer &&
        !clickedMenuButton
    ) {
        drawer.classList.remove("active");
    }
});