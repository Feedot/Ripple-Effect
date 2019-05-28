var buttons = document.getElementsByTagName('button');


Array.from(buttons).forEach(function (el) {
    el.addEventListener('click', createRipple)
})

function createRipple(e) {
    var bobble = document.createElement('div'),
        d = Math.max(this.clientWidth, this.clientHeight);

    this.appendChild(bobble);

    bobble.style.width = bobble.style.height = d + 'px';
    bobble.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
    bobble.style.top = e.clientY - this.offsetTop - d/2 + 'px';
    bobble.classList.add('ripple');

    setTimeout(function () { this.removeChild(bobble); }.bind(this),700)
}
