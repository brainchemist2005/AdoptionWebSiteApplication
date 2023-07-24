function animalName() {
    var elementName = document.getElementById("nom");

    elementName.placeholder = "";
}

function especeFunction(valeur)
{
    var elementChien = document.getElementById("chien") ;
    var elementChat = document.getElementById("chat") ;
    var elementSerpent = document.getElementById("serpent") ;
    var elementOiseau = document.getElementById("oiseau") ;
    var elementPoisson = document.getElementById("poisson") ;

    console.log(valeur);

    if(valeur == "chien")
        elementChien.style.display = "inline";

    else if(valeur == "chat")
        elementChat.style.display = "inline";

    else if(valeur == "serpent")
        elementSerpent.style.display = "inline";

    else if(valeur == "serpent")
        elementSerpent.style.display = "inline";

    else if(valeur == "oiseau")
        elementOiseau.style.display = "inline";

}