var Quotes=[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },

    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein"
    },

    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },

    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },

    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:"― Bernard M. Baruch"
    },

    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
]
//Math.trunc(Math.random()*7+1)

var currentIndex=0;

function getQuotes()
{
    var randomIndex=Math.trunc(Math.random()*Quotes.length);
    while(randomIndex==currentIndex)
    {
        randomIndex=Math.trunc(Math.random()*Quotes.length);
    }
    currentIndex=randomIndex;

    document.getElementById("theQuote").innerHTML=Quotes[randomIndex].quote;
    document.getElementById("theAuthor").innerHTML=Quotes[randomIndex].author;
}