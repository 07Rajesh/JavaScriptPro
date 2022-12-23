
function requiredTextField(controlId,errorMessage,validationType="all",length=500) {

    var Id = "#txt" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId
    $(Id).attr("maxlength", length)
    var txtVal = $(Id).val()
    if (txtVal == "" || txtVal == undefined || txtVal == null) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please Enter " + errorMessage)
        $(Id).focus()
        return false
    }
    else {
        if (!getValidationType(validationType).test(txtVal)) {
            $(formGroup).addClass("error-control")
            $(errorField).addClass("error-control")
            $(errorField).html("Please Enter valid " + errorMessage)
            $(Id).focus()
            return false
        }
        else {
            $(formGroup).removeClass("error-control")
            $(errorField).removeClass("error-control")
            $(errorField).html("")
            return true
        }
    }
}
//Gender drop down ke liye bnayenge function --validation bhi change karenge  

function requiredSelectField(controlId, errorMessage) {

    var Id = "#ddl" + controlId
    var formGroup = "#formGroup" + controlId
    var errorField = "#err" + controlId

    var ddlVal = $(Id).val()
    if (ddlVal == "-1" || ddlVal == undefined || ddlVal == null || ddlVal==0) {
        $(formGroup).addClass("error-control")
        $(errorField).addClass("error-control")
        $(errorField).html("Please select " + errorMessage)
        $(Id).focus()
        return false
    }
    else {
        $(formGroup).removeClass("error-control")
        $(errorField).removeClass("error-control")
        $(errorField).html("")
        return true
    }
}

function getValidationType(validationType) {
    var regx = ""
    switch (validationType) {

        case "email":
            regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            break;

        case "mobile":
            regx = /^(\+\d{1,3}[- ]?)?\d{10}$/
            break;

        case "pincode":
            regx = /^(\d{4}|\d{6})$/
            break;

        case "password":
            regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/
            break;

        case "confirmpassword":
            regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/
            break;

        case "address":
            regx = /^[a-zA-Z0-9 .,#;:'-]{1,40}$/
            break;

        default:
            regx = /.*/
            break;
    }
    return regx;
}

function passwordConfirmation() {
    var pass = document.getElementById("Password").value;
    var confPass = document.getElementById("ConfirmPassword").value;

    if (pass == "") {
        alert("Error: The password field is Empty.");
    } else if (Password == confPass) {
        alert("Logged In");
    } else {
        alert("Please make sure your passwords match.")
    }
}
