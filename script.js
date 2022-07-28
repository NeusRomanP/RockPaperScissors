const wrapper = document.getElementById("wrapper");
const you = document.getElementById("you");
const machine = document.getElementById("pc");
const result = document.getElementById("result");

const choices = [
    {
        win: "scissors",
        lose: "paper",
        name: "rock"
    },
    {
        win: "rock",
        lose: "scissors",
        name: "paper"
    },
    {
        win: "paper",
        lose: "rock",
        name: "scissors"
    }
]

function machineChoice(){
    let random = Math.floor(Math.random() * 3);
    return random;
}

wrapper.addEventListener("click", (e) =>{
    let element = e.target.value;
    let pc = machineChoice();

    if(element){
        you.innerHTML = element;
        machine.innerHTML = choices[pc].name;

        if(element == choices[pc].win){
            result.innerHTML = "You lost! :("
            throwAnimation(choices[pc].name);
        }else if(element == choices[pc].lose){
            result.innerHTML = "You won! :)"
            throwAnimation(element);
        }else{
            result.innerHTML = "Tie game... :|"
        }
    }
})

function throwAnimation(winner){
    const element = document.getElementById(`${winner}-animation`);
    const animation = document.getElementById("animations");
    animation.style.zIndex = 2;
    element.classList.add(winner);
    
    setTimeout(()=>{
        element.classList.remove(winner);
        animation.style.zIndex = -1;
    }, 4000)
}