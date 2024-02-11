const currencySelector = document.getElementById("currency");
const priceElements = document.getElementsByClassName("price");
const signUpButton1 = document.querySelector(".Button1");
const signUpButton2 = document.querySelector(".Button2");
const signUpButton3 = document.querySelector(".Button3");



const baseCurrency = "$"; 
const conversionRates = {
  '€': 0.95, 
  '₹': 75,
};

function updatePrices() {
  const selectedCurrency = currencySelector.value;
  const basePrices = [0, 99, 399]; 

  for (let i = 0; i < priceElements.length; i++) {
    const priceElement = priceElements[i];
    const price = parseFloat(priceElement.textContent.replace("$ ", " "));
    const convertedPrice = basePrices[i] * (selectedCurrency === baseCurrency ? 1 : conversionRates[selectedCurrency]);
    priceElement.textContent = `${selectedCurrency} ${convertedPrice.toFixed(2)}`;
  }
}

currencySelector.addEventListener("change", updatePrices);

updatePrices();


signUpButton1.addEventListener("click", () => {
  swal.fire({
    title: "Thank you",
    text: "for subscribing free package.",
    icon: "success",
  });
});
signUpButton2.addEventListener("click", () => {
  swal.fire({
    title: "Thank you",
    text: "for subscribing Standard package.",
    icon: "success",
  });
});
signUpButton3.addEventListener("click", () => {
  swal.fire({
    title: "Thank you",
    text: "for subscribing Premium package.",
    icon: "success",
  });
});

