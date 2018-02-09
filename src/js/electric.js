// Your code goes here

//1. Récupération des données en temps réel

 console.log("Start");

var distance = [],
	Time = [],
	relative_time = [],
	elevation = [],
	speed = [],
	acceleration = [];
var signals = ['Time', 'distance', 'relative_time', 'elevation', 'speed', 'acceleration'];

var handle1 = gm.info.watchVehicleData(function(data){
	if(data.Time != undefined){
		Time.push(data.Time);
		console.log(Time);
	}
}, signals);

var handle2 = gm.info.watchVehicleData(function(data){
	if(data.distance != undefined){
	distance.push(data.distance);
	console.log(distance);	
	}
}, signals);

var handle3 = gm.info.watchVehicleData(function(data){
	if(data.relative_time != undefined){
	relative_time.push(data.relative_time);
	console.log(relative_time);
	}
}, signals);


var handle4 = gm.info.watchVehicleData(function(data){
	if(data.elevation != undefined){
	elevation.push(data.elevation);
	console.log(elevation);
	}
}, signals);


var handle5 = gm.info.watchVehicleData(function(data){
	if(data.speed != undefined){
	speed.push(data.speed);
	console.log(speed);
	}
}, signals);

var handle6 = gm.info.watchVehicleData(function(data){
	if(data.acceleration != undefined){
	acceleration.push(data.acceleration);
	console.log(acceleration);	
	}
}, signals);


setTimeout(function(){

	$.ajax({
		url: 'http://localhost:5000/api/pridect',
		type: "POST",
		data: JSON.stringify({a: Time, b: distance, c: relative_time, d: elevation, e:speed , f: acceleration}),
		contentType: "application/json; charset=utf-8"
		
	}).done(function( power_based ){
		console.log(power_based);

		//var predict = eval(msg);
		document.getElementById("res").innerHTML = "Predicted Elictrical Energy Consumption";
		document.getElementById("res").style.color = "green";
		
		//document.getElementById("mondiv").innerHTML = msg;
		power_based = power_based.replace("{","");
		power_based = power_based.replace("}","");
		
		var tableau=power_based.split(",");
		for (i=0; i<tableau.length; i++){
			var div = document.createElement('div');
			//div.appendChild(document.createTextNode('Contenu généré par le DOM'));
			div.className = "predict";
			div.innerHTML = tableau[i]+" KW ";
			//document.getElementById('test').innerHTML = msg;
			document.getElementById("mondiv").appendChild(div);
		}

	});
}, 100000);


  
// 1. recuperer les donnee apartir d'API gm (javascript|client)
// 2. cree une service web (REST => http) python et le lier avec le traitement (pythone|server)
// 3. envoyer une requete avec ajax (JavaScript|client) => recuprer resulta 



