function thumbColor(color) {
    document.body.style.setProperty('--scroll-bar-color', `var(${color})`);
};

document.onscroll = function () {
    thumbColor('--accent-color');
};

document.onscrollend = function () {
    thumbColor('--border-color');
};