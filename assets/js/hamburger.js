function toggleNavbarToggler() {
    const innerWidth = window.innerWidth;

    const toggle = document.getElementById(`toggle`);

    if (innerWidth > 991) {
        toggle.style.display = 'none';
    } else if (innerWidth < 991) {
        toggle.style.display = 'flex';
    }
}

window.addEventListener('load', toggleNavbarToggler);
window.addEventListener('resize', toggleNavbarToggler);