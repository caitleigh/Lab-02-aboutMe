'use strict';

//Welcome message//
var visitorName = prompt('What is your name?');
console.log ('Visitors name' + visitorName);
alert('Welcome, ' + visitorName + '!');

//Asking if they would like to learn about me//
var doYouWantToLearn = prompt('Do you want to learn about me?').toLowerCase;
console.log('Do you want to learn about me ' + visitorName + '?');
if (doYouWantToLearn === 'yes' || doYouWantToLearn === 'y') {
  /*console.log('Great! Lets go!');*/
  alert('Great! Lets go!');
} else {
  /*console.log('Too bad... you are going to learn today');*/
  alert('Too bad... you are going to learn today');
}

//first question//
var caitsHometown = prompt('Is Cait from Gig Harbor').toLowerCase;
if (caitsHometown === 'yes' || caitsHometown === 'y') {
  /*console.log('Correct!');*/
  alert('Correct!');
} else {
  /*console.log('Oops, not quite. She IS from Gig Harbor');*/
  alert('Oops, not quite. She IS from Gig Harbor');
}

//second question//
var catName = prompt('Is Cait\'s cats name Bruce?').toLowerCase;
if (catName === 'yes' || catName === 'y') {
  /*console.log ('Yes! His name is Bruce and he is great!');*/
  alert('Yes! His name is Bruce and he is great!');
} else {
  /*console.log ('WRONG! His name is Bruce and he is amazing!');*/
  alert('WRONG! His name is Bruce and he is amazing!');
}

//third qeustion//
var college = prompt ('Did Cait go to Idaho State?').toLowerCase;
if (college === 'no' || college === 'n') {
  /* console.log('Yes ' + visitorName + '. You are so smart!');*/
  alert('Yes ' + visitorName + '. You are so smart!');
} else {
  /*console.log ('Common ' + visitorName + '! You should know this! U of I is where it is at!');*/
  alert('Common ' + visitorName + '! You should know this! U of I is where it is at!');
}

//fourth question// 
var collegeSport = prompt ('Did Cait play soccer in college?').toLowerCase;
if (collegeSport === 'no' || collegeSport === 'n') {
  /*console.log ('You are right + visitorName! She ran track!');*/
  alert('You are right ' + visitorName + '! She ran track!');
} else {
  /*console.log ('Not quite! She ran track in college')*/
  alert('Not quite! She ran track in college');
}

//fifth question //
var favHobbie = prompt ('Does Cait hate boating?').toLowerCase;
if (favHobbie === 'no' || favHobbie === 'n') {
  /*console.log ('Correct! She is out on the water all summer long') */
  alert('Correct! She is out on the water all summer long');
} else {
  /*console.log ('So so wrong! She loves boating!') */
  alert('So so wrong! She loves boating!');
}

//final message//
alert ('Thanks for playing! Cait sounds pretty cool, right ' + visitorName + '?');
