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

@app.route('/', methods=['GET','POST'])
def form():
    return render_template('adoption.html')


@app.route('/animal/<id_animal>')
def animal_page(id_animal):
    animal = get_db().get_animal(id_animal)
    if animal:return render_template('resultat_recherche.html', animal=animal)
    elif animal is None: return redirect(404)







@app.route("/soumettre", methods=["POST"])
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
    
    elif not request.form["description"].strip() or not request.form["nom"]:
          return redirect("/erreur")
    
    elif not request.form["adresse"].strip() or not request.form["nom"]:
            return redirect("/erreur")
    
    elif not request.form["ville"].strip() or not request.form["nom"]:
          return redirect("/erreur")
    
    elif not request.form["codepostal"].strip() or not request.form["nom"]:
            return redirect("/erreur")
    
    elif not request.form["email"].strip() or not request.form["nom"]:
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

    
     
@app.route("/erreur")
def erreur():
    return render_template('erreur.html') 

@app.route('/accueil')
def accueil():
    
    liste=random.choices(get_db().get_animaux(), k=5)
    return render_template('accueil.html', liste=liste)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)


