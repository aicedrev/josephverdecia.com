let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/crypto.png') {
		myImage.setAttribute('src', 'images/crypto1.jpg');
	} else {
		myImage.setAttribute('src', 'images/crypto.png');
	}
}

let myButton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myheading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
	setUserName();
}