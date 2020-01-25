/******************************************
Nermien barakat -- nermien@treenodes.com
A Random Quote Generator
******************************************/

//`quotes` array 
const quotes = [
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    year: 1980,
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    tags: ["motivating"]
  },
  {
    quote: "Your focus determines your reality.",
    source: "Qui-Gon Jinn",
    year: 1999,
    citation: "Star Wars: Episode I - The Phantom Menace",
    tags: ["inspiring", "motivating"]
  },
  {
    quote: "In my experience there is no such thing as luck.",
    source: "Obi-Wan Kenobi",
    year: 1977,
    citation: "Star Wars: Episode IV - A New Hope"
  },
  {
    quote: "The greatest teacher, failure is.",
    source: "Yoda",
    year: 2017,
    citation: "Star Wars: Episode VIII - The Last Jedi",
    tags: ["motivating", "inspiring", "funny"]
  },
  {
    quote: "When 900 years old, you reach… Look as good, you will not.",
    source: "Yoda",
    year: 1983,
    citation: "Star Wars: Episode VI - Return Of The Jedi",
    tags: ["funny", "impossible"]
  },
  {
    quote: "I've got a bad feeling about this.",
    source: "Han Solo"
  },
  {
    quote: "We must learn to live together as brothers, or perish together as fools.",
    source: "Martin Luther King, Jr."
  },
  {
    quote: "You don't learn to walk by following the rules. You learn by doing, and by falling over.",
    source: "Richard Branson"
  },
  {
    quote: "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
    source: "Henry Ford"
  },
  {
    quote: "He who is not everyday conquering some fear has not learned the secret of life.",
    source: "Ralph Waldo Emerson"
  },
  {
    quote: "This is the most simple and basic component of life: our struggles determine our successes.",
    source: "Mark Manson"
  },
  {
    quote: "There is no innovation and creativity without failure. Period.",
    source: "Brené Brown"
  },
  {
    quote: "If more information was the answer, then we’d all be billionaires with perfect abs.",
    source: "Derek Sivers"
  },
  {
    quote: "Luck is what happens when preparation meets opportunity.",
    source: "Seneca"
  },
  {
    quote: "We suffer more often in imagination than in reality.",
    source: "Seneca"
  },
  {
    quote: "If a man knows not to which port he sails, no wind is favorable.",
    source: "Seneca"
  },
  {
    quote: "You are the average of the five people you spend the most time with",
    source: "Jim Rohn"
  },
  {
    quote: "Discipline is the bridge between goals and accomplishment",
    source: "Jim Rohn"
  },
  {
    quote: "We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment",
    source: "Jim Rohn"
  },
  {
    quote: "Happiness is not having what you want. Happiness is wanting what you have",
    source: "Anonymous"
  },
  {
    quote: "Develop courage by doing courageous things",
    source: "Gary Tuerack"
  },
  {
    quote: "If you do not change direction, you may end up where you are heading",
    source: "Lao Tzu"
  },
  {
    quote: "Right feelings follow right actions",
    source: "Anonymous"
  },
  {
    quote: "Atheism is a non-prophet organization",
    source: "George Carlin",
    tag: "Fun"
  },
  {
    quote: "Hapiness is not something ready made. It comes from your own actions",
    source: "Dalai Lama"
  },
  {
    quote: "So may the New Year be a happy one to you, happy to many more whose happiness depends on you!",
    source: "Charles Dickens",
    citation: "The Chimes",
    year: "1844",
    tag: "Wise"
  },
  {
    quote: "Understanding is the first step to acceptance, and only with acceptance can there be recovery",
    source: "J.K. Rowling",
    citation: "Harry Potter",
    year: "2000",
    tag: "Acceptance"
  },
  {
    quote: "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers",
    source: "Patrick Rothfuss",
    citation: "The Wise Man's Fear",
    year: "2011",
    tag: "Fear"
  },
  {
    quote: "Laughter is poison to fear.",
    source: "George R.R. Martin",
    citation: "A Game of Thrones",
    year: "1996",
    tag: "Fear"
  },
  {
    quote: "very great developer you know got there by solving problems they were unqualified to solve until they actually did it",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016",
    tag: "Fun"
  }

];

//Get Random Quote from qouates array

const getRandomQuote = () => {
  const randomQuote = quotes[Math.floor((Math.random() * quotes.length))];
  console.log(randomQuote);
  return randomQuote;
}
//Change background color function 

const bgColorChanges = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

// Display quote 
const printQuote = () => {
  const randomQuote = getRandomQuote();
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    html += `<span class="js-tag ${randomQuote.tag}"> ( ${randomQuote.tag} )</span>`;
  }
  document.querySelector('.quote-box').innerHTML = '</p>' + html;
  bgColorChanges();

  // reset timer
  clearInterval(timer);
  timer = setInterval(printQuote, timout);

  return html;
}

/* Quote automatically refresh at regular intervals every 10 seconds*/
const timout = 10000;
let timer = setInterval(printQuote, timout);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
