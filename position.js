/*window.onload=getMyLocation;
function getMyLocation(){
	"use strict";
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation,displayError);
	}else{
		alert("opps,no support");
	}
}
function displayLocation(position){
	"use strict";
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("location");
	div.innerHTML="you are at latitude"+latitude+",longitude:"+longitude;
}
function displayError(error){
	var errorType = {
		0: "Unknow error",
		1: "permission denied by user",
		2: "position is not available",
		3: "time out"
	};
	var errorMessage =errorType[error.code];
	if(error.code==0||error.code==2){
		errorMessage = errorMessage+" "+error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML=errorMessage;
}*/