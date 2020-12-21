//beep.com
console.log("User! you are in a part of the website that you are not alloud to use unless you are a dev");

document.getElementById("btn1").onclick = function() {
	console.log("error 001 alreday on page!"	);
}
document.getElementById("btn2").onclick = function() {
	document.getElementById('layer2').style.display='block';
		document.getElementById('layer1').style.display = 'none';
		alert('this site is not ready sorry!');
}
document.getElementById("btn3").onclick = function() {
	console.log("error 002 not avalible yet!");
}