let comp = document.querySelector(".computerimg img");
let player = document.querySelector(".playerimg img");
let btns = document.querySelectorAll(".buttons button");
let c_points = document.querySelector(".cpts");
let p_points = document.querySelector(".ppts");
let msg= document.getElementById("msg");
let reset=document.getElementById("reset");

btns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        comp.classList.add("shakeComp");
        player.classList.add("shakePlayer");

        setTimeout(() => {
            comp.classList.remove("shakeComp");
            player.classList.remove("shakePlayer");
            let options = ["STONE" , "PAPER" , "SCISSORS"];
            let number = Math.floor(Math.random()*3);
            let choose = options[number];
            comp.src="c-"+choose.toLowerCase()+".jpg";
            player.src="p-"+btn.innerHTML.toLowerCase()+".jpg";

            let cpoints = parseInt(c_points.innerHTML);
            let ppoints = parseInt(p_points.innerHTML);

            if(btn.innerHTML===choose){
                msg.innerText = "It's a draw";
            }
            else{
                msg.innerText = "";
            }

            if(btn.innerHTML==="STONE"){
                if(choose==="PAPER"){
                    c_points.innerHTML= cpoints+1;
                }
                else if(choose==="SCISSORS"){
                    p_points.innerHTML = ppoints+1;
                }
            }

            if(btn.innerHTML==="PAPER"){
                if(choose==="STONE"){
                    p_points.innerHTML = ppoints+1;
                }
                else if(choose==="SCISSORS"){
                    c_points.innerHTML= cpoints+1;
                }
            }

            if(btn.innerHTML==="SCISSORS"){
                if(choose==="STONE"){
                    c_points.innerHTML= cpoints+1;
                }
                else if(choose==="PAPER"){
                    p_points.innerHTML=ppoints+1;
                }
            }

            if(c_points.innerHTML==5){
                msg.innerTEXT="Computer won the game!Play again";
            }
            else if(p_points.innerHTML==5){
                msg.innerTEXT="Congratulations!You won the game";
            }
        },900);
    })
    
});

reset.addEventListener("click",() => {
    c_points.innerHTML="0";
    p_points.innerHTML="0";
})