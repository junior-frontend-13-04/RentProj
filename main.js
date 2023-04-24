let loginBtn = document.querySelector('.login');
let closeBtn = document.querySelector('.close')
let overlay = document.querySelector('.overlay');

loginBtn.onclick = function () {
    overlay.style.display = 'flex'
}

closeBtn.onclick = function () {
    overlay.style.display = 'none'
}

overlay.onclick = function (e) {
    if (e.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
}