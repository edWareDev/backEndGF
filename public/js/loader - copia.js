document.body.style.overflow = 'hidden';
const loader = document.querySelector('.loaderContainer');
window.addEventListener('load', function () {
    loader.classList.add('inv')
    document.body.style.overflow = 'auto'
});