color_scheme_switcher.onclick = function() {
    if (document.body.classList.contains('dark-theme')) {
        color_scheme_switcher_icon.classList.value = 'bi-sun-fill'
    } else {
        color_scheme_switcher_icon.classList.value = 'bi-moon-stars-fill'
    };
    document.body.classList.toggle('dark-theme');
}