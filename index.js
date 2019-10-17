//--api functions --- //
get=text=>{
    console.log(`search term: ${text}`)
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp=>resp.json())
}

// gif random generator functions --- //

gifSearchTermArray=['no', 'hell no', 'no way jose', 'absolutely not'] // gif array of all search terms

randomGifSearchTerm=()=>gifSearchTermArray[Math.floor(Math.random() * gifSearchTermArray.length)]; // provides a random search term

randomGifObject=()=>Math.floor(Math.random() * 25) // provides a random number, later called to select which gif from the json object returned is displayed

// remove body
let body=document.querySelector("body").remove();
body=document.querySelector("html")
body.appendChild(document.createElement("body"));

let container = document.createElement('div')
body.append(container)
container.setAttribute('style', "text-align: center")

//title question
let title=document.createElement("h1");
title.innerText="Was it fair that I got voted DoD?";
title.setAttribute("style", "text-align: center")
title.setAttribute("style", "font-family: Montserrat, Gibson, Roboto, Arial, Helvetica, sans-serif");
// click me 1
let h4=document.createElement('h4')
h4.innerText='click me!'
h4.style.visibility = 'hidden'
//magic 8 ball
let magic8ball=document.createElement('img');
magic8ball.className='magic8ball'
magic8ball.src='https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png';
magic8ball.setAttribute("style", "height: 200px;")
//div (for centering)
let div=document.createElement('div')
container.append(title, magic8ball, h4, div)

//gif placeholder
let gif = document.createElement('img');
gif.className='gif';
gif.setAttribute("style", "height: 400px;")
div.append(gif);

//styling
let style=document.createElement("style");
document.head.appendChild(style);
style.innerHTML="body {background-color: #B01943}h1 {font-size: 35px; color: #2299e2;} magic8ball {align: middle}";

// click me functions
handleMouseOver=()=>{
    h4.style.visibility='visible'
    setTimeout(function(){h4.style.visibility='hidden'}, 2000)
}

//event listeners
handlemagic8ballClick=()=>get(randomGifSearchTerm()).then(gifs => gif.src=gifs.data[randomGifObject()].images.original.url);
handleDoubleClick=()=>alert(("No, that was a double click. Try again"));
magic8ball.addEventListener('click', handlemagic8ballClick);
magic8ball.addEventListener('dblclick',  handleDoubleClick)
magic8ball.addEventListener('mouseover', handleMouseOver)