// balance element hai ye
const balanceElement = document.querySelector('.balance .amount');
      
// buy form
const buyForm = document.querySelector('.buy form');
const buyAmountInput = buyForm.querySelector('#amount');
const buyMethodInput = buyForm.querySelector('#payment-method');
      
// use list and add event listeners to the use buttons
const useList = document.querySelector('.use .items-list');
const useButtons = useList.querySelectorAll('.btn-use');
useButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the price and subtract it from the balance
      const price = button.parentElement.querySelector('.price').textContent;
      const currentBalance = parseInt(balanceElement.textContent);
      const newBalance = currentBalance - parseInt(price);
      balanceElement.textContent = newBalance;
      alert('Item used!');
    });
});
      
// Add event listener to the buy form
buyForm.addEventListener('submit', event => {
    event.preventDefault();
    // Get the amount and payment method from the form
    const amount = parseInt(buyAmountInput.value);
    const method = buyMethodInput.value;
    // Calculate the new balance
    const currentBalance = parseInt(balanceElement.textContent);
    const newBalance = currentBalance + amount;
    balanceElement.textContent = newBalance;
    // Show a confirmation message
    alert(`You bought ${amount} coins using ${method}!`);
    if buyForm.buyAmountInput = ""
    return true
});
