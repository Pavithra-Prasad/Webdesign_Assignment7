
$(document).ready(() => {
    const validateLogin = () => {
      let isValid = true;
  
      
      const email = $('#email').val();
      const emailRegex = /^[\w\.-]+@northeastern\.edu$/;
      if (!email) {
        $('#emailError').text('Email is required.').show();
        isValid = false;
      } else if (email.length > 50) {
        $('#emailError').text('Email should not exceed 50 characters.').show();
        isValid = false;
      } else if (!emailRegex.test(email)) {
        $('#emailError').text('Please enter a valid Northeastern email.').show();
        isValid = false;
      } else {
        $('#emailError').hide();
      }
  
      
      const username = $('#username').val();
      const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
      if (!username) {
        $('#usernameError').text('Username is required.').show();
        isValid = false;
      } else if (username.length > 20) {
        $('#usernameError').text('Username should not exceed 20 characters.').show();
        isValid = false;
      } else if (!usernameRegex.test(username)) {
        $('#usernameError').text('Username should be 3-20 characters without special characters.').show();
        isValid = false;
      } else {
        $('#usernameError').hide();
      }
  
      
      const password = $('#password').val();
      if (!password) {
        $('#passwordError').text('Password is required.').show();
        isValid = false;
      } else if (password.length < 6) {
        $('#passwordError').text('Password should be at least 6 characters.').show();
        isValid = false;
      } else if (password.length > 20) {
        $('#passwordError').text('Password should not exceed 20 characters.').show();
        isValid = false;
      } else {
        $('#passwordError').hide();
      }
  
      
      const confirmPassword = $('#confirmPassword').val();
      if (!confirmPassword) {
        $('#confirmPasswordError').text('Please confirm your password.').show();
        isValid = false;
      } else if (confirmPassword.length > 20) {
        $('#confirmPasswordError').text('Confirm password should not exceed 20 characters.').show();
        isValid = false;
      } else if (confirmPassword !== password) {
        $('#confirmPasswordError').text('Passwords do not match.').show();
        isValid = false;
      } else {
        $('#confirmPasswordError').hide();
      }
  
      
      $('#loginButton').prop('disabled', !isValid);
    };
  
    
    $('#email, #username, #password, #confirmPassword').on('input', validateLogin);
  
    

    
    $('#loginButton').click((event) => {
      event.preventDefault();

      
      if ($('#loginButton').prop('disabled') === false) { 
          const username = $('#username').val();
          localStorage.setItem('username', username); 
          
          
          window.location.href = 'calculator.html';
      }
    });
  });
  