
    // list of quotes, array of strings. this includes the quote text and author.
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson"
  ];
  
  // Grab references to the HTML elements
  const button = document.getElementById("quoteButton");
  const display = document.getElementById("quoteDisplay");
  
  // Function to pick a random quote and display it
  function showRandomQuote() {
    // Generate a random index from 0 to quotes.length-1
    const randomIndex = Math.floor(Math.random() * quotes.length);  //&#8203;:contentReference[oaicite:60]{index=60}
    const randomQuote = quotes[randomIndex];
    // Display the quote in the page
    display.textContent = randomQuote;
  }
  
  // this is an event listener to the button to call showRandomQuote() on each click
  button.addEventListener("click", showRandomQuote);
  

