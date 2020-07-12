const navSlide = () => {
    const bars = document.querySelector(".bars");
    const nav = document.querySelector(".nav-links");
    bars.addEventListener('click', () => {
        nav.classList.toggle("nav-active")
    });
}
navSlide();