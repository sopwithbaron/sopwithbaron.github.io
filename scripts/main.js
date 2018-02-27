var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cheese-slice.jpg') {
        myImage.setAttribute('src', 'images/cheese-platter.jpg');
    } else {
       myImage.setAttribute('src','images/cheese-slice.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cheese Me Daddy, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem(name);
    myHeading.textContent = 'Cheese Me Daddy, ' + storedName;
}
    
myButton.onclick = function () {
    setUserName();
}
