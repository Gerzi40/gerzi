// NavBar Fixed
function fixed(){
    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;
    
        if(window.pageYOffset > fixedNav){
            header.classList.add('navbar-fixed');
        }
        else{
            header.classList.remove('navbar-fixed');
        }
    }
}

// Hamburger Toggle
function Ham(){
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
    })
}

// Typing Hello
function hello(){
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
}




// panggil2
fixed();
Ham();
hello();