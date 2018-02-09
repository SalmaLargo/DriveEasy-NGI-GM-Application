 
var ctx1 = document.getElementById("donut");
var myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c"
      ],
        borderColor: [
          "#C0C0C0",
          "#C0C0C0"
        ],
      data: [30, 70]
    }]
  },
  options: {
    cutoutPercentage: 60,
    rotation: 1*Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
    circumference: 1*Math.PI
  }
});


var ctx2 = document.getElementById("donut2");
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [40, 60],
        backgroundColor: [
        "#2ecc71",
        "#e74c3c"
        ],
        borderColor: [
          "#C0C0C0",
          "#C0C0C0"
        ]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
    circumference: 1*Math.PI
  }
});

var ctx3 = document.getElementById("donut3");
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c"
      ],
        borderColor: [
          "#C0C0C0",
          "#C0C0C0"
        ],
      data: [30, 70]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
    circumference: 1*Math.PI 
  }
});

var myDoughnutChart = new Chart(ctx).Doughnut(data,option);
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

$(function () {
    $('.min-chart#chart-sales').easyPieChart({
        barColor: "#4caf50",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});



/*
function showSpeed(data) {
	console.log('got vehicle data: ', data);
  var speed = data.average_speed;
  console.log(speed);
  if (speed !== undefined) {
    var speedText = document.getElementById('speed');
    speedText.innerHTML = speed;
  }
};

gm.info.watchVehicleData(showSpeed, null,['average_speed']);
*/
function processData(data) {
  console.log(data);
  var brakeFluidIndicator = data.average_speed;
  if (brakeFluidIndicator !== undefined) {
    var brakeFluidIndicatorValue = document.getElementById('temp');
    brakeFluidIndicator.value = brakeFluidIndicatorValue;
  }
};

gm.info.getVehicleData(processData, ['average_speed']);

function temperature(data){
	var speed=data.aux_heat_temp;
   	if (speed !== undefined) {
    var speedText = document.getElementById('temp');
    speedText.innerHTML =speed;
	}
}
gm.info.watchVehicleData(temperature, ['aux_heat_temp'])
//gm.info.watchVehicleData(temperature, ['aux_heat_temp']);


function success(data){
  speed=data.average_speed;
  if(speed >=120)
  {
    var id1 = gm.voice.startTTS(success,'Slow down the speed for your safety');
    
  }
}
gm.info.watchVehicleData(success, ['average_speed'])

function seatbelt(data){
    var sbelt=data.driver_seatbelt_fastened;
  if(sbelt==0 && speed >= 30){
    var id = gm.voice.startTTS(seatbelt, 'deer smta alhmar');
    var x = document.getElementById("A");
    x.innerHTML = "";
    }
}
gm.info.watchVehicleData(seatbelt,['driver_seatbelt_fastened']);

function driver_door(data){
    var door=data.driver_door_open;
    if(door==1){
    var id2 = gm.voice.startTTS(driver_door, 'the driver door is open please ');
  }
}
gm.info.watchVehicleData(driver_door, ['driver_door_open'])

function passenger_door(data){
    var door=data.passenger_door_open;
    if(door==1){
    var d2 = gm.voice.startTTS(passenger_door, 'the passenger door is open please ');
  }
}

gm.info.watchVehicleData(passenger_door, ['passenger_door_open'])

function rearleft_door(data){
    var door=data.rearleft_door_open;
    if(door==1){
    var d3= gm.voice.startTTS(rearleft_door, 'the rearleft door is open please ');
  }
}
gm.info.watchVehicleData(rearleft_door, ['rearleft_door_open'])

function rearright_door(data){
    var door=data.rearright_door_open;
    if(door==1){
    var d4 = gm.voice.startTTS(rearright_door, 'the rearright door is open please ');
  }
}
gm.info.watchVehicleData(rearright_door, ['rearright_door_open'])