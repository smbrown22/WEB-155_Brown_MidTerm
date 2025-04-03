"use strict;"
activate = document.getElementById("Button1")

function prompting() {
    try {

        var loan = window.prompt("Enter loan value")
        var loan = Number(loan)
        console.log(loan)
    
        var downPayment = window.prompt("Enter Down Payment Value (Percentage)")
        var downPayment = (downPayment) 
        console.log(downPayment)


        if (downPayment.length < 2) {
            var downPayment = ("0.0" + downPayment)
            var downPayment = Number(downPayment)
            console.log(downPayment)
        }
        else if (downPayment.length >= 3) {
            var downPayment = window.prompt("Enter Down Payment Value (Percentage)") 
        }
        else {
            var downPayment = ("0." + downPayment)
            var downPayment = Number(downPayment)
            console.log(downPayment)
        }

        var loanTerm = window.prompt("15 or 30 years?")
        var loanTerm = Number(loanTerm)
        console.log(loanTerm)
        
        let down = loan * downPayment
        console.log(down)
        var last = loan - down 
        console.log(last)
        let monthly = loanTerm * 12 

        var interest = 0.575
        let i = 0  
        var monthlyPayment = (((interest / 12) * last) / (1 - Math.pow(1 + (interest / 12), (loanTerm * -12)))).toFixed(2) 
        
        for (let i = 0; i <= monthly; i++) {
            var last = last - monthlyPayment
            var monthlyPayment = (((interest / 12) * last) / (1 - Math.pow(1 + (interest / 12), (loanTerm * -12)))).toFixed(2)
            let result = document.createElement("p")
            let o = `Your monthly payment is ${monthlyPayment}$ and you are on Month ${i}, your remaining balance is ${last}$`
            result.textContent = o 
            document.body.appendChild(result)

        console.log(o)
    }
    }
    catch {
        window.alert("Please enter a value.")
    }

}


activate.addEventListener("click" , prompting)