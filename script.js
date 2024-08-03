console.log("welcome");
let compMove;
let userMove;

let lasan  = document.querySelector(".lasan")
let mainSorebord = document.querySelector(".computer")

let ResultImg = document.querySelector(".computer")

let button =Array.from(document.getElementsByTagName("button"))

let rock  = document.querySelector("#Rock")
let paper  = document.querySelector("#Paper")
let scissors = document.querySelector("#Scissors")

let yourImg = document.querySelector("#yourImg")
let compImg = document.querySelector("#compImg")

let Result = document.querySelector("#Result")
let yourScore = document.querySelector("#yourScore")
let compScore = document.querySelector("#compScore")
let c=0;
let s=0;


// computer moves
function compdeclaration(){
    let compValue = Math.random()
    console.log(compValue)
    if(compValue>=0 && compValue<=1/3){
        compMove = 'rock'        
        console.log(compMove)
        compImg.src = "./img/rock.jpg"
    }
    else if(compValue>=1/3 && compValue<=2/3){
        compMove = 'paper'        
        console.log(compMove)
        compImg.src = "./img/paper.png"
    }
    else if(compValue>=2/3 && compValue<=1){
        compMove = 'scissors'       
        console.log(compMove)
        compImg.src = "./img/scissors.jpg"
    }
}
compdeclaration()


// click event on all chances
rock.addEventListener("click",()=>{
    console.log(rock.value)
    ResultImg.style.bottom = 20+"px"
    yourImg.src = "./img/rock.jpg"
    userMove = 'rock'
    compdeclaration()
    set()
    
    
    if(userMove == "rock" && compMove=="rock"){
        Result.textContent ="Tie"
        
        finalResult()
    }else if(userMove == "rock" && compMove=="paper"){
        Result.textContent ="Computer wins"
        c=c+10;
        scoreEffect()
        compScore.innerHTML = `${c}`;
        
        finalResult()
    }else if(userMove == "rock" && compMove=="scissors"){
        Result.textContent ="You win!!"
        s=s+10;
        scoreEffect()
        yourScore.innerHTML = `${s}`;
        
        finalResult()
    }
    
})
paper.addEventListener("click",()=>{
    console.log(paper.value)
    ResultImg.style.bottom = 20+"px"
    yourImg.src = "./img/paper.png"
    userMove = 'paper'
    compdeclaration()
    set()
    
    if(userMove == "paper" && compMove=="rock"){
        Result.textContent ="You win!!"
        s=s+10;
        scoreEffect()
        yourScore.innerHTML = `${s}`;
        
        finalResult()
    }else if(userMove == "paper" && compMove=="paper"){
        Result.textContent ="Tie"
        
        finalResult()
    }else if(userMove == "paper" && compMove=="scissors"){
        Result.textContent ="Computer wins"
        c=c+10;
        scoreEffect()
        compScore.innerHTML = `${c}`;
        
        finalResult()
    }
    
    
})
scissors.addEventListener("click",()=>{
    console.log(scissors.value)
    ResultImg.style.bottom = 20+"px"
    yourImg.src = "./img/scissors.jpg"
    userMove = 'scissors'
    compdeclaration()
    set()
    
    if(userMove == "scissors" && compMove=="rock"){
        Result.textContent ="computer wins"
        c=c+10;
        scoreEffect()
        compScore.innerHTML = `${c}`;
        finalResult()
    }else if(userMove == "scissors" && compMove=="paper"){
        Result.textContent ="You win!!"
        s=s+10;
        scoreEffect()
        yourScore.innerHTML = `${s}`;
        finalResult()
    }else if(userMove == "scissors" && compMove=="scissors"){
        Result.textContent ="tie"
        
        finalResult()
    }
})

function finalResult(){

    if(s>=50){
        mainSorebord.style.display = "none"
        lasan.style.display = "flex"
        lasan.innerHTML=`<h1>You won!! <span id="tryagain">Try again?</span> </h1>`
    }else if(c>=50){
        mainSorebord.style.display = "none"
        lasan.style.display = "flex"
        lasan.innerHTML=`<h1>Oops you lose <span id="tryagain">Try again?</span> </h1>`
    }
    document.querySelector("#tryagain").addEventListener("click",()=>{
        mainSorebord.style.bottom = -150+"px"
        mainSorebord.style.display = "flex"
        lasan.style.display = "none"
        yourScore.innerHTML=0
        compScore.innerHTML=0
        yourScore.style.color="black";
        compScore.style.color="black";
        s=0; 
        c=0;
    })
}

function scoreEffect(){
    if(s>c){
        yourScore.style.color="green";
        compScore.style.color="red";
    }else if(s<c){
        yourScore.style.color="red";
        compScore.style.color="green";
    }
}

function set(){
    setTimeout(()=>{
        ResultImg.style.bottom = -520+"px"
    },1500)
}



finalResult()   
    


