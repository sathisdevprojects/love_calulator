function clear(){
  document.querySelector("#n1").value = "";
  document.querySelector("#n2").value = "";
  document.querySelector("#fd").value="";
  document.querySelector("#md").value="";
}
function percentage(){
    var randomnum = Math.floor(Math.random()*30)+70;
    console.log(randomnum);
   var result = document.querySelector("#result");
   result.innerText = `Yours Love 💕 Percentage is ${randomnum} %`;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    clear();
    percentage();

});