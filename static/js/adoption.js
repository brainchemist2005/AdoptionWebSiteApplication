function especeFunction(valeur)
{
    var element1 = document.getElementById("f2");
    var element2 = document.getElementById("f3");
    var element3 = document.getElementById("f4");
    var element4 = document.getElementById("f5");
    var element5 = document.getElementById("f6");

    // Reset all select inputs for species to the default value
    resetSelectElements(["floatingSelect1", "floatingSelect2", "floatingSelect3", "floatingSelect4", "floatingSelect5"]);

    // Hide all species specific dropdowns
    [element1, element2, element3, element4, element5].forEach(element => element.style.display = "none");

    if(valeur == "mouton") {
        element1.style.display = "";
        document.getElementById("floatingSelect1").name = "race";
    } else if (valeur == "chien") {
        element2.style.display = "";
        document.getElementById("floatingSelect2").name = "race";
    } else if (valeur == "serpent") {
        element3.style.display = "";
        document.getElementById("floatingSelect3").name = "race";
    } else if (valeur == "escargot") {
        element4.style.display = "";
        document.getElementById("floatingSelect4").name = "race";
    } else if (valeur == "kangourou") {
        element5.style.display = "";
        document.getElementById("floatingSelect5").name = "race";
    }
}

function resetSelectElements(ids) {
    ids.forEach(id => {
        var select = document.getElementById(id);
        select.selectedIndex = 0;
        select.name = "";
    });
}


function validateInput() {
        var input = document.getElementById("floatingInputInvalid1");
        if (input.value === "" || input.value.length > 20 || input.value.length < 3 ) {
            input.className = "form-control is-invalid";
            return false;
        } else {
            input.className = "form-control is-valid";
        }
    }

function validateZipCode() {
        var input = document.getElementById("floatingInputInvalid3");
        var regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
        if (!regex.test(input.value)) {
            input.className = "form-control is-invalid";
            return false;
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
    var element3 = document.getElementsByClassName("invalid-selection")[0];
    var element4 = document.getElementsByClassName("form-select")[0];
    var flag = true;

    element3.style.display="none";

    if(element4.value === "$"){
        element4.className="form-select is-invalid";
        flag = false;
    }
    else
    {
        element4.className='form-select';
    }

    element3.style.display = "none";

    if (!checkbox.checked) {
        checkbox.className = "form-check-input is-invalid";
        flag = false;
    } else {
        checkbox.className = "form-check-input is-valid";
    }

    if(select1.value == "0")
    {
        element3.style.display = "inline";
        element3.style.color = "red";
        element3.className="invalid-selection is-invalid";
        flag = false;
    }
    else if(select1.value != "0"){
        element3.className="invalid-selection";
        element3.style.display="none";
    }

    console.log(select3.value);

    if(select2.value === "0" && select3.value === "0" &&select4.value === "0" &&select5.value === "0" && select6.value === "0"){
        element3.style.display = "inline";
        element3.style.color = "red";
        flag = false;
        element3.className="invalid-selection is-invalid";
    }
    else{
        element3.className="invalid-selection";
        element3.style.display="none";
    }

    return flag;
}

function validateForm() {
    var isInvalid = document.getElementsByClassName('is-invalid');

    validateRace();
    console.log(validateInput() + " " +validateZipCode() + " " + validateEmail() + " " + validateCheckbox() );
    console.log(isInvalid.length == 0);

    for(var i=0; i<isInvalid.length ; i++)
        console.log(isInvalid[i].value);

    if(isInvalid.length == 0
    // check if there are any elements with class 'is-invalid'
    )
    return true;

    if (isInvalid) {
        // prevent the form from submitting
        event.preventDefault();
        event.stopPropagation();
        console.log("Nope");
        return false;
    }

    console.log("Nope");
    return false;
}

function validateAge()
{
    var element4 = document.getElementsByClassName("form-select")[0];

    if(element4.value === "$"){
        element4.className="form-select is-invalid";
        flag = false;
    }
    else
    {
        element4.className='form-select is-valid';
    }
}

function validateDesc()
{
    var element1 = document.getElementById("Desc");

    if(element1.value === "" || element1.value.length <1){
        element1.className = "form-control is-invalid";
    }
    else
        element1.className = "form-control is-valid";

}

function validateRace() {
    var selects = document.getElementsByClassName("form-select"); 
    var isValid = true; // Assume valid until proven otherwise

    for (var i = 2; i <= 6; i++) {
        if (selects[i].value == "0") {
            selects[i].className = "form-control is-invalid";
            isValid = false; // If any select value is "0", the overall validation is not valid
        } else {
            selects[i].className = "form-control is-valid";
        }
    }

    return isValid;
}

