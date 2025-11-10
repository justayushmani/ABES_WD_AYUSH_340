function validateForm() {
  const username = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageElement = document.getElementById("demo");
  let message = "";
 const namePattern = /^[A-Za-z]+$/;
  if (username === "") {
    message = "Username cannot be empty.";
  } 
  else if (!namePattern.test(username)) {
    message = "Username should contain only alphabets.";
  } 
  else if (username.length < 6) {
    message = "Username must be at least 6 characters long.";
  } 
  else if (password === "") {
    message = "Password cannot be empty.";
  } 
  else if (password.length < 6) {
    message = "Password must be at least 6 characters long.";
  } 
  else {
    message = `Registration successful! Welcome, ${username}!`;
  }
  messageElement.textContent = message;
  return messageElement.style.color === "green";
}
