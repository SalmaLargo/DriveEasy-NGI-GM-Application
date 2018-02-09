
#Parti Modele

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier



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

	Train = pd.read_csv('fordTrain.csv');
	print(Train.shape);
	modele_=KNeighborsClassifier(n_neighbors=5);
	Train["IsAlert"] = Train["IsAlert"].astype('int64');
	Train["P1"] = Train["P1"].astype('int64');
	Train["P2"] = Train["P2"].astype('int64');
	Train["P3"] = Train["P3"].astype('int64');
	Train["P4"] = Train["P4"].astype('int64');
	Train["P6"] = Train["P6"].astype('int64');
	Train["P7"] = Train["P7"].astype('int64');
	Train["E4"] = Train["E4"].astype('int64');
	Train["E5"] = Train["E5"].astype('int64');
	Train["E6"] = Train["E6"].astype('int64');
	Train["E10"] = Train["E10"].astype('int64');
	Train["V1"] = Train["V1"].astype('int64');
	Train["V2"] = Train["V2"].astype('int64');
	Train["V3"] = Train["V3"].astype('int64');
	Train["V4"] = Train["V4"].astype('int64');
	Train["V11"] = Train["V11"].astype('int64');

	X = Train.drop(['IsAlert'], axis=1);
	Y = Train['IsAlert'].values;
	modele_. fit (X, Y);
	
	
	data = request.get_json()
	a = data['a']
	b = data['b']
	c = data['c']
	d = data['d']
	e = data['e']
	f = data['f']
	g = data['g']
	h = data['h']
	x = data['x']
	j = data['j']
	k = data['k']
	l = data['l']
	m = data['m']
	n = data['n']
	o = data['o']
	predict = {};
	for i in range(0,len(a)):
		donneesApredire = [[int(a[i]), int(b[i]), int(c[i]), int(d[i]), int(e[i]), int(f[i]),int(g[i]), int(h[i]), int(x[i]), int(j[i]), int(k[i]), int(l[i]),int(m[i]), int(n[i]), int(o[i])]];
		probaClasses = modele_.predict(donneesApredire);
		print("<======================>");
		print(probaClasses);
		predict.update({i: probaClasses.tolist()})

	
	print(predict);
 
	return (json.dumps(predict)) ;
	



if __name__ == '__main__':
    app.run(debug=True)