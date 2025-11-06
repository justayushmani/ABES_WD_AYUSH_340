
    function myFunction() {
  
      let username = document.getElementById("name1").value.trim();
      let password = document.getElementById("pass1").value.trim();
      let message = "";

      if (username === "" || username.length < 3) {
        message = " Username must be at least 3 characters long.";
      }
   
      else if (password === "") {
        message = "❌ Password cannot be empty.";
      } 
      else if (password.length < 6) {
        message = "Password must be at least 6 characters long.";
      }
      else {
        message = "Login successful! Welcome, " + username + "!";
      }

      document.getElementById("demo").innerHTML = message;
    }