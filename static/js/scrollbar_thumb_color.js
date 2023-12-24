document.onscroll = function() {
    document.documentElement.style.setProperty('--scroll-bar-color', 'var(--accent-color)');
};

document.onscrollend = function() {
    document.documentElement.style.setProperty('--scroll-bar-color', 'var(--border-color)');
};