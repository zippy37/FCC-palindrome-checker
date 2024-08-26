const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById('result');

function palindromeChecker(input) {
  
  const originalInput = userInput.value;
  if (originalInput === "") {
    alert("Please input a value");
    return;
  }

  resultDiv.replaceChildren();

  const lowercaseInput = originalInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

//  console.log(lowercaseInput);

  let resultsMsg = `<strong>${originalInput}</strong> ${lowercaseInput === [...lowercaseInput].reverse().join("") ?  "is" : "is not"} a palindrome!`;

//  console.log([...lowercaseInput].reverse().join(""));

  const resultsp = document.createElement("p");
  resultsp.className = "user-input";
  resultsp.innerHTML = resultsMsg;

  resultDiv.appendChild(resultsp);
  resultDiv.classList.remove('hidden');
}


checkButton.addEventListener("click", palindromeChecker);