

//initialize count as 0
//listen for clicks on increment button
//increment the count variable when button is clicked
//change the countel in html to reflect the new count

let countEl = document.getElementById("counter-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count);
    
}

function save(){
    console.log(count)
}






