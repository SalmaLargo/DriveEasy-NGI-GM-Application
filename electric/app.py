
#Parti Modele
import numpy as np
import pandas as pd
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

	Train = pd.read_csv('data.csv');
	print(Train.shape);
	knn = KNeighborsClassifier(n_neighbors=11);
	Train["power_based"] = Train["power_based"].astype('int64');
	Train["Time"] = Train["Time"].astype('int64');
	Train["relative_time"] = Train["relative_time"].astype('int64');
	Train["elevation"] = Train["elevation"].astype('int64');
	Train["speed"] = Train["speed"].astype('int64');
	Train["acceleration"] = Train["acceleration"].astype('int64');
	Train["distance"] = Train["distance"].astype('int64');
	X = Train.drop(['power_based'], axis=1);
	Y = Train['power_based'].values;
	knn. fit (X, Y);
	
	
	data = request.get_json()
	a = data['a']
	b = data['b']
	c = data['c']
	d = data['d']
	e = data['e']
	f = data['f']
	predict = {};
	for i in range(0,len(a)):
		donneesApredire = [[int(a[i]),int(b[i]), int(c[i]), int(d[i]), int(e[i]),int(f[i])]];
		probaClasses = knn. predict(donneesApredire);
		print("<======================>");
		print(probaClasses);
		predict.update({i: probaClasses.tolist()})

	
	print(predict);
 
	return (json.dumps(predict)) ;
	



if __name__ == '__main__':
    app.run(debug=True)