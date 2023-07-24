# Copyright 2023 <Votre nom et code permanent>
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

from flask import Flask, request, redirect, url_for
from flask import render_template
from flask import g
from .database import Database
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


@app.route('/')
def accueil():
        animaux=get_db().get_animaux()
        liste= random.choices(animaux, k=5)
        return render_template('accueil.html',liste)  

@app.route('/accueil')
def form():
    # À remplacer par le contenu de votre choix.
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
    

        
   


@app.route('/erreur')
def erreur():
    return render_template('erreur.html')





