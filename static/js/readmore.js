let container = document.getElementById("container");
let button = document.getElementById("button");

button.addEventListener("click", function() {
    if (container.scrollHeight > container.style.maxHeight) {
        button.style.opacity = 0;
        container.style.height = container.scrollHeight + "px";
        // button.remove();
    } else {
        console.log('jopa')
}});
