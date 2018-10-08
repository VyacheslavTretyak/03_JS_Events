var arr = {
    'cGreen': '#0a0',
    'cYellow': '#fd0',
    'cRed': '#a00',
};
var n = 0;
var active = document.getElementById(Object.keys(arr)[n]);
active.style.backgroundColor = arr[Object.keys(arr)[n]];
btnToggle.onclick = function () {
    active.style.backgroundColor = '#fff';
    n++;
    if (n > 2) n = 0;
    active = document.getElementById(Object.keys(arr)[n]);
    active.style.backgroundColor = arr[Object.keys(arr)[n]];
}
