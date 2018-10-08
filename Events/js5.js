var el = null;
list.onclick = function (e) {
    if (e.target.tagName == 'LI') {
        if(el != null)  el.style.background = '#fff';
        el = e.target;
        e.target.style.background = '#fd0';
    }
}