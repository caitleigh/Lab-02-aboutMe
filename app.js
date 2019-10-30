'use strict';

var visitorName = prompt("What is your name?")
console.log ('Visitors name' + visitorName)
alert('Welcome, ' + visitorName + '!')

var doYouWantToLearn = prompt("Do you want to learn about me?")
console.log('Do you want to learn about me ' + visitorName + '?');
if (doYouWantToLearn.toLowerCase () === 'yes') {
    console.log('Great! Lets go!');
} else {
    console.log('Too bad... you are going to!');
};

var caitsHometown = prompt("Is Cait from Gig Harbor")
if (caitsHometown.toLowerCase () === 'yes') {
    console.log('Correct!');
} else {
    console.log('Oops, not quite. She IS from Gig Harbor');
}

var catName = prompt("Is Cait's cats name Bruce?")
if (catName.toLowerCase () === 'yes') {
    console.log ('Yes! His name is burce and he is great!');
} else {
    console.log ('WRONG! His name is Bruce and he is amazing!');
}