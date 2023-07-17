let image = document.getElementById("abc");
function load() {
    image = document.getElementById("abc");
    image.style.position = 'relative';
    image.style.left = '0px';
}
function  move() {
    image.style.left = parseInt(image.style.left) + 100 + 'px';
}
window.onload = load;