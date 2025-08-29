// Get the calculator container and display area elements
var calculatorContainer = document.getElementById("calculator_container");
var displayArea = document.getElementById("display_area");

// Add a click event listener to the calculator container
calculatorContainer.addEventListener("click", (e) => {
    // Check if a button was clicked
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "C": // Clear the display
                clear();
                break;
            case "DEL": // Delete one character from the display
                deleteOneValue();
                break;
            case "=": // Evaluate the expression
                evaluate();
                break;
            default: // Add the clicked value to the display
                addToDisplayArea(e.target.textContent);
        }
    }
});

// Function to clear the display
function clear() {
    displayArea.textContent = "";  // Reset display area
}

// Function to add value to the display
function addToDisplayArea(value) {
    displayArea.textContent += value;  // Append value to the display
}

// Function to delete the last character from the display
function deleteOneValue() {
    var currentContent = displayArea.textContent; 
    displayArea.textContent = currentContent.substring(0, currentContent.length - 1);  // Remove last character
}

function evaluate() {
    var expression = displayArea.textContent;
 
    // Validate the expression
    for (var i = 0; i < expression.length; i++) {
        if ('0123456789+-*/.%'.indexOf(expression[i]) == -1) {
            displayArea.textContent = "Error";
            return;
        }
    }
 
    // Convert percentage symbols to valid math expressions
    expression = expression.replace(/(\d+)%/g, "($1/100)");
 
    try {
        var result = eval(expression);
        displayArea.textContent = result;
    } catch (e) {
        displayArea.textContent = "Error";
    }
}