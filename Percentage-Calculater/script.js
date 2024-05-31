const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

function calculatePercentage(){
    button.addEventListener("click", function (){
       input.value = input.value / 80 * 100;
       result.innerHTML = input.value + String("%")

       input.value = ""

    })
}
calculatePercentage();


function darkmode() {
    let btn = document.querySelector("#btn");
    let container = document.querySelector("#container")

    btn.innerHTML = "dark mode";
    container.style. color = "black";

    btn.addEventListener("click",function(){
        if(btn.innerHTML === "dark mode"){
            container.style.background = "black",
             btn.innerHTML = "bright mode",
             container.style.color = "white"
        }
        else if(btn.innerHTML === "bright mode"){
            container.style.background = "white",
             btn.innerHTML = "dark mode",
             container.style.color = "black"
        }
    })



}
darkmode();

function calculateOnEnter(){
    document.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            input.value = input.value / 80 * 100;
           result.innerHTML = input.value + String("%")
    
           input.value = ""
        }
    })
}
calculateOnEnter()
