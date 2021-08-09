
//Reviews
let randomQuotes = localQuotes;
let oneQuote = [];

var reviewBtn = document.querySelector('.reviewBtn');

function showReview(){
     var quote = document.querySelector('.quote span');
     var quoteAuthor = document.querySelector('.quote .reviewAuthor');
     oneQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
     quote.innerHTML = oneQuote.quote;
     quoteAuthor.innerHTML = oneQuote.author;
}

showReview();

reviewBtn.addEventListener('click', showReview);

// if checkbox is checked and main is clicked 

var navigation = document.querySelector('.navigation');
var main = document.querySelector('.main');
function hideNavigation(){
     if(document.querySelector('.checkbox').checked){
          document.querySelector('.checkbox').checked = false;
     }
}
hideNavigation();
main.addEventListener('click',hideNavigation);

// end of if checkbox is checked