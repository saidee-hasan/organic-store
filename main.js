const buyNow = (button) => {
  // Find the parent card element
  const card = button.closest('.card');
  // Get the product price
  const productPriceElement = card.querySelector('.balance p');
  const currentBalanceElement = document.querySelector('.my-balance span');

  const productPrice = parseFloat(productPriceElement.innerText, 10);
  const currentBalance = parseFloat(currentBalanceElement.innerText, 10);

  // Check if the product price and current balance are valid numbers
  if (!isNaN(productPrice) && !isNaN(currentBalance)) {
      // Check if there is enough balance to buy the product
      if (currentBalance >= productPrice) {
          const newBalance = currentBalance - productPrice; // Deduct the price from the balance
          currentBalanceElement.innerText = newBalance.toFixed(2); // Update the displayed balance
          alert(`You have purchased: ${card.querySelector('.card-title').innerText}\nPrice: $${productPrice.toFixed(2)}`);
      } else {
          alert("Insufficient balance to make this purchase");
      }
  } else {
      console.error("Invalid price or balance values");
  }
};