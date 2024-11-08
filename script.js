// Smooth scrolling for internal links
document.querySelectorAll('a[href^="https://github.com/tux-tech-tips/pixel-flow/releases/download/version-1.0/browser.tar.xz"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
