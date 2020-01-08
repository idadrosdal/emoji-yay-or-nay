console.log("Running script...");
let myImage = document.getElementById("header-emoji");
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	console.log('Image on click: ' + mySrc);
	if (mySrc === 'images/cover.png') {
		myImage.setAttribute('src', 'images/cover2.png');
	} else {
		myImage.setAttribute('src', 'images/cover.png');
	}
}
