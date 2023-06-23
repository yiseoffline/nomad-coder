const quotes = [
    {
        quote:"True life is lived when tiny changes occur.",
        author:"Leo Tolstoy"
    },
    {
        quote:"He who has never hoped can never despair.",
        author:"George Bernard Shaw"
    },
    {
        quote:"The higher the buildings, the lower the morals.",
        author:"Noel Coward"
    },
    {
        quote:"If a free society cannot help the many who are poor, it cannot save the few who are rich.",
        author:"John F. Kennedy"
    },
    {
        quote:"It takes a long time to bring excellence to maturity.",
        author:"Publilius Syrus"
    },
    {
        quote:"A person is never happy except at the price of some ignorance.",
        author:"Anatole France"
    },
    {
        quote:"If you tell the truth you don't have to remember anything.",
        author:"Mark Twain"
    },
    {
        quote:"Laughter is the tonic, the relief, the surcease for pain.",
        author:"Charlie Chaplin"
    },
    {
        quote:"When anger rises, think of the consequences.",
        author:"Confucius"
    },
    {
        quote:"Energy is eternal delight.",
        author:"William Blake"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;