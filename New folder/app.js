function calculateHypotenuse() {
    // Get the values of base and perpendicular lengths from the form
    var base = parseFloat(document.getElementById("base").value);
    var perpendicular = parseFloat(document.getElementById("perpendicular").value);
    
    // Check if the values are valid numbers
    if (isNaN(base) || isNaN(perpendicular)) {
        // If the values are not valid numbers, display an error message
        document.getElementById("result").innerHTML = "Please enter valid numbers for base and perpendicular lengths.";
    } else {
        // Calculate the hypotenuse using the Pythagorean theorem (c = sqrt(a^2 + b^2))
        var hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
        
        // Display the result
        document.getElementById("result").innerHTML = "Hypotenuse Length: " + hypotenuse.toFixed(2);
    }
}
