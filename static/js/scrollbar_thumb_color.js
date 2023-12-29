document.onscroll = function () {
    document.body.style.setProperty('--scroll-bar-color', 'var(--accent-color)');
};

document.onscrollend = function () {
    document.body.style.setProperty('--scroll-bar-color', 'var(--border-color)');
};