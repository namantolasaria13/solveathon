

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btn1").addEventListener("click", function () {
      var username = document.querySelector(".uname").value;
      if (username.length >= 3 && username.match(/^[a-zA-Z0-9]*$/) && username.length <= 20) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".myform").classList.add('button_spin1');
      } else {
        document.querySelector(".error").textContent = "Invalid Username";
        document.querySelector(".error").style.display = "block";
      }
    });
  
    document.getElementById("btn2").addEventListener("click", function () {
      var email = document.querySelector(".email").value;
  
      if (email.length !== 0 && email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".myform").classList.add('button_spin2');
      } else {
        document.querySelector(".error").textContent = "Invalid Email";
        document.querySelector(".error").style.display = "block";
      }
    });
  
    document.getElementById("btn3").addEventListener("click", function () {
      var password = document.querySelector(".password").value;
      if (password.length >= 2) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".myform").classList.add('button_spin3');
      } else {
        document.querySelector(".error").textContent = "Invalid Password";
        document.querySelector(".error").style.display = "block";
      }
    });
  
  });
  