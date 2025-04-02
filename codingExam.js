let initialButton = document.getElementById("Button1")

function setUp() {

    whiteSpace = document.createElement("p")
    whiteSpace.textContent = ""
    document.body.appendChild(whiteSpace)

    var loan = document.createElement("form")
    submitLoan = document.createElement("button")
    loanPrompt = document.createElement("p")
    loanPrompt.textContent = "Loan Amount"
    submitLoan.textContent = "Submit"

    document.body.appendChild(loanPrompt)
    document.body.appendChild(submitLoan)
    document.body.appendChild(loan)

    var downPayment = document.createElement("input")
    downPayment.setAttribute('type' , 'number')
    downPaymentPrompt = document.createElement("p")
    downPaymentPrompt.textContent = "Down Payment"
    document.body.appendChild(downPaymentPrompt)
    document.body.appendChild(downPayment)

    document.body.removeChild(initialButton)
}

function calculator() {
    var p = loan.value 
    console.log(p)
}
initialButton.addEventListener("click" , setUp)