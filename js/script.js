// lógica de posicionamento do personagem direita e esquerda
// var posX = 200
// var layoutWidth = $("#layout").width()
// $("#playerMario").css({ "left": posX + "px" })

// $("#right").click(
//     function () {
//         $("#playerMario").css('background-color', 'red').text("Direita")
//         if (posX < layoutWidth - 150) {
//             posX += 100
//             $("#playerMario").animate({ left: posX + "px" }, { duration: 200 })
//         } else{
//             alert("vc bateu na parede")
//         }

//     }
// )
// $("#left").click(
//     function () {
//         $("#playerMario").css('background-color', 'blue').text("Esquerda")
//         if (posX > 0) {
//             posX -= 100
//             $("#playerMario").animate({ left: posX + "px" }, { duration: 200 })
//         } else{
//             alert("vc bateu na parede")
//         }

//     }
// )

var mario = false;
var luigi = false

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
            alert("Parece que este é o FIM <->")
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
            alert("Parece que este é o FIM <->")
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


