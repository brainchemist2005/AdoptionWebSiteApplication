from flask import Flask, render_template, request, redirect, g, url_for
from database import Database
import random

app = Flask(__name__, static_url_path="", static_folder="static")

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()

@app.route('/', methods=['GET'])
def form():
    animaux = get_db().get_animaux()
    if len(animaux) >= 5:
        animauxHasard = random.sample(animaux, 5)
    else:
        animauxHasard = animaux

    return render_template('accueil.html', animaux=animauxHasard)

@app.route('/apropos')
def apropos():
    return render_template('apropos.html')

@app.route("/erreur")
def erreur():
    return render_template('erreur.html') 

@app.route("/succes")
def succes():
    return render_template('succes.html') 

@app.route('/animal/<id_animal>', methods=['GET'])
def animal_page(id_animal):
    animal = get_db().get_animal(id_animal)
    if animal:return render_template('details.html', animal=animal)
    elif animal is None: return redirect(404)

@app.route('/page_animal', methods=['GET'])
def contacter_proprietaire():
    return render_template('page_animal.html')

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404

@app.route('/adoption')
def adoption():
    return render_template('adoption.html')


@app.route('/soumettre', methods=["POST"])
def soumettre():
    if len(request.form["nom"]) < 3 or len(request.form["nom"])>20:
      return redirect("/erreur")
    
    elif int(request.form["age"]) <0 or int(request.form["age"])>30:
       return redirect("/erreur")


    elif len(request.form["description"]) > 500: 
        return redirect("/erreur")
    
    elif len(request.form["adresse"]) > 75:
      return redirect("/erreur")
    
    elif len(request.form["ville"]) > 75:
      return redirect("/erreur")
    
    elif len(request.form["codepostal"]) > 7:
       return redirect("/erreur")
    
    elif len(request.form["email"]) > 80:
       return redirect("/erreur")

    elif not request.form["nom"].strip() or not request.form["nom"]:
            return redirect("/erreur")
    
    elif not request.form["description"].strip() or not request.form["description"]:
          return redirect("/erreur")
    
    elif not request.form["adresse"].strip() or not request.form["adresse"]:
            return redirect("/erreur")
    
    elif not request.form["ville"].strip() or not request.form["ville"]:
          return redirect("/erreur")
    
    elif not request.form["codepostal"].strip() or not request.form["codepostal"]:
            return redirect("/erreur")
    
    elif not request.form["email"].strip() or not request.form["email"]:
          return redirect("/erreur")
    
    elif not request.form["age"].strip() or not request.form["age"]:
       return redirect("/erreur")
    
    elif "," in request.form["nom"]:
      return redirect("/erreur")   
             
    elif "," in  request.form["description"]:
      return redirect("/erreur")
    
    elif "," in request.form["adresse"]:
        return redirect("/erreur")
    
    elif "," in request.form["ville"]:
        return redirect("/erreur")
    
    elif "," in request.form["codepostal"]:
        return redirect("/erreur")
            
    elif "," in request.form["email"]:
        return redirect("/erreur")

    elif "," in request.form["age"]:
        return redirect("/erreur")

    else :
        get_db().add_animal(request.form["nom"], request.form["espece"], request.form["race"], 
                        request.form["age"], request.form["description"], request.form["email"],
                        request.form["adresse"], request.form["ville"], request.form["codepostal"])    
    nom=request.form["nom"]
    age= request.form["age"]
    description= request.form["description"]
    adresse= request.form["adresse"]
    ville=request.form["ville"]
    
    codepostal=request.form["codepostal"]
    email=request.form["email"]

    return render_template("confirmation.html", 
                           nom=nom,age=age,
                           description=description,
                           adresse=adresse,ville=ville,
                           codepostal=codepostal,email=email)

@app.route('/accueil')
def accueil():
    animaux = get_db().get_animaux()
    if len(animaux) >= 5:
        animauxHasard = random.sample(animaux, 5)
    else:
        animauxHasard = animaux

    return render_template('accueil.html', animaux=animauxHasard)

@app.route('/recherche')
def recherche():
    Kword = request.args.get('Kword').lower()
    animaux = get_db().get_animaux()

    filter_animaux = [animal for animal in animaux 
                      if Kword in animal['espece'].lower() or Kword in animal['nom'].lower() or Kword in animal['race'].lower() or Kword in animal['ville'].lower()]

    return render_template('resultat_recherche.html', animaux=filter_animaux)


if __name__ == "__main__":
    app.run(debug=True)