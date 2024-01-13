let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
const combination = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,5,6],
   [3,4,5],
   [6,7,8]
];
let result = 0;
let turn0 = true;
boxes.forEach((ele) => {
   ele.addEventListener("click",() =>{
      if(turn0 === true)
      {
         ele.innerText = "O";
         turn0 = false;
      }
      else
      {
         ele.innerText = "X";
         turn0 = true;
      }
      ele.disabled = true;
      checkwinner();
   });
});
const disableBoxes = () =>{
   for(let box of boxes) {
      box.disabled = true;
   }
}
const resetGame = () =>{
   turn0 =true;
   enableBoxes();
   msgContainer.classList.add("hide");
}
   const enableBoxes = () =>{
      for(let box of boxes) {
         box.disabled = false;
         box.innerText = "";
      }
}
const Message = (winner) =>{
   msg.innerText = `${winner} is the winner !!!`;
   msgContainer.classList.remove("hide");
   disableBoxes();     

}
const Draw = ()=> {
   msg.innerText = "Its a Draw !!!";
   msg.Container.classList.remove("hide");
   disableBoxes();
}
function checkwinner() {
   for (let comb of combination) {
      let pos1 = boxes[comb[0]].innerText;
      let pos2 = boxes[comb[1]].innerText;
      let pos3 = boxes[comb[2]].innerText;
      if (pos1 !== "" && pos2 !== "" || pos3 !== "") {
         if (pos1 === pos2 && pos2 === pos3) {
            Message(pos1);
            result = true;
         }
         else
         {
         result++;
         if(result===9) Draw();
         }
      }
      else
         result++;
   }
   console.log("result is "+result);
}

newbtn.addEventListener("click",()=>{
   resetGame();
})
resetbtn.addEventListener("click",()=>{
   resetGame();
})
