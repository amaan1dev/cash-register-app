const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const notes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", () => {
    let bill = Number(billAmount.value)
    let cash = Number(cashGiven.value)
    errorMessage.style.display = "none"
    if (bill > 0) {

        if (cash > bill) {
            let amountToBeReturned = cash - bill
            calculateChange(amountToBeReturned)
        } else {
            errorMsg("You need to give more cash. 💵")
        }

        if (bill === cash) {
            errorMsg("Nothing to return!")
        }

    } else {
        errorMsg("Enter valid Amount. 🤔")
    }

})

function calculateChange(amountToBeReturned){
    for(let i = 0; i < notes.length; i++){


        const numberOfNotes = Math.trunc(amountToBeReturned / notes[i])
        amountToBeReturned = amountToBeReturned % notes[i]
        noOfNotes[i].innerText = numberOfNotes

    }
}

const errorMsg = message => {
    errorMessage.style.display = "block"
    errorMessage.innerText = message
}





