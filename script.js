const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

const text =
[
    "AI Automation",
    "Smart Analytics",
    "Machine Learning",
    "Future Technology"
];

let textIndex = 0;
let charIndex = 0;

const typing =
document.querySelector(".typing");

function type(){

    if(charIndex < text[textIndex].length){

        typing.textContent +=
        text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        typing.textContent =
        text[textIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(erase,50);

    }else{

        textIndex++;

        if(textIndex >= text.length){

            textIndex = 0;
        }

        setTimeout(type,300);
    }

}

type();

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
    .style.width = progress + "%";

});

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach((item)=>{

        const top =
        item.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add("active");

        }

    });

});