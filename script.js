let imgBlockArray = document.getElementsByClassName("imgBlock");
const npBtn = document.getElementById("park");


Array.from(imgBlockArray).forEach(block => {
    block.addEventListener("click", function(event){
        console.log("click")
        console.log(block);
    })
})

const filterForNP = () => {
    for(i=0; i<imgBlockArray.length; i++){
        let block = imgBlockArray[i];
        let blockVal = imgBlockArray[i].getAttribute("value");
        
        if(blockVal === "np"){
        }else{
            block.classList.add("hide");
        }
    }
};


npBtn.addEventListener("click", filterForNP);

