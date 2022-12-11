$(document).ready(function () {
    $("#btn").click(function () {
        $("#h1").css("color", "red")
    })

    $("#h1").hover(function(){
        $("#h1").css("background-color", "yellow")

    })
    $("#h1").mouseout(function () {
        $("#h1").css("background-color", "gray")

    })
    $("#btn").click(function () {
        var txt = $("#txt").val()
        if (txt.length < 3) {
            alert("Please enter min 3 characters...")
        }
    })
    $("#txt").keyup(function () {
        var txt = $("#txt").val()
        $("#txt").val(txt.toUpperCase())
    })
})