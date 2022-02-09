const colorChange = function() {
    document.querySelector('h1').style.color = 'purple';
}
const btn = document.getElementById('btn');
btn.addEventListener('click', colorChange);