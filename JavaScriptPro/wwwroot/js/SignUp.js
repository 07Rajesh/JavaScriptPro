$(document).ready(function () {

    $("#btnSubmit").click(function () {
        var isValid = true
        isValid = requiredTextField("Name", "Your name",null,15)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Email", "Your email address!","email")
        if (!isValid) { return isValid }

        isValid = requiredTextField("Mobile", "Your mobile number", "mobile",10)
        if (!isValid) { return isValid }

        isValid = requiredSelectField("Gender", "gender")
        if (!isValid) { return isValid }

        isValid = requiredTextField("Password", "password","password",8)
        if (!isValid) { return isValid }

        isValid = requiredTextField("ConfirmPassword", "confirm password", "confirmpassword", 8)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Pincode", "pin code","pincode",6)
        if (!isValid) { return isValid }

        isValid = requiredTextField("Address", "address", "address",50)
        if (!isValid) { return isValid }

        console.log(isValid)
    })
})

$("#txtName").keyup(function () {
    isValid = requiredTextField("Name", "Your name!",null,15)
    if (!isValid) { return isValid }
})
$("#txtEmail").keyup(function () {
    isValid = requiredTextField("Email", "Your email address!","email")
    if (!isValid) { return isValid }
})
$("#txtMobile").keyup(function () {
    isValid = requiredTextField("Mobile", "Your mobile number!", "mobile",10)
    if (!isValid) { return isValid }
})
$("#ddlGender").change(function () {
    isValid = requiredSelectField("Gender", "gender!")
    if (!isValid) { return isValid }
})
$("#txtPassword").keyup(function () {
    isValid = requiredTextField("Password", "Your password!", "password",8)
    if (!isValid) { return isValid }
})
$("#txtConfirmPassword").keyup(function () {
    isValid = requiredTextField("ConfirmPassword", "Your confirm password!", "confirmpassword", 8)
    if (!isValid) { return isValid }
})
$("#txtPincode").keyup(function () {
    isValid = requiredTextField("Pincode", "Your pin code!","pincode",6)
    if (!isValid) { return isValid }
})
$("#txtAddress").keyup(function () {
    isValid = requiredTextField("Address", "Your address!","address",50)
    if (!isValid) { return isValid }
})
