function toggleNavPanel(x) {
    var panel = document.getElementById(x), maxH="40px";
    if (panel.style.height == maxH) {
        panel.style.height = "0px";
    } else {
        panel.style.height = "40px";
    }
}