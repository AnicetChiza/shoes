document.querySelectorAll('.prod-type-container').forEach(item => {
    const bigImage = item.querySelector('.big-image'); // Change to querySelector
    const smallImages = item.querySelectorAll('.small-image'); // Scope to the container

    smallImages.forEach(smallImage => {
        smallImage.onclick = function () {
            bigImage.src = smallImage.src;
        };
    });
});