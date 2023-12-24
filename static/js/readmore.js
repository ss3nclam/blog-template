const array = Array.from(document.getElementsByClassName('post_block'));

array.forEach(function(post) {
    let post_id = post.attributes.post_id.value;
    let container = document.getElementById("post_" + post_id + "_content");
    let button = document.getElementById("post_" + post_id + "_readmore_btn");
    let btn_block = document.getElementById("post_" + post_id + "_readmore_block");

    let scroll_height = container.scrollHeight
    let max_height = +window.getComputedStyle(container).maxHeight.replace('px', '')

    if (max_height < scroll_height) {
        button.addEventListener("click", function() {
            container.style.maxHeight = scroll_height + "px";
            button.style.opacity = 0;
        });
    } else {
        button.style.display = 'none'
        btn_block.style.justifyContent = 'right'
    }
});
