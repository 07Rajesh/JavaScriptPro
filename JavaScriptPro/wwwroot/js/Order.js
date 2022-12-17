
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
    $("#ddlMenu").change(function () {
        if (!($("#ddlMenu").val() == "" || $("#ddlMenu").val() == "-1")) {
            var price = $("#ddlMenu").val()
            $("#lblPrice").text("Price : " + price + " Rs.")
        }
        else {
            $("#lblPrice").text("")
        }
    })

})


function addOrder() {
    if ($("#ddlMenu").val == "" || $("#ddlMenu").val == "-1") {
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
    var grandPrice = 0;
    customerItems.forEach(function (item, index) {
        tbl += "<tr><td>" + (index + 1) + "</td><td>" + item.item + "</td><td>" + item.price + "</td><td>" + item.quantity + "</td><td>" + item.totalprice + "</td></tr>"
        grandPrice += item.totalprice

    })
    tbl += "<tr><td colspan='3'></td><td colspan='2'><span>Grand Total : " + grandPrice + "</span></td></tr>"
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