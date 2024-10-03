const buyNow = () => {
    const productPriceElement = document.querySelector('.balance p');
    const currentBalanceElement = document.querySelector('.my-balance span');
  
    const productPrice = parseFloat(productPriceElement.innerText, 10);
    const currentBalance = parseFloat(currentBalanceElement.innerText, 10);
  
  
    if (!isNaN(productPrice) && !isNaN(currentBalance)) {
      if (currentBalance >= productPrice) {
        const newBalance = currentBalance + productPrice;
        console.log(newBalance);
        document.querySelector(".my-balance span").innerText = newBalance.toFixed(2);
      }
    } else {
      console.error("Invalid price or balance values");
    }
  };