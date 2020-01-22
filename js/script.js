/******************************************
Nermien barakat
Click the link below to view on CodePen
https://codepen.io/NermienBarakat/full/wvBRZxj
project 1 - A Random Quote Generator
// I am going after Exceeds Expectations. Thank you 
******************************************/

//`quotes` array 
const quotes = [
  {
    quote: "Atheism is a non-prophet organization.",
    source: "George Carlin",
    tag: "Fun"
  },
  {
    quote: "Hapiness is not something ready made. It comes from your own actions.",
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
    quote: "Understanding is the first step to acceptance, and only with acceptance can there be recovery.",
    source: "J.K. Rowling",
    citation: "Harry Potter",
    year: "2000",
    tag: "Acceptance"
  },
  {
    quote: "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.",
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
