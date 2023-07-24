from flask import Flask, render_template, request, redirect, g
from database import Database

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

@app.route('/', methods=['GET','POST'])
def form():
    return render_template('adoption.html')

@app.route('/<id_animal>')
def animal_page(id_animal):
    animal = get_db().get_animal(id_animal)
    if animal is None:
        return redirect(404)
    return render_template('resultat_recherche.html', animal=animal)

@app.route("/soumettre", methods=["POST"])
def soumettre():
    if len(request.form["nom"]) > 25 or \
    len(request.form["description"]) > 500 or \
    len(request.form["adresse"]) > 75 or \
    len(request.form["ville"]) > 75 or \
    len(request.form["codepostal"]) > 7 or \
    len(request.form["email"]) > 80:
        return redirect('/erreur')

@app.route("/erreur")
def erreur():
    return render_template('erreur.html')  # assuming you have an 'erreur.html' template

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
