// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *      
 *      Counter1 will reset its count everytime it is invoked. While      counter 2 will continue its count everytime the function is invoked.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *      Counter1 uses closure because it reaches outside the scope of the function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *      Counter1 would best be used in a situation where you wanted to run a set of counts and then reset the count the next time you invoked the function. WHile counter2 would best be used when you want to keep a grand count of things everytime you invoke the function again.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
  const points = Math.floor(Math.random() * 3);
  return points;

}
console.log(inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){

  let home = 0
  let away = 0
  while (num > 0){
    home = home + callback()
    away = away + callback()
    num--
  }
  let results = {
    'Home': home,
    'Away': away
  }
  return results
    }
  
  
  console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback) {
  let away = callback()
  let home = callback()
  let currentInning = {
    'away': away,
    'home': home
  }
  return currentInning
}

function scoreboard(callback1, callback2, num ) {
  let awayScore = 0
  let homeScore = 0
  for (let i = 0; i < num; i++){
   let currentInning = callback1(callback2)
   console.log(`Inning ${i+1}: ${currentInning.away} - ${currentInning.home}`)
   awayScore = awayScore + currentInning.away
   homeScore = homeScore + currentInning.home
  }
  console.log(`Final Score: ${awayScore} - ${homeScore}`)
}

scoreboard(getInningScore, inning, 9)
