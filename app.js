let inpEl =  document.querySelectorAll(".inp")[0]

let btnEl = document.querySelectorAll(".btn")
let str = ''

let btn = Array.from(btnEl)

btnEl.forEach(btn => {

    btn.addEventListener('click', (event) =>{
     
    if(event.target.value === 'Del') {
        str =  str.substring(0, str.length-1)
    inpEl.value = str
    }
    else if(event.target.value === 'c'){
        str = ''
        inpEl.value = str
    }
    else if (event.target.value === '='){
         str = eval(str)
         inpEl.value = str
    }
    // else if (event.target.value === 'x') {
    //     str  = inpEl.value * inpEl[2].value
    //     inpEl.value = str
    // }
    else {
        str += event.target.value
        inpEl.value = str
    }
    }
    
    )
}

)

// function display() {
//     console.log(event.target.value)
// }