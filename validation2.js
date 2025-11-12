function validateForm() {
  const email = prompt("Enter your Email ID:");
  const phone = prompt("Enter your Phone Number:");
  let message = "";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\d{10}$/;
  if (!emailPattern.test(email)) {
    message = "Invalid Email ID. Please use the format name@domain.com";
  } 
  else if (!phonePattern.test(phone)) {
    message = "Invalid Phone Number. It must contain exactly 10 digits.";
  } 
  else {
    message = "Email ID and Phone Number are valid!";
  }

  document.getElementById("demo").innerHTML = message;
}
