let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
    let enterName = document.getElementById("enterName").value;
    let enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > myAccountBalance) {  // Check against current balance
        alert("Insufficient Balance.");
    } else {
        let findUserBankAccount = enterName + "BankBalance";
        let finalAmount = parseInt(document.getElementById(findUserBankAccount).innerText) + enterAmount;

        // Update the sender's balance
        myAccountBalance -= enterAmount;
        document.getElementById("myAccountBalance").innerText = myAccountBalance;

        // Update the recipient's balance
        document.getElementById(findUserBankAccount).innerText = finalAmount;

        alert(`Successful Transaction!!  
        Rs:${enterAmount} is sent to ${enterName}@email.com.`);

        // Create a new list item to record the transaction
        let createPTag = document.createElement("li");
        let textNode = document.createTextNode(`Rs:${enterAmount} is sent to recipient with Email-id ${enterName}@email.com on ${new Date().toLocaleString()}.`);
        createPTag.appendChild(textNode);

        let element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
