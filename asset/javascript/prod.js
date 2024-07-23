document.querySelectorAll('.prod-type-container').forEach(item => {
    const bigImage = item.querySelector('.big-image'); // Change to querySelector
    const smallImages = item.querySelectorAll('.small-image'); // Scope to the container

    smallImages.forEach(smallImage => {
        smallImage.onclick = function () {
            bigImage.src = smallImage.src;
        };
    });
});

document.querySelectorAll('.dropdown-content').forEach(content => {
    content.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            updateButtonText(content);
        });
    });
});

/*----------------------------------
#Select color
----------------------------------*/

function updateButtonText(content) {
    const checkboxes = content.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes).map(cb => cb.nextSibling.textContent.trim());

    const button = content.previousElementSibling;
    if (selectedValues.length > 0) {
        button.textContent = selectedValues.join(', ');
    } else {
        button.textContent = button.id === 'size-btn' ? 'Select Sizes' : 'Select Colors';
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
};