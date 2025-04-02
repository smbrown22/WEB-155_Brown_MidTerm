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
        let last = loan - down 
        console.log(last)


    }
    catch {
        window.alert("Please enter a value.")
    }

}


activate.addEventListener("click" , prompting)