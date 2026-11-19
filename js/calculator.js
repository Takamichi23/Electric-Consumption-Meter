// Handles validation, consumption calculation, and transition to the results page.
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calculatorform");
    if (!form) return;

    form.addEventListener("submit", validateAndCalculate);
});

function validateAndCalculate(event) {
    event.preventDefault();

    const meternumField = document.getElementById("meternum");
    const previousReadField = document.getElementById("prevreadinput");
    const currentReadField = document.getElementById("currentreadinput");
    const costField = document.getElementById("costinput");

    const error1 = document.getElementById("errorText1");
    const error2 = document.getElementById("errorText2");
    const error3 = document.getElementById("errorText3");
    const error4 = document.getElementById("errorText4");

    const fields = [meternumField, previousReadField, currentReadField, costField];
    const errors = [error1, error2, error3, error4];

    // Reset previous validation state
    fields.forEach((field) => {
        field.style.outline = "";
    });
    errors.forEach((el) => {
        el.textContent = "";
    });

    const meternumValue = meternumField.value.trim();
    const prevRaw = previousReadField.value.trim();
    const currRaw = currentReadField.value.trim();
    const costRaw = costField.value.trim();

    const previousReadValue = parseFloat(prevRaw);
    const currentReadValue = parseFloat(currRaw);
    const costValue = parseFloat(costRaw);

    const meternumPattern = /^[A-Za-z]{4}[0-9]{4}$/;

    const fail = (field, errorEl, message) => {
        errorEl.textContent = message;
        field.style.outline = "3px solid #ff6b6b";
        field.focus();
    };

    // 1. Validate meter number
    if (meternumValue === "") {
        fail(meternumField, error1, "Please enter a meter number before submitting.");
        return;
    }
    if (meternumValue.length > 8) {
        fail(meternumField, error1, "Please input 8 characters only.");
        return;
    }
    if (!meternumPattern.test(meternumValue)) {
        fail(meternumField, error1, "Format must be 4 letters followed by 4 numbers (e.g. ABCD1234).");
        return;
    }

    // 2. Validate previous reading
    if (prevRaw === "" || Number.isNaN(previousReadValue)) {
        fail(previousReadField, error2, "Please input a valid numerical value before submitting.");
        return;
    }
    if (previousReadValue <= 0) {
        fail(previousReadField, error2, "Previous reading must be greater than 0.");
        return;
    }
    if (prevRaw.replace(/\./g, "").length > 5) {
        fail(previousReadField, error2, "Please input up to 5 digits only.");
        return;
    }

    // 3. Validate current reading
    if (currRaw === "" || Number.isNaN(currentReadValue)) {
        fail(currentReadField, error3, "Please input a valid numerical value before submitting.");
        return;
    }
    if (currentReadValue <= 0) {
        fail(currentReadField, error3, "Current reading must be greater than 0.");
        return;
    }
    if (previousReadValue > currentReadValue) {
        error2.textContent = "Previous reading cannot be greater than the current reading.";
        error3.textContent = "Current reading cannot be less than the previous reading.";
        previousReadField.style.outline = "3px solid #ff6b6b";
        currentReadField.style.outline = "3px solid #ff6b6b";
        currentReadField.focus();
        return;
    }
    if (currRaw.replace(/\./g, "").length > 5) {
        fail(currentReadField, error3, "Please input up to 5 digits only.");
        return;
    }

    // 4. Validate cost per kWh
    if (costRaw === "" || Number.isNaN(costValue)) {
        fail(costField, error4, "Please input a valid numerical value before submitting.");
        return;
    }
    if (costValue <= 0) {
        fail(costField, error4, "Cost per kWh must be greater than 0.");
        return;
    }

    // Compute consumption and total cost
    const consumption = currentReadValue - previousReadValue;
    const totalCost = consumption * costValue;

    const resultData = {
        meterNumber: meternumValue.toUpperCase(),
        previousReading: previousReadValue,
        currentReading: currentReadValue,
        costPerKwh: costValue,
        monthlyConsumption: `${consumption.toFixed(2)} kWh`,
        totalCost: `${totalCost.toFixed(2)} PHP`,
    };

    localStorage.setItem("emccResult", JSON.stringify(resultData));

    // Show loading transition screen
    document.getElementById("content").style.display = "none";
    document.getElementById("secondhalf").style.display = "none";
    document.getElementById("loadingscreen").style.display = "block";

    // Redirect to results page after the loading animation
    setTimeout(() => {
        window.location.href = "pages/result.html";
    }, 3000);
}
