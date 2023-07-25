from flask import Flask, render_template, request, redirect, g
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

@app.route('/animal/<int:id_animal>', methods=['GET'])
def animal_page(id_animal):
    animal = get_db().get_animal(id_animal)
    if animal is None:
        return redirect(404)
    return render_template('resultat_recherche.html', animal=animal)

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404

@app.route("/adoption")
def adoption():
    return render_template('adoption.html')

@app.route("/soumettre", methods=["POST"])
def soumettre():
    if len(request.form["nom"]) > 25 or \
    len(request.form["description"]) > 500 or \
    len(request.form["adresse"]) > 75 or \
    len(request.form["ville"]) > 75 or \
    len(request.form["codepostal"]) > 7 or \
    len(request.form["email"]) > 80:
        return redirect('/erreur')
    
    
    get_db().add_animal(request.form["nom"], request.form["espece"], request.form["race"], 
                        request.form["age"], request.form["description"], request.form["email"],
                        request.form["adresse"], request.form["ville"], request.form["codepostal"])
    
    
    return redirect('/succes')

if __name__ == "__main__":
    app.run(debug=True)