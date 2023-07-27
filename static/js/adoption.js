function especeFunction(valeur)
{
    var element1 = document.getElementById("f2");
    var element2 = document.getElementById("f3");
    var element3 = document.getElementById("f4");
    var element4 = document.getElementById("f5");
    var element5 = document.getElementById("f6");

    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "none";
    element4.style.display = "none";
    element5.style.display = "none";

    if(valeur == "mouton")
        element1.style.display = "";

    else if (valeur == "chien")
        element2.style.display = "";
    
    else if (valeur == "serpent")
        element3.style.display = "";

    else if (valeur == "escargot")
        element4.style.display = "";

    else if (valeur == "kangourou")
        element5.style.display = "";
    
    }

function validateInput() {
        var input = document.getElementById("floatingInputInvalid1");
        if (input.value === "" || input.value.length > 20 || input.value.length < 3 ) {
            input.className = "form-control is-invalid";
        } else {
            input.className = "form-control is-valid";
        }
    }

function validateZipCode() {
        var input = document.getElementById("floatingInputInvalid3");
        var regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
        if (!regex.test(input.value)) {
            input.className = "form-control is-invalid";
        } else {
            input.className = "form-control is-valid";
        }
    }

function validateEmail() {
        var input = document.getElementById("floatingInputInvalid4");
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(input.value)) {
            input.className = "form-control is-invalid";
        } else {
            input.className = "form-control is-valid";
        }
    }

function validateCheckbox() {
    var checkbox = document.getElementById("invalidCheck");
    var select1 = document.getElementById("floatingSelect"); // Change this
    var select2 = document.getElementById("floatingSelect1"); 
    var select3 = document.getElementById("floatingSelect2"); 
    var select4 = document.getElementById("floatingSelect3"); 
    var select5 = document.getElementById("floatingSelect4"); 
    var select6 = document.getElementById("floatingSelect5"); 
    var element3 = document.getElementById("invalid-selection");
    var element4 = document.getElementsByClassName("form-select")[0];

    if(element4.value =="$")
        element4.className="form-select is-invalid";

    element3.style.display = "none";

    if (!checkbox.checked) {
        checkbox.className = "form-check-input is-invalid";
    } else {
        checkbox.className = "form-check-input is-valid";
    }

    if(select1.value == "0")
    {
        element3.style.display = "inline";
        element3.style.color = "red";
    }

    else if(select2.value == "0" && select3.value == "0" &&select4.value == "0" &&select5.value == "0" && select6.value == "0"){
        element3.style.display = "inline";
        element3.style.color = "red";
    }
}