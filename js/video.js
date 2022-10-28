var video = document.getElementById("player1");
var slider = document.getElementById("slider");
var volumeOutput = document.getElementById("volume");
video.muted = false; 
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

if(document.getElementById("play")) {
	console.log("play");
	document.getElementById("play").addEventListener("click", playVideo);
}

if(document.getElementById("pause")) { 
	console.log("pause");
	document.getElementById("pause").addEventListener("click", pauseVideo);
}

if(document.getElementById("mute")) { 
	console.log("mute");
	document.getElementById("mute").addEventListener("click", muteVideo);
}

if(document.getElementById("slower")) { 
	console.log("slow");
	document.getElementById("slower").addEventListener("click", slowVideo);
}

if(document.getElementById("faster")) { 
	console.log("fast");
	document.getElementById("faster").addEventListener("click", speedUp);
}

if(document.getElementById("skip")) { 
	console.log("skip");
	document.getElementById("skip").addEventListener("click", skipAhead);
}

if(document.getElementById("vintage")) { 
	console.log("old school");
	document.getElementById("vintage").addEventListener("click", oldSchool);
}

if(document.getElementById("orig")) { 
	console.log("original");
	document.getElementById("orig").addEventListener("click", originalStyle);
}



function playVideo() {
	volumeOutput.innerHTML = slider.value + "%";

	slider.oninput = function () {
		volumeOutput.innerHTML = this.value + "%";
		video.volume = this.value / 100; 
		console.log(video.volume);
	}
	video.play();
}
function pauseVideo() {
	video.pause();
}

function muteVideo() {
	if(video.muted === false) { //muted 
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else { //not muted
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
}

function slowVideo() {
	video.playbackRate -= (video.playbackRate * 0.10);
	console.log("Speed Down is: " + video.playbackRate);
}

function speedUp() {
	console.log("Speed Up is: " + video.playbackRate);

	video.playbackRate = video.playbackRate + (video.playbackRate * 0.111111111111111111);

}

function skipAhead() {
	currentTime = video.currentTime;
	fullVideo = video.duration; 
	console.log(video.duration);
	if((video.currentTime + 10) >= video.duration) {
		video.currentTime = 0;
		video.pause();  
	}
	else {
		video.currentTime += 10; 
		console.log(currentTime)
	}




}

function oldSchool() {
	video.classList.add("oldSchool");
}

function originalStyle() {
	video.classList.remove("oldSchool");

}