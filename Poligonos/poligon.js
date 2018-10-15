$("#Calcular").click(function () {
    var lados = $("#Lados").val();
    var paso = $("#Pasos").val();

    var cx = 125;
    var cy = 100;
    var r = 75;

    function points(cx, cy, r, lados, paso) {
        var a = 360 / lados;
        var points = (cx + r) + "," + cy + " ";

        for (var i = 1; i <= lados; i++) {
            var aRad = ((Math.PI / 180) * (a * i)) * paso;
            Xp = cx + r * Math.cos(aRad);
            Yp = cy + r * Math.sin(aRad);
            points += Xp + "," + Yp + " ";
        }
        return points
    }

    var estrella = document.getElementById("poligono");
    estrella.setAttribute("points", points(cx, cy, r, lados, paso));
})