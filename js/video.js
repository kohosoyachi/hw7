var video = document.getElementById("player1");
var slider = document.getElementById("slider");
var volumeOutput = document.getElementById("volume");
video.muted = false; 
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

if(document.getElementById("play")) {
	document.getElementById("play").addEventListener("click", function() {
		console.log("play");
		volumeOutput.innerHTML = slider.value + "%";

		slider.oninput = function () {
			volumeOutput.innerHTML = this.value + "%";
			video.volume = this.value / 100; 
		}
		video.play();
	});
}

if(document.getElementById("pause")) { 
	document.getElementById("pause").addEventListener("click", function() {
		console.log("pause");

		video.pause();
	});
}


if(document.getElementById("mute")) { 
	document.getElementById("mute").addEventListener("click", function() {
		if(video.muted === false) { //muted 
			console.log("muted");
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute";
		}
		else { //not muted
			console.log("not muted");
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
		}
	});
}


if(document.getElementById("slower")) { 
	document.getElementById("slower").addEventListener("click", function() {
		video.playbackRate -= (video.playbackRate * 0.10);
		console.log("Speed Down is: " + video.playbackRate);

	});
}

if(document.getElementById("faster")) { 
	document.getElementById("faster").addEventListener("click", function() {
		video.playbackRate += (video.playbackRate * 0.111111111111111111);
		console.log("Speed Up is: " + video.playbackRate);
	});
}

if(document.getElementById("skip")) { 
	document.getElementById("skip").addEventListener("click", function() {
		video.currentTime += 10; 		
		if(video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("Current Time: " + video.currentTime);
	});
}

if(document.getElementById("vintage")) { 
	document.getElementById("vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});
}

if(document.getElementById("orig")) { 
	document.getElementById("orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");

	});
}

