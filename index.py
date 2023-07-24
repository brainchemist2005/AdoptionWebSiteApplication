<<<<<<< HEAD
# Copyright 2023 <BOUZ90340206 Bouargan Zakariae Jinane>
=======
# Copyright 2023 <BOUZ90340206 Bouargan Zakariae, Jinane>
>>>>>>> 0322c3dd963dce3a487ad3420e51283872616dde
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask
from flask import render_template
from flask import request
from flask import g
<<<<<<< HEAD
from database import Database
=======
from .database import Database
import random
>>>>>>> 0322c3dd963dce3a487ad3420e51283872616dde

app = Flask(_name_, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database

if __name__ == '__main__':
        app.run(debug=True)



@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()

@app.route('/')
def accueil():
        animaux=get_db().get_animaux()
        liste= random.choices(animaux, k=5)
        return render_template('accueil.html',liste) 

@app.route('/accueil', methods=['GET','POST'])
def form():
<<<<<<< HEAD
    # À remplacer par le contenu de votre choix.
    return render_template('adoption.html')
=======
    if request.method== 'POST':
        pass
    else:
        return render_template('adoption.html')

@app.route("/soumettre", methods=["POST"])
def soumettre():
    if len(request.form["nom"]) > 25:
        return redirect('/erreur')


    if len(request.form["description"]) > 500:
        return redirect('/erreur')
    
    if len(request.form["adresse"])> 75:
        return redirect('/erreur')
    
    if len(request.form["ville"])> 75:
        return redirect('/erreur')

    if len(request.form["codepostal"])> 7:
        return redirect('/erreur')
    
    if len(request.form["email"])> 80:
        return redirect('/erreur')

@app.errorhandler(404)
def page_not_found(e):
    #snip
    return render_template('404.html'), 404

if _name_ == '_main_':
        app.run(debug=True)
>>>>>>> 0322c3dd963dce3a487ad3420e51283872616dde
