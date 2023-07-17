function up() {
    let a = document.getElementById("sm");
    a.style.top = parseInt(a.style.top) -10 + 'px';
}
function  down() {
    let a = document.getElementById("sm");
    a.style.top = parseInt(a.style.top) + 10 + 'px';
}
function  left() {
    let a = document.getElementById("sm");
    a.style.left = parseInt(a.style.left) - 10 + 'px';
}
function  right() {
    let a = document.getElementById("sm");
    a.style.left = parseInt(a.style.left) + 10 + 'px';
}
function press(button) {
    switch (button.keyCode) {
        case 38:
        case 87:
            up();
        break;
        case 40:
        case 83:
            down();
        break;
        case 37:
        case 65:
            left();
        break;
        case 39:
        case 68:
            right();
    }
}
function action() {
    window.addEventListener('keydown',press);
}