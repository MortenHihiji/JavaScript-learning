function modal() {
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeMore = document.querySelector('.popup-close'),
        description = document.querySelectorAll('.description-btn');

    function hideOverlay() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    
    more.addEventListener('click', hideOverlay);
    description.forEach((elem) => {
        elem.addEventListener('click', hideOverlay);
    });

    closeMore.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

}

module.exports = modal;