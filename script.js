document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const resultDiv = document.getElementById("result");

  if (input.trim() === "") {
    alert("Please input a value.");
    return;
  }

  // Normalize the string: remove non-alphanumerics and convert to lowercase
  const cleaned = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;

  if (isPalindrome) {
    resultDiv.textContent = `${input} is a palindrome.`;
  } else {
    resultDiv.textContent = `${input} is not a palindrome.`;
  }
});
