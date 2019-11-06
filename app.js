// /* eslint-disable no-unused-vars */
// 'use strict';


// //Welcome message//
// var visitorName = prompt('What is your name?');
// console.log ('Visitors name' + visitorName);
// alert('Welcome, ' + visitorName + '!');

// var correctAnswers = 0;

// //Asking if they would like to learn about me//
// var doYouWantToLearn = prompt('Do you want to learn about me?').toLowerCase();
// console.log('Do you want to learn about me ' + visitorName + '?');
// console.log(doYouWantToLearn);

// if (doYouWantToLearn === 'yes' || doYouWantToLearn === 'y') {
//   console.log(doYouWantToLearn);
//   console.log('Great! Lets go!'+ doYouWantToLearn);
//   alert('Great! Lets go!');
// } else {
//   console.log('Too bad... you are going to learn today');
//   alert('Too bad... you are going to learn today');
// }

// //first question//
// function hometown() {
//   var caitsHometown = prompt('Is Cait from Gig Harbor').toLowerCase();
//   if (caitsHometown === 'yes' || caitsHometown === 'y') {
//   /*console.log('Correct!');*/
//     alert('Correct!');
//     correctAnswers ++;
//   } else {
//   /*console.log('Oops, not quite. She IS from Gig Harbor');*/
//     alert('Oops, not quite. She IS from Gig Harbor');
//   }
// }
// hometown();


// //second question//
// function bruce () {
//   var catName = prompt('Is Cait\'s cat\'s name Bruce?').toLowerCase();
//   if (catName === 'yes' || catName === 'y') {
//   /*console.log ('Yes! His name is Bruce and he is great!');*/
//     alert('Yes! His name is Bruce and he is great!');
//     correctAnswers ++;
//   } else {
//   /*console.log ('WRONG! His name is Bruce and he is amazing!');*/
//     alert('WRONG! His name is Bruce and he is amazing!');
//   }
// }

// bruce();

// //third question//
// function uniIdaho () {
//   var college = prompt ('Did Cait go to Idaho State?').toLowerCase();
//   if (college === 'no' || college === 'n') {
//   /* console.log('Yes ' + visitorName + '. You are so smart!');*/
//     alert('Yes ' + visitorName + '. You are so smart!');
//     correctAnswers ++;
//   } else {
//   /*console.log ('Come on ' + visitorName + '! You should know this! U of I is where it is at!');*/
//     alert('Come on ' + visitorName + '! You should know this! U of I is where it is at!');
//   }
// }
// uniIdaho();

// //fourth question//
// function track() {
//   var collegeSport = prompt ('Did Cait play soccer in college?').toLowerCase();
//   if (collegeSport === 'no' || collegeSport === 'n') {
//   /*console.log ('You are right + visitorName! She ran track!');*/
//     alert('You are right ' + visitorName + '! She ran track!');
//     correctAnswers ++;
//   } else {
//   /*console.log ('Not quite! She ran track in college')*/
//     alert('Not quite! She ran track in college');
//   }
// }

// track();

// //fifth question //
// function hobby() {
//   var favHobby = prompt ('Does Cait hate boating?').toLowerCase();
//   if (favHobby === 'no' || favHobby === 'n') {
//   /*console.log ('Correct! She is out on the water all summer long') */
//     alert('Correct! She is out on the water all summer long');
//     correctAnswers ++;
//   } else {
//   /*console.log ('So so wrong! She loves boating!') */
//     alert('SO so wrong! She LOVES boating!');
//   }
// }

// hobby();

// //Sixth question//

// function graduationYear() {
//   var maxCount = 5;
//   var number = parseInt(prompt ('What year did Cait graduate from U of I'));
//   while (maxCount > 0) {
//     if (maxCount === 1) {
//       alert('The correct answer is 2014');
//       break;
//     } else if (number > 2014) {
//       alert(number + ' is too high');
//       number = parseInt(prompt('Guess again'));
//       maxCount--;
//     } else if (number < 2014) {
//       alert(number + ' is too low');
//       number = parseInt(prompt('Guess again'));
//       maxCount--;
//     } else if (number === 2014) {
//       alert(number + ' is correct');
//       correctAnswers ++;
//       break;
//     }
//   }
// }
// graduationYear();


// //7th question //

// function tunes() {
//   var songArray = ['feel it', 'always waiting', 'high beams'];

//   var topSongs = prompt ('What is one of Caits top songs on Spotify? You have 6 attempts to guess the correct answer.').toLowerCase();

//   var songGuesses = 6;

//   while (songGuesses > 0) {
//     for (var i = 0; i < songArray.length; i++) {
//       console.log('Check guess: ' + topSongs);
//       if (topSongs === songArray[i]) {
//         console.log('Check again' + topSongs);
//         alert('You are correct, ' + visitorName + '!');
//         songGuesses = 0;
//         correctAnswers ++;
//         break;
//       }
//     }
//     songGuesses --;
//     if (songGuesses !== 0 && songGuesses !== -1) {
//       topSongs = prompt('Not quite. Guess again!');
//     } else if (songGuesses === 0) {
//       console.log('Sees no right answer');
//     }
//   }

//   alert('The correct answers were Feel It, Always Waiting, and High Beams');
// }

// tunes();

// //final message//
// alert('Thanks for playing! Cait sounds pretty cool, right ' + visitorName + '?' + ' You got ' + correctAnswers + ' right!');
// // console.log ('Thank you for playing you got correct answers right' , correctAnswers)
