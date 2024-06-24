import React from 'react'

const Elevan = () => {

const quotes = ["The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
"The purpose of our lives is to be happy. - Dalai Lama",
"Life is what happens when you're busy making other plans- John Lennon." ,
"Get busy living or get busy dying.- Stephen King" ,
"You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"The only impossible journey is the one you never begin. - Tony Robbins",
"Act as if what you do makes a difference. It does. - William James",
"Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
"You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
"It does not matter how slowly you go as long as you do not stop. - Confucius",
"The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
"Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
"You miss 100% of the shots you don’t take - Wayne Gretzky."];


const randomIndex = Math.floor(Math.random()*quotes.length);
const quote = quotes[randomIndex];

  return (
    
   <h1>{quote}</h1>
    
  )
}

export default Elevan