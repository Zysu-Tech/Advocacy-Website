(function () {
    function b() {
        var a = window,
            c = e;
        if (a.addEventListener) a.addEventListener("load", c, !1);
        else if (a.attachEvent) a.attachEvent("onload", c);
        else {
            var d = a.onload;
            a.onload = function () {
                c.call(this);
                d && d.call(this);
            };
        }
    }
    var f = !1;
    function e() {
        if (!f) {
            f = !0;
            for (var a = document.getElementsByClassName("psa_add_styles"), c = 0, d; (d = a[c]); ++c)
                if ("NOSCRIPT" == d.nodeName) {
                    var k = document.createElement("div");
                    k.innerHTML = d.textContent;
                    document.body.appendChild(k);
                }
        }
    }
    function g() {
        var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
        a
            ? a(function () {
                  window.setTimeout(e, 0);
              })
            : b();
    }
    var h = ["pagespeed", "CriticalCssLoader", "Run"],
        l = this;
    h[0] in l || !l.execScript || l.execScript("var " + h[0]);
    for (var m; h.length && (m = h.shift()); ) h.length || void 0 === g ? (l[m] ? (l = l[m]) : (l = l[m] = {})) : (l[m] = g);
})();
pagespeed.CriticalCssLoader.Run();
