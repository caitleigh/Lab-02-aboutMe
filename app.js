'use strict';

var visitorName = prompt("What is your name?")
console.log ('Visitors name' + visitorName);
alert('Welcome, ' + visitorName + '!')

var doYouWantToLearn = prompt("Do you want to learn about me?")
console.log('Do you want to learn about me ' + visitorName + '?');
if (doYouWantToLearn.toLowerCase () === 'yes' || doYouWantToLearn.toLowerCase () === 'y') {
    /*console.log('Great! Lets go!');*/
    alert('Great! Lets go!')
} else {
    /*console.log('Too bad... you are going to learn today');*/
    alert('Too bad... you are going to learn today')
}

var caitsHometown = prompt("Is Cait from Gig Harbor")
if (caitsHometown.toLowerCase () === 'yes' || caitsHometown.toLowerCase () === 'y') {
    /*console.log('Correct!');*/
    alert('Correct!')
} else {
    /*console.log('Oops, not quite. She IS from Gig Harbor');*/
    alert('Oops, not quite. She IS from Gig Harbor')
}

var catName = prompt("Is Cait's cats name Bruce?")
if (catName.toLowerCase () === 'yes' || catName.toLowerCase () === 'y') {
    /*console.log ('Yes! His name is Bruce and he is great!');*/
    alert('Yes! His name is Bruce and he is great!')
} else {
    /*console.log ('WRONG! His name is Bruce and he is amazing!');*/
    alert('WRONG! His name is Bruce and he is amazing!')
}

var college = prompt ("Did Cait go to Idaho State?")
if (college.toLowerCase () === 'no' || college.toLowerCase () === 'n') {
   /* console.log('Yes ' + visitorName + '. You are so smart!');*/
   alert('Yes ' + visitorName + '. You are so smart!')
} else {
    /*console.log ('Common ' + visitorName + '! You should know this! U of I is where it is at!');*/
    alert('Common ' + visitorName + '! You should know this! U of I is where it is at!')
}

var collegeSport = prompt ("Did Cait play soccer in college?")
if (collegeSport.toLowerCase () === 'no' || collegeSport.toLowerCase () === 'n') {
    /*console.log ('You are right + visitorName! She ran track!');*/
    alert('You are right ' + visitorName + '! She ran track!')
} else {
    /*console.log ('Not quite! She ran track in college')*/
    alert('Not quite! She ran track in college')
}

var favHobbie = prompt ("Does Cait hate boating?")
if (favHobbie.toLowerCase () === 'no' || favHobbie.toLowerCase () === 'n') {
    /*console.log ('Correct! She is out on the water all summer long') */
    alert('Correct! She is out on the water all summer long')
} else {
    /*console.log ('So so wrong! She loves boating!') */
    alert('So so wrong! She loves boating!')
}

alert ('Thanks for playing! Cait sounds pretty cool, right ' + visitorName + '?')
