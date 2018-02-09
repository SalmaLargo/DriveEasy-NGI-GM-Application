

 console.log("Start");

var P1 = [],
	P2 = [],
	P3 = [],
	P4 = [],
	P6 = [],
	P7 = [],
	E4 = [],
	E5 = [],
	E6 = [],
	E10 =[],
	V1 = [],
	V2 = [],
	V3 = [],
	V4 = [],
	V11 =[];
	
var signals = ['P1', 'P2', 'P3', 'P4','P6', 'P7', 'E4', 'E5', 'E6','E10','V1', 'V2', 'V3', 'V4','V11'];

var handle1 = gm.info.watchVehicleData(function(data){
	if(data.P1 != undefined){
		P1.push(data.P1);
		console.log(P1);
	}
}, signals);


var handle2 = gm.info.watchVehicleData(function(data){
	if(data.P2 != undefined){
	P2.push(data.P2);
	console.log(P2);	
	}
}, signals);


var handle3 = gm.info.watchVehicleData(function(data){
	if(data.P3 != undefined){
	P3.push(data.P3);
	console.log(P3);
	}
}, signals);


var handle4 = gm.info.watchVehicleData(function(data){
	if(data.P4 != undefined){
	P4.push(data.P4);
	console.log(P4);
	}
}, signals);


var handle5 = gm.info.watchVehicleData(function(data){
	if(data.P6 != undefined){
	P6.push(data.P6);
	console.log(P6);
	}
}, signals);


var handle6 = gm.info.watchVehicleData(function(data){
	if(data.P7 != undefined){
	P7.push(data.P7);
	console.log(P7);	
	}
}, signals);


var handle7 = gm.info.watchVehicleData(function(data){
	if(data.E4 != undefined){
	E4.push(data.E4);
	console.log(E4);	
	}
}, signals);


var handle8 = gm.info.watchVehicleData(function(data){
	if(data.E5 != undefined){
	E5.push(data.E5);
	console.log(E5);	
	}
}, signals);



var handle9 = gm.info.watchVehicleData(function(data){
	if(data.E6 != undefined){
	E6.push(data.E6);
	console.log(E6);	
	}
}, signals);


var handle10 = gm.info.watchVehicleData(function(data){
	if(data.E10 != undefined){
	E10.push(data.E10);
	console.log(E10);	
	}
}, signals);


var handle11 = gm.info.watchVehicleData(function(data){
	if(data.V1 != undefined){
	V1.push(data.V1);
	console.log(V1);	
	}
}, signals);


var handle12 = gm.info.watchVehicleData(function(data){
	if(data.V2 != undefined){
	V2.push(data.V2);
	console.log(V2);	
	}
}, signals);


var handle13 = gm.info.watchVehicleData(function(data){
	if(data.V3 != undefined){
	V3.push(data.V3);
	console.log(V3);	
	}
}, signals);


var handle14 = gm.info.watchVehicleData(function(data){
	if(data.V4 != undefined){
	V4.push(data.V4);
	console.log(V4);	
	}
}, signals);


var handle15 = gm.info.watchVehicleData(function(data){
	if(data.V11 != undefined){
	V11.push(data.V11);
	console.log(V11);	
	}
}, signals);


setTimeout(function(){
	$.ajax({
		url: 'http://localhost:5000/api/pridect',
		type: "POST",
		data: JSON.stringify({a: P1, b: P2, c: P3, d: P4, e:P6 , f: P7, g: E4, h: E5, x: E6, j:E10 , k: V1, l: V2, m: V3, n: V4, o: V11}),
		contentType: "application/json; charset=utf-8"
		
	}).done(function( IsAlert ){
		console.log(IsAlert);

		//var predict = eval(msg);
		document.getElementById("res").innerHTML = "Result";
		document.getElementById("res").style.color = "green";
		
		//document.getElementById("mondiv").innerHTML = msg;
		IsAlert = IsAlert.replace("{","");
		IsAlert = IsAlert.replace("}","");
		
		var tableau=IsAlert.split(",");
		for (i=0; i<tableau.length; i++){
			var div = document.createElement('div');
			//div.appendChild(document.createTextNode('Contenu généré par le DOM'));
			div.className = "predict";
			if(tableau[i] == 1){
			div.innerHTML = "Keep on driving !";
				var id2 = gm.voice.startTTS(driver_door, 'Keep on driving !');
			document.getElementById("mondiv").appendChild(div);
			}
			else{
				div.innerHTML = "Pay attention please you arer not alert  !";
				var id2 = gm.voice.startTTS(driver_door, 'Pay attention please you arer not alert  !');
				document.getElementById("mondiv").appendChild(div);
			}
		}

	});
}, 100000);


  
// 1. recuperer les donnee apartir d'API gm (javascript|client)
// 2. cree une service web (REST => http) python et le lier avec le traitement (pythone|server)
// 3. envoyer une requete avec ajax (JavaScript|client) => recuprer resulta 



