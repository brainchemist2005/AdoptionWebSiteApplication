#Copyright 2023<BOUZ90340206 Bouargan Zakariae, HATJ66620201 Hatim Jinane>
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
from flask import request, redirect
from flask import g
from .database import Database
import random

app = Flask(_name_, static_url_path="", static_folder="static")



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


@app.route('/accueil', methods=['GET','POST'])
def form():
    if request.method== 'POST':
        pass
    else:
        return render_template('adoption.html')
    



@app.route('/<id_animal>')
def animal_page(id_animal):
    animal = get_db().get_animal(id_animal)
    if(animal==None):
        return redirect(404)
    if(animal!=None):
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


@app.errorhandler(404)
def page_not_found(e):
    #snip
    return render_template('404.html'), 404

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
