window.onload = function () {
     
    document.getElementById("age").onchange= verifierage;
    document.getElementById("nom").onchange = verifiernom;
    document.getElementById("description").onchange= verifierdescription;

    document.getElementById("adresse").onchange= verifieradresse;
    document.getElementById("ville").onchange = verifierville;
    document.getElementById("codepostal").onchange= verifiercode;

    document.getElementById("email").onchange = verifieremail;
    document.getElementById("submit").onclick = verifiernom;
    document.getElementById("submit").addEventListener("click", verifierage);
    document.getElementById("submit").addEventListener("click", verifierespece);
    document.getElementById("submit").addEventListener("click", verifierdescription);
    document.getElementById("submit").addEventListener("click", verifieremail);


    document.getElementById("adresse").addEventListener("click", verifieradresse);
    document.getElementById("ville").addEventListener("click", verifierville);
    document.getElementById("codepostal").addEventListener("click", verifiercode);

}

function animalName() {
   var elementName = document.getElementById("nom");

   elementName.placeholder = "";
}


function especeFunction(valeur)
{
    var elementMouton = document.getElementById("mouton") ;
    elementMouton.style.display = "none";
    
    var elementChien = document.getElementById("chien");
    elementChien.style.display = "none";
 
    var elementSerpent = document.getElementById("serpent") ;
    elementSerpent.style.display = "none";
   
    var elementEscargot = document.getElementById("escargot") ;
    elementEscargot.style.display = "none";

    var elementKangourou = document.getElementById("kangourou") ;
    elementKangourou.style.display = "none";

    console.log(valeur);

    if(valeur == "mouton")
        elementMouton.style.display = "inline";

    else if(valeur == "chien")
        elementChien.style.display = "inline";

    else if(valeur == "serpent")
        elementSerpent.style.display = "inline";

    else if(valeur == "escargot")
        elementEscargot.style.display = "inline";

    else if(valeur == "kangourou")
        elementKangourou.style.display = "inline";

    }


   function verifiernom() {
   var nom= document.getElementById("nom").value;
   var erreur= document.getElementById("name");
   if(nom===""||nom==null){
       erreur.innerHTML="Veuillez remplir le champ";
       erreur.style.color="red";
   }
   else if(nom.length < 3 || nom.length > 20){
       erreur.innerHTML="Le nom doit etre entre 3 et 20 inclus";
       erreur.style.color="red";
   }
   else if(nom.includes(",")){
       erreur.innerHTML="Le nom ne doit pas contenir une virgule";
       erreur.style.color="red";
   }   
   else {
       erreur.innerHTML = "";
       return true;
   } 
}

function verificationCodePostal(valeur) {
   var erreur = document.getElementById("msgerrcodepostal");
   const regex = /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/;
 
   console.log("Function called with value:", valeur);
 
   if (!regex.test(valeur)) {
     erreur.innerHTML = "Le code postal n'est pas valide";
   } else {
     erreur.innerHTML = "";
   }
 }  


function verifierage() {
   var age = document.getElementById("age").value;
   var erreur = document.getElementById("msgerrage");
   
   console.log(age);
   
   if(age === "" || age == null) { 
       erreur.innerHTML = "Veuillez remplir le champ";
       erreur.style.color = "red";
   } else if(age > 30) {
       erreur.style.display = "inline";
       erreur.innerHTML = "Le nom doit etre entre 0 et 30 inclus";
       erreur.style.color = "red";
   } else if(age.includes(",")) {
       erreur.innerHTML = "L'age ne doit pas contenir une virgule";
       erreur.style.color = "red";
   } else {
       erreur.innerHTML = "";
       return true;
   }
}






   function verifierespece() {
   var espece= document.getElementById("espece").value;
   var erreur= document.getElementById("msgerrespece");
   if(espece === "option") {
       erreur.innerHTML="Veuillez remplir le champ";
       erreur.style.color="red";
   }
   else if(espece== "chat"||espece== "chien"||espece== "serpent"||espece== "poisson"||espece== "oiseau"){
       erreur.innerHTML = "";
       
   }
}



   function verifierdescription() {
   var description= document.getElementById("description").value;
   var erreur= document.getElementById("msgerrdescription");
   if(description === "" || description == null) {
       erreur.innerHTML="Veuillez remplir le champ";
       erreur.style.color="red";
   }
   else if(description.includes(",")){
       erreur.innerHTML="La description ne doit pas contenir une virgule";
       erreur.style.color="red";
   }
   else {
       erreur.innerHTML = "";
       return true;
   }
}



   function verifieremail() {
   var email= document.getElementById("email").value;
   var erreur= document.getElementById("msgerremail");
   if(email === "" || description == null) {
       erreur.innerHTML="Veuillez remplir le champ";
       erreur.style.color="red";
   }
   else if(email.includes(",")){
       erreur.innerHTML="L'email ne doit pas contenir une virgule";
       erreur.style.color="red";
  }
  

  var emailreference = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!(emailreference.test(email))) {
   erreur.innerHTML="Veuillez entrer un format d'email valide";
   erreur.style.color="red";
} 
else {
   erreur.innerHTML = "";
}
}

function verifieradresse() {
   var adresse= document.getElementById("adresse").value;
   var erreur= document.getElementById("msgerradresse");
   if(adresse === "" || adresse == null) {
       erreur.innerHTML="Veuillez remplir le champ";
       erreur.style.color="red";
   }
   else if(adresse.includes(",")){
       erreur.innerHTML="L'adresse civique ne doit pas contenir une virgule";
       erreur.style.color="red";
   }
   else {
       erreur.innerHTML = "";
      
   }
}
function verifierville() {
   var ville= document.getElementById("ville").value;
   var erreur= document.getElementById("msgerrville");
   if(ville === "" || ville == null) {
       erreur.innerHTML="Veuillez remplir le champ";
       erreur.style.color="red";
   }
   else if(ville.includes(",")){
       erreur.innerHTML="La ville ne doit pas contenir une virgule";
       erreur.style.color="red";
   }
   else {
       erreur.innerHTML = "";
       
   }
}

function checkEnterKey(event) {
    if (event.key === "Enter") {
        const valeur = event.target.value;
        console.log(valeur);
        verifiercode(valeur);
    }
}

function verifiercode(valeur) {
    console.log(valeur+ " VALEUR");
    console.log(codepostal + " CODE");
    var erreur= document.getElementById("msgerrcodepostal");
    const regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;

    if(codepostal == " " || codepostal == null) {
        erreur.innerHTML="Veuillez remplir le champ";
        erreur.style.color="red";
    }
    else if (!regex.test(valeur)) {
        erreur.innerHTML = "Le code postal n'est pas valide";
        erreur.style.color="red";
    }
    else if(codepostal.includes(",")){
        erreur.innerHTML="Le code postal ne doit pas contenir une virgule";
        erreur.style.color="red";
    }
    else {
        erreur.innerHTML = "";
    }

    console.log(regex.test(valeur));
}