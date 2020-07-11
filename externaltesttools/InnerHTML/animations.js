// animation of front page text
const hoverTextSplit = hoverTxt.split("");
const el = document.getElementById('frontPageHoverText');
(function animate() {
let running = setTimeout(animate, 18);
hoverTextSplit.length > 0 ? el.innerHTML += hoverTextSplit.shift() : clearTimeout(running); 
})();

// animation of title
const mainPageTitleElement = document.querySelector(".headerPage");
const mainPageTitleSplit=mainPageTitle.split("");
mainPageTitleElement.textContent="";
for (let i = 0; i < mainPageTitleSplit.length; i++){
    mainPageTitleElement.innerHTML += "<animationTitle>" + mainPageTitleSplit[i] + "</animationTitle>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){

    const headerPageAnimation = mainPageTitleElement.querySelectorAll('animationTitle')[char];
    headerPageAnimation.classList.add('fade');
    char++
    if(char===mainPageTitleSplit.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
}
