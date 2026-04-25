const button = document.getElementById('button');
const cover = document.getElementById('cover');

button.addEventListener('click', () => {
    cover.classList.remove('is-hidden');
});

cover.addEventListener(
    'click', () => {

    cover.classList.add('is-hidden');
}
                       );


