function toggleNavPanel(x) {
    var panel = document.getElementById(x), maxH="1000px";
    if (panel.style.height != 0) {
        panel.style.height = "0px";
    } else {
        panel.style.height = "1000px";
    }
}
