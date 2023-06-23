var mario = false;
var luigi = false;

$("#BtnMario").click(
    function () {
        $("#containerMario").css({ "display": "none" })
        $("#layout").css({ "display": "flex" })
        mario = true;
    }
)

$("#BtnLuigi").click(
    function () {
        $("#containerMario").css({ "display": "none" })
        $("#layout").css({ "display": "flex" })
        $("#mario").attr("src", "../assets/luigi.gif")
        luigi = true;
    }
)


var posX = 200
var layoutWidth = $("#layout").width()
$("#playerMario").css({ "left": posX + "px" })

$("#right").click(
    function () {
        if (mario) {
            $("#mario").attr('src', '../assets/mario.gif')
        } else {
            $("#mario").attr('src', '../assets/luigi.gif')
        }
        if (posX < layoutWidth - 150) {
            posX += 100
            $("#playerMario").animate({ left: posX + "px" }, { duration: 200 })
        } else {
            $("#layout").css("display", "none");
            $("#containerFim").css("display", "flex");
        }
    }
)

$("#left").click(
    function () {
        if (mario) {
            $("#mario").attr('src', '../assets/marioLeft.gif')
        } else {
            $("#mario").attr('src', '../assets/luigiLeft.gif')
        }
        if (posX > 0) {
            posX -= 100
            $("#playerMario").animate({ left: posX + "px" }, { duration: 200 })
        } else {
            alert("Ops Lado errado meu amigo")
        }

    }
)

var posY = 30

$("#playerMario").css({ "bottom": posY + "px" })
$("#jump").click(
    function () {
        posY += 60
        if (posY > 90) {
            posY = 90
        }

        $("#playerMario").animate({ bottom: posY + "px" }, { duration: 100 })
        setTimeout(function () {
            $("#playerMario").animate({ bottom: "30px" }, { duration: 100 })
        }, 100)

    }
)

$(document).ready(function () {
    $("#BtnMario").click(function () {
        $("#audioMario")[0].play();
    });
});

$(document).ready(function () {
    $("#BtnLuigi").click(function () {
        $("#audioMario")[0].play();
    });
});

