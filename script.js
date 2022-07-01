window.onload = () => {
    // Taking button reference and adding click event
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};
 // Function for calculating BMI
function calculateBMI() {
    // Getting input from user into height variable.
    let height = Number(document.querySelector("#height").value);

    // Getting input from user into weight variable.
    let weight = Number(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) {
        alert("Provide a valid Height!");
    } else if (weight === "" || isNaN(weight)) {
        alert("Provide a valid Weight!");
    } else {
        // If both input is valid, calculate the bmi
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Dividing as per the bmi conditions
        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
        }
    }

    document.querySelector("#height").value = '';
    document.querySelector("#weight").value = '';

    button.disable = true;
}

