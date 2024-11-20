// Initial variables
let balance = 10000;
const correctPin = "1234";
const correctUserId = "Ekrem";

// Function to check the withdrawal request
function checkWithdrawal() {
    const userId = document.getElementById("user-id").value;
    const pin = document.getElementById("pin").value;
    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);

    // Check if the user ID and PIN are correct
    if (userId !== correctUserId) {
        showPopup("Invalid User ID");
        return;
    }

    if (pin !== correctPin) {
        showPopup("Invalid PIN Code");
        return;
    }

    // Validate the withdrawal amount
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        showPopup("Please enter a valid withdrawal amount");
        return;
    }

    // Check if the balance is sufficient
    if (withdrawAmount > balance) {
        showPopup("Insufficient funds");
    } else {
        balance -= withdrawAmount;
        showPopup(`Withdrawal successful. New balance: ${balance.toFixed(2)}`);
        updateBalance();
    }
}

// Update the balance shown on the screen
function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = balance.toFixed(2); // Display the balance with two decimal places
}

function showPopup(message) {
    const popupElement = document.getElementById("popup");
    const popupMessageElement = document.getElementById("popup-message");
    popupMessageElement.textContent = message;
    popupElement.classList.remove("hidden");

    setTimeout(() => popupElement.classList.add("hidden"), 3000);
}

function closePopup() {
    console.log("Close button clicked");
    const popupElement = document.getElementById("popup");
    popupElement.classList.add("hidden");
}
