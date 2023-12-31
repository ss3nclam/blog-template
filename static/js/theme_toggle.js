let icon = color_scheme_switcher_icon.classList.value

color_scheme_switcher.onclick = function () {
    icon = document.body.classList.contains('dark-theme') ? 'bi-sun-fill' : 'bi-moon-stars-fill';
    document.body.classList.toggle('dark-theme');
};