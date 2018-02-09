
#Parti Modele

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier



#Parti web service 
from flask import Flask
from flask.ext.cors import CORS, cross_origin
from flask import request

import sys, json
app = Flask(__name__)

@app.route("/api/pridect", methods=["POST"])
def hello():
	#a = request.form['don'];
	#data = request.get_data()

	Train = pd.read_csv('fuel.csv');
	print(Train.shape);
	modele_=clf = RandomForestClassifier(max_depth=5, random_state=0);
	Train["mpg"] = Train["mpg"].astype('int64');
	Train["cyls"] = Train["cyls"].astype('int64');
	Train["displacement"] = Train["displacement"].astype('int64');
	Train["hp"] = Train["hp"].astype('int64');
	Train["weight"] = Train["weight"].astype('int64');
	Train["acc"] = Train["acc"].astype('int64');
	Train["year"] = Train["year"].astype('int64');
	Train["origin"] = Train["origin"].astype('int64');
	
	X = Train.drop(['mpg'], axis=1);
	Y = Train['mpg'].values;
	modele_. fit (X, Y);
	
	
	data = request.get_json()
	a = data['a']
	b = data['b']
	c = data['c']
	d = data['d']
	e = data['e']
	f = data['f']
	g = data['g']

	predict = {};
	for i in range(0,len(a)):
		donneesApredire = [[int(a[i]), int(b[i]),int(c[i]), int(d[i]), int(e[i]), int(f[i]),int(g[i])]];
		probaClasses = modele_.predict(donneesApredire);
		print("<======================>");
		print(probaClasses);
		predict.update({i: probaClasses.tolist()})

	
	print(predict);
 
	return (json.dumps(predict)) ;
	



if __name__ == '__main__':
    app.run(debug=True)