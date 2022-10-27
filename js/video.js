var video = document.getElementById("player1");

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


function playVideo() {
	video.play();

}
function pauseVideo() {
	video.pause();

}
