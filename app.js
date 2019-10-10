const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('You can only enter this site if you are over 20 years. How old are you?');

// check for age of user...
if(age >=20){
    // old enough, show website
    content.style.display = 'block';
    document.querySelector('#enter').className = 'granted';
} else {
    // not old enough, 
    content.style.display = 'none';
    document.querySelector('#enter').className = 'denied';
    // Simulate an HTTP redirect:
window.location.replace("http://www.google.com");
}

