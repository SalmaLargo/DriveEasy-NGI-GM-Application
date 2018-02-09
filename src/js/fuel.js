// Your code goes here

//1. Récupération des données en temps réel

 console.log("Start");

var cyls = [],
	displacement = [],
	hp = [],
	weight = [],
	acc = [],
	year = []
	origin = [];
var signals = ['cyls', 'displacement', 'hp', 'weight', 'acc', 'year','origin'];

var handle1 = gm.info.watchVehicleData(function(data){
	if(data.cyls != undefined){
		cyls.push(data.cyls);
		console.log(cyls);
	}
}, signals);

var handle2 = gm.info.watchVehicleData(function(data){
	if(data.displacement != undefined){
	displacement.push(data.displacement);
	console.log(displacement);	
	}
}, signals);

var handle3 = gm.info.watchVehicleData(function(data){
	if(data.hp != undefined){
	hp.push(data.hp);
	console.log(hp);
	}
}, signals);


var handle4 = gm.info.watchVehicleData(function(data){
	if(data.weight != undefined){
	weight.push(data.weight);
	console.log(weight);
	}
}, signals);


var handle5 = gm.info.watchVehicleData(function(data){
	if(data.acc != undefined){
	acc.push(data.acc);
	console.log(acc);
	}
}, signals);


var handle6 = gm.info.watchVehicleData(function(data){
	if(data.year != undefined){
	year.push(data.year);
	console.log(year);	
	}
}, signals);


var handle7 = gm.info.watchVehicleData(function(data){
	if(data.origin != undefined){
	origin.push(data.origin);
	console.log(origin);	
	}
}, signals);


setTimeout(function(){

	$.ajax({
		url: 'http://localhost:5000/api/pridect',
		type: "POST",
		data: JSON.stringify({a: cyls, b: displacement, c: hp, d: weight, e:acc , f: year , g:origin}),
		contentType: "application/json; charset=utf-8"
		
	}).done(function( mpg ){
		console.log(mpg);

		//var predict = eval(msg);
		document.getElementById("res").innerHTML = "Predicted Fuel Consumption";
		document.getElementById("res").style.color = "green";
		
		//document.getElementById("mondiv").innerHTML = msg;
		mpg = mpg.replace("{","");
		mpg = mpg.replace("}","");
		
		var tableau=mpg.split(",");
		for (i=0; i<tableau.length; i++){
			var div = document.createElement('div');
			//div.appendChild(document.createTextNode('Contenu généré par le DOM'));
			div.className = "predict";
			div.innerHTML = tableau[i] +" Litres ";
			//document.getElementById('test').innerHTML = msg;
			document.getElementById("mondiv").appendChild(div);
		}

	});
}, 100000);


  
// 1. recuperer les donnee apartir d'API gm (javascript|client)
// 2. cree une service web (REST => http) python et le lier avec le traitement (pythone|server)
// 3. envoyer une requete avec ajax (JavaScript|client) => recuprer resulta 



