let box =document.querySelectorAll(".but");
let refesh = document.querySelector("#res");
let neww = document.querySelector("#new");
let main = document.querySelector(".win-container ");
let winnn = document.querySelector("#winner");

let playe1 = true;
let win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let resetgame =()=>{
    playe1=true;
    enableabledboxes();
    main.classList.add("hide");
};
box.forEach((boxes)=> {
    boxes.addEventListener("click",() =>{
        console.log("its worked ");
        // boxes.innerText="O"
        if (playe1) {
 boxes.innerText="O";
 playe1=false;
            
        }
        else{
            boxes.innerText="X";
            playe1 = true;
        }boxes.disabled = true;

        checkWinner();
    });
    
});
let disabledboxes=()=>{
    for (const boxes of box) {
        boxes.disabled=true;
    }
};
let enableabledboxes=()=>{
    for (const boxes of box) {
        boxes.disabled=false;
        boxes.innerText="";

    }
};
//winn shpw;

let showwinner= (winner)=>{
     winnn.innerText=`congulation,winner is ${winner} `;
      main.classList.remove("hide");
    disabledboxes();
};
// checked'
const checkWinner = ()=>{
for (const winer of win) {
    // console.log(winer[0],winer[1],winer[2]);
    // console.log(
    //     box[winer[0]].innerText,
    //     box[winer[1]].innerText,
    //     box[winer[2]].innerText

    let po1= box[winer[0]].innerText;
       let po2=box[winer[1]].innerText;
        let po3= box[winer[2]].innerText;
    if(po1!=""&& po2!=""&& po3!=""){
        if(po1 ===po2 && po2 === po3){
            console.log("winner");
            showwinner(po1);
        }
    }
}


};

refesh.addEventListener("click",resetgame) ;
neww.addEventListener("click",resetgame) ;













    //     if (playe1) {
    //         box.innertext="X";
    //         playe1=false
    //     }
    //     else{
    //         box.innertext="O"
    //         playe1=true
    //     }
    //     box.disabled=true
    // })
