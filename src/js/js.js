$(function(){

gm.info.watchVehicleData(showfuel, ['average_speed']);
gm.info.getVehicleData(showfuel, ['average_speed']);

});



 function showfuel(data) {
	var speed = data.average_speed;
	var angle = ((speed * 160) /511)+10 ;
 
    $(".clock__seconds").css({
        transform : 'rotate('+angle+'deg)'  
    })
   
 }
