const array = Array.from(document.getElementsByClassName('post_block'));


array.forEach((post) => {
    let content = post.getElementsByClassName('post_content')[0];
    let scroll_height = content.scrollHeight;
    let max_height = +window.getComputedStyle(content).maxHeight.replace('px', '');

    let readmore = post.getElementsByClassName('readmore_btn')[0];


    if (scroll_height < max_height * 2 ? true : false) {
        post.classList.add('content_acceptable');
    } else {
        post.classList.add('content_minimised');
        readmore.addEventListener("click", function () {
            post.classList.remove('content_minimised');
            post.classList.add('content_maximised');
            content.style.maxHeight = scroll_height + "px";
        })
    }
});