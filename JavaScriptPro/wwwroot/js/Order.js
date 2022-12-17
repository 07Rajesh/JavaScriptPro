
var menus = [
    {"item":"Pasta","price":200},
    {"item":"Burger","price":300},
    {"item":"Pizza","price":350},
    {"item":"Chease Pizza","price":390},
    {"item":"Samosa","price":20},
    {"item":"Paneer Samosa","price":30}
]

var customerItems = [];

$(document).ready(function () {
    bindMenuDDL()

    $("#btnAdd").click(addOrder)

})


function addOrder() {
    if ($("#ddlMenu").val == "" || $("#ddlMenu").val == "") {
        alert("Please Select Menu")
    }
    else if ($("#txtQuantity").val() == "" || $("#txtQuantity").val() == "0") {
        alert("Please enter Quantity")
    }
    else {
        var menu = $("#ddlMenu option:selected").text()
        var price = $("#ddlMenu").val()
        var quantity = $("#txtQuantity").val()
        var obj = { "item": menu, "price": price, "quantity": quantity, "totalprice": price * quantity }
        customerItems.push(obj)

        $("#ddlMenu").val("-1")
        $("#txtQuantity").val("0")

        bindOrder()
    }
}

function bindOrder() {

    var tbl = "<table class='table table-bordered table-hover'><tr class='table-dark'><th>SNO.</th><th>Menu</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>"

    customerItems.forEach(function (item, index) {
        tbl += "<tr><td>" + (index + 1) + "</td><td>" + item.item + "</td><td>" + item.price + "</td><td>" + item.quantity + "</td><td>" + item.totalprice + "</td></tr>"

    })

    tbl += "</table>"
    $("#divOrder").html(tbl)
}



function bindMenuDDL() {
    var op = "<option value='-1'>Select</option>"
    menus.forEach(function (item) {
        op += "<option value='" + item.price + "'>" + item.item + "</option >"
    })
    $("#ddlMenu").html (op)
}