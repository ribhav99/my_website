function toggleNavPanel(x) {
    var panel = document.getElementById(x);
    if (panel.style.height != '0px' && panel.style.height) {
        panel.style.height = "0px";
    } else {
        panel.style.height = "1000px";
    }
}
