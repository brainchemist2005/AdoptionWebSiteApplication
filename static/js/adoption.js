window.onload = function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        if(!validateForm()) {
            event.preventDefault();
        }
    });
};

function validateForm(e) {
    if (!validateInput() || !validateVille() || !validateAdresse() || !validateZipCode() || !validateEmail() || !validateCheckbox() || !validateAge() || !validateDesc() || !validateEspece() || !validateRace() ) {
        e.preventDefault();
    }
}

function validateEspece() {
    var select = document.getElementById("floatingSelect");
    if (select.value === "-1") {
        select.className = "form-select is-invalid";
        return false;
    } else {
        select.className = "form-select is-valid";
        return true;
    }
}

function validateRace() {
    var select1 = document.getElementById("floatingSelect1");
    var select2 = document.getElementById("floatingSelect2");
    var select3 = document.getElementById("floatingSelect3");
    var select4 = document.getElementById("floatingSelect4");
    var select5 = document.getElementById("floatingSelect5");

    if (select1.value === "-1" && select2.value === "-1" &&select3.value === "-1" &&select4.value === "-1" && select5.value === "-1") {
        select1.className = "form-select is-invalid";
        select2.className = "form-select is-invalid";
        select3.className = "form-select is-invalid";
        select4.className = "form-select is-invalid";
        select5.className = "form-select is-invalid";
        return false;
    } else {
        select1.className = "form-select is-valid";
        select2.className = "form-select is-valid";
        select3.className = "form-select is-valid";
        select4.className = "form-select is-valid";
        select5.className = "form-select is-valid";
        return true;
    }
}

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

    if(valeur == "Mouton") {
        element1.style.display = "";
        document.getElementById("floatingSelect1").name = "race";
    } else if (valeur == "Chien") {
        element2.style.display = "";
        document.getElementById("floatingSelect2").name = "race";
    } else if (valeur == "Serpent") {
        element3.style.display = "";
        document.getElementById("floatingSelect3").name = "race";
    } else if (valeur == "Escargot") {
        element4.style.display = "";
        document.getElementById("floatingSelect4").name = "race";
    } else if (valeur == "Kangourou") {
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
        if (input.value === "" || input.value.length > 20 || input.value.length < 3 || input.value.includes(",") ) {
            input.className = "form-control is-invalid";
            return false;
        } else {
            input.className = "form-control is-valid";
            return true;
        }
    }

function validateVille(){
    var input = document.getElementById("floatingInputInvalidVille");

    if(input.value.length > 75 || input.value === "" || input.value.includes(","))
    {
        input.className = "form-control is-invalid";
        return false;
    }
    else 
    {
        input.className = "form-control is-valid";
        return true;
    }
}

function validateAdresse() {
    var input = document.getElementById("floatingInputInvalid2");

    if(input.value.includes(",") || input.value === "" || input.value.length > 75) {
        input.className = "form-control is-invalid";
        return false;
    }
    else{
        input.className = "form-control is-valid";
        return true;
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
            return true;
        }
    }

function validateEmail() {
        var input = document.getElementById("floatingInputInvalid4");
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(input.value)) {
            input.className = "form-control is-invalid";
            return false;
        } else {
            input.className = "form-control is-valid";
            return true;
        }
    }

function validateCheckbox() {
    var checkbox = document.getElementById('invalidCheck');
    if (!checkbox.checked) {
        checkbox.className = "form-check-input is-invalid";
        return false;
    } else {
        checkbox.className = "form-check-input is-valid";
        return true;
    }
}


function validateAge()
{
    var element4 = document.getElementsByClassName("form-select")[0];

    if(element4.value === "-1"){
        element4.className="form-select is-invalid";
        return false;
    }
    else
    {
        element4.className='form-select is-valid';
        return true;
    }
}

function validateDesc()
{
    var element1 = document.getElementById("Desc");

    if(element1.value === "" || element1.value.length <1 || element1.value.length > 500){
        element1.className = "form-control is-invalid";
        return false;
    }
    else{
        element1.className = "form-control is-valid";
        return true;
    }

}
