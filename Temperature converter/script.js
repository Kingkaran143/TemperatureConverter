const inputField = document.getElementById("inputField")
const Submit = document.getElementById("submit")
const option = document.getElementById("option")
const result = document.getElementById("result")


Submit.addEventListener("click" , ()=> {
    let inputValue = Number(inputField.value)
    console.log(inputValue)
    let choose = option.value
    console.log(choose)

    if(choose === "Celsius"){
        let C;
        C = (5/9*(inputValue - 32 )).toFixed(2)
        console.log(C)
        result.innerHTML = `Celsius : ${C}° C`
        
    }
    else if(choose === "Fahrenheit"){
        let F;
        F = ((inputValue * 9/5) + 32).toFixed(2)
        console.log(F)
        result.innerHTML = `Fahrenheit : ${F}° F`
        
    }
    else{
        let K;
        K = (inputValue + 273.15)
        result.innerHTML = `Kelvin : ${K}° k`
         
    }
    inputField.value = ``
})
option.addEventListener("click" , ()=>{
    let choose = option.value
    result.innerHTML = ""
    if(choose === "Celsius"){
        console.log("2-")
        inputField.placeholder = `Enter the Fahrenheit`
    }
    else{
        inputField.placeholder = `Enter the Celsius`
    }
})