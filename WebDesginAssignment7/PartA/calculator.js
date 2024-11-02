$(document).ready(() => {
  
  const username = localStorage.getItem('username') || 'User';
  $('#loggedInUser').text(username);

  
  const validateInput = (inputSelector, errorSelector) => {
      const value = $(inputSelector).val().trim();
      let message = "";

      
      if (!value) {
          message = "This field is required.";
      } 
      
      else if (!/^\d+(\.\d+)?$/.test(value)) {  
          message = "Only numeric values are allowed.";
      } 
      
      else if (isNaN(value)) {
          message = "Invalid number format.";
      }

      
      if (message) {
          $(errorSelector).text(message).addClass("visible");
          return false;
      } else {
          $(errorSelector).removeClass("visible").text("");
          return true;
      }
  };

  
  $("#number1, #number2").on("input", function () {
      validateInput(`#${$(this).attr("id")}`, `#${$(this).attr("id")}Error`);
  });

  
  const calculate = (num1, num2, operation) => {
      if (operation === "add") return num1 + num2;
      if (operation === "subtract") return num1 - num2;
      if (operation === "multiply") return num1 * num2;
      if (operation === "divide") return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      return "Invalid operation";
  };

  
  const performCalculation = (operation) => {
      
      const isNum1Valid = validateInput("#number1", "#number1Error");
      const isNum2Valid = validateInput("#number2", "#number2Error");

      if (!isNum1Valid || !isNum2Valid) return;

      
      const num1 = parseFloat($("#number1").val());
      const num2 = parseFloat($("#number2").val());

      
      const result = calculate(num1, num2, operation);

      if (result === "Cannot divide by zero") {
          $("#number2Error").text(result).addClass("visible");
          $("#result").val("Infinity / Not Defined");
      } else {
          $("#result").val(result);
          $("#number2Error").removeClass("visible").text("");
      }
  };

  
  $("#addButton").click(() => performCalculation("add"));
  $("#subtractButton").click(() => performCalculation("subtract"));
  $("#multiplyButton").click(() => performCalculation("multiply"));
  $("#divideButton").click(() => performCalculation("divide"));
});
