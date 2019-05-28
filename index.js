var buttons = document.getElementsByTagName('button');


Array.from(buttons).forEach(function (el) {
    el.addEventListener('click', createRipple)
})

function createRipple(e) {
    var bobble = document.createElement('div');
    this.appendChild(bobble);
    var d = Math.max(this.clientWidth, this.clientHeight)

    bobble.style.width = bobble.style.height = d + 'px';

    bobble.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
    bobble.style.top = e.clientY - this.offsetTop - d/2 + 'px';
    //
    bobble.classList.add('ripple');
    var btn = this
    setTimeout(function () {
        btn.removeChild(bobble);
    },700)
}
