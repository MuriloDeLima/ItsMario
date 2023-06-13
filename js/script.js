// Log posX personagem direita e esquerda 
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
var posX = 200
var layoutWidth = $("#layout").width()
$("#playerMario").css({ "left": posX + "px" })

$("#right").click(
    function () {
        $("#mario").attr('src', '../assets/mario.gif')

        if (posX < layoutWidth - 150) {
            posX += 100
            $("#playerMario").animate({ left: posX + "px" }, { duration: 200 })
        } else {
            alert("vc bateu na parede")
        }

    }
)
$("#left").click(
    function () {
        $("#mario").attr('src', '../assets/marioLeft2.gif')
        if (posX > 0) {
            posX -= 100
            $("#playerMario").animate({ left: posX + "px" }, { duration: 200 })
        } else {
            alert("vc bateu na parede")
        }

    }
)

var posY = 45


$("#playerMario").css({ "bottom": posY + "px" })
$("#jump").click(
    function () {
        posY += 60
        if (posY > 105) {
            posY = 105
        }

        $("#playerMario").animate({ bottom: posY + "px" }, { duration: 100 })
        setTimeout(function () {
            $("#playerMario").animate({ bottom: "45px" }, { duration: 100 })
        }, 100)

    }
)
