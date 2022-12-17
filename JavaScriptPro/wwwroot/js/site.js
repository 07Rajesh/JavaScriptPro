var items = [];
$(document).ready(function () {
    $("#btn").click(function () {
        $("#h1").css("color", "red")
    })
    /*
    $("#h1").hover(function(){
        $("#h1").css("background-color", "yellow")

    })
    $("#h1").mouseout(function () {
        $("#h1").css("background-color", "gray")

    })
    */

  
    $("#btn").click(function () {
        var txt = $("#txt").val()
        if (txt.length < 3) {
            alert("Please enter min 3 characters...")
        }
        else {

            if (items.indexOf(txt) >= 0) {
                alert("This items is already Exist!")
            }
            else {

                if ($("#btn").text() == "Update") {
                    items.splice($("#hdn").val(), 1, txt)
                    $("#btn").text("Add")
                }
                else {

                    items.push(txt);
                  
                }
                printList(items)
                $("#txt").val("")
            }
        }
    })
    $("#txt").keyup(function () {
        var txt = $(this).val();
        var sitems = items.filter(function (item) { return item.startsWith(txt) })
        if (sitems.length == 0) {
            sitems = items
        }
        printList(sitems);
    })


})

    function printList(items) {
        var list = "<ol>"
        items.forEach(function (item, index) {
            list += "<li>" + item + "<a onclick='editItem(" + index +")'><span class='close'>edit</span></a><a onclick='removeItem(" + index + ")'><span class='close'>&times;</span></a></li>"
        })



        list + "</ol>"
        $("#displayList").html(list)
}
function removeItem(index) {
    items.splice(index, 1);
    printList(items)

}
function editItem(index) {
    $("#txt").val(items[index])
    $("#btn").text("Update")
    $("#hdn").val(index)
}


//    $("#txt").keyup(function () {
//        var txt = $("#txt").val()
//        $("#txt").val(txt.toUpperCase())
//    })


var students = {"name":"Aman", "age":15, "gender":"male"}