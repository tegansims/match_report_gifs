get=a=>(console.log(`search term: ${a}`),fetch(`https://api.giphy.com/v1/gifs/search?q=${a}&api_key=dc6zaTOxFJmzC&rating=g`).then(a=>a.json())),gifSearchTermArray=["no","hell no","no way jose","absolutely not"],randomGifSearchTerm=()=>gifSearchTermArray[Math.floor(Math.random()*gifSearchTermArray.length)],randomGifObject=()=>Math.floor(25*Math.random());let body=document.querySelector("body").remove();body=document.querySelector("html"),body.appendChild(document.createElement("body"));let container=document.createElement("div");body.append(container),container.setAttribute("style","text-align: center");let title=document.createElement("h1");title.innerText="Was it fair that I got voted DoD?",title.setAttribute("style","text-align: center"),title.setAttribute("style","font-family: Montserrat, Gibson, Roboto, Arial, Helvetica, sans-serif");let h4=document.createElement("h4");h4.innerText="click me!",h4.style.visibility="hidden";let magic8ball=document.createElement("img");magic8ball.className="magic8ball",magic8ball.src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png",magic8ball.setAttribute("style","height: 200px;");let div=document.createElement("div");container.append(title,magic8ball,h4,div);let gif=document.createElement("img");gif.className="gif",gif.setAttribute("style","height: 400px;"),div.append(gif);let style=document.createElement("style");document.head.appendChild(style),style.innerHTML="body {background-color: #B01943}h1 {font-size: 35px; color: #2299e2;} magic8ball {align: middle}",handleMouseOver=()=>{h4.style.visibility="visible",setTimeout(function(){h4.style.visibility="hidden"},2e3)},handlemagic8ballClick=()=>get(randomGifSearchTerm()).then(a=>gif.src=a.data[randomGifObject()].images.original.url),handleDoubleClick=()=>alert("No, that was a double click. Try again"),magic8ball.addEventListener("click",handlemagic8ballClick),magic8ball.addEventListener("dblclick",handleDoubleClick),magic8ball.addEventListener("mouseover",handleMouseOver);