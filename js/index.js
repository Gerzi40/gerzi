const text = "⌨Hello!";

function TypingHello(){
    const typingtext = document.getElementById('hello');
    let index = 0;
    const interval = setInterval(()=> {
        typingtext.textContent = text.slice(0, index+1);
        index++;
        if(index > text.length){
            clearInterval(interval)
            setTimeout(()=> {
                index = 0;
                TypingHello();
            }, 1000)
        }
    }, 350)
}

TypingHello();