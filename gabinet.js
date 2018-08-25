var nn = (document.layers) ? true : false;
var ns6 = (document.getElementById && !document.all) ? true : false;
var ie = (document.all) ? true : false;
var op = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
if (op) ie = false;
if (ns6) document.all = document.getElementsByTagName('*');

function okno(url, szer, wys) {
    var o = window.open(url, '', 'height=' + wys + ',width=' + szer);
}

function modyfikacja() {
    var mie = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "wrzesnia", "pazdziernika", "listopada", "grudnia");
    var mod = new Date(document.lastModified);
    var wiek = (nn || ns6 || op) ? 1900 : 0;
    document.write(mod.getDate() + "&nbsp;" + mie[mod.getMonth()] + "&nbsp;" + (mod.getYear() + wiek));
}

function a() {
    if (ie) {
        window.status = "Funkcja zablokowana!";
        return false;
    }
}

function b(e) {
    if (nn || ns6) {
        if (e.which == 2 || e.which == 3) {
            window.status = "Funkcja zablokowana!";
            return false;
        }
    }
}
if (nn) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = b;
} else {
    document.onmouseup = b;
    document.oncontextmenu = a;
}

function wycentruj(warstwa, szer, wys) {
    OSzer = (nn || ns6 || op) ? window.innerWidth : document.body.clientWidth;
    Poz1 = (OSzer < szer) ? 0 : (OSzer / 2) - (szer / 2);
    Poz2 = 10;
    document.write('<STYLE TYPE="text/css"><!-- #' + warstwa + ' {position: absolute; left: ' + Poz1 + 'px; top: ' + Poz2 + 'px; width: ' + szer + 'px; height: ' + wys + 'px;} --></style>');
}