// Populates the calculation results and handles the thank-you transition.
document.addEventListener("DOMContentLoaded", () => {
    renderResults();

    const sayonaraBtn = document.getElementById("sayonara");
    if (sayonaraBtn) {
        sayonaraBtn.addEventListener("click", onSayonaraClicked);
    }
});

function renderResults() {
    const monthlyConsumpField = document.getElementById("monthlyconsump");
    const totalCostField = document.getElementById("totalcost");

    const meternumLi = document.getElementById("meternumTxt");
    const prevreadLi = document.getElementById("prevreadTxt");
    const currentreadLi = document.getElementById("currentreadTxt");
    const costLi = document.getElementById("costTxt");
    const formula1Li = document.getElementById("formulaTxt1");
    const formula2Li = document.getElementById("formulaTxt2");

    let data = null;
    try {
        const raw = localStorage.getItem("emccResult");
        if (raw) {
            data = JSON.parse(raw);
        }
    } catch {
        data = null;
    }

    if (!data) {
        if (monthlyConsumpField) monthlyConsumpField.value = "No data yet";
        if (totalCostField) totalCostField.value = "—";
        if (meternumLi) meternumLi.textContent = "No recent calculation found. Click SAYONARA! to return to the calculator.";
        return;
    }

    if (monthlyConsumpField) monthlyConsumpField.value = data.monthlyConsumption;
    if (totalCostField) totalCostField.value = data.totalCost;

    if (meternumLi) meternumLi.textContent = `Meter number: ${data.meterNumber}`;
    if (prevreadLi) prevreadLi.textContent = `Previous reading: ${data.previousReading} kWh`;
    if (currentreadLi) currentreadLi.textContent = `Current reading: ${data.currentReading} kWh`;
    if (costLi) costLi.textContent = `Cost per kWh: ${data.costPerKwh} PHP`;
    if (formula1Li) {
        formula1Li.textContent = `Monthly consumption: ${data.currentReading} - ${data.previousReading} = ${data.monthlyConsumption}`;
    }
    if (formula2Li) {
        formula2Li.textContent = `Total cost: ${data.monthlyConsumption} × ${data.costPerKwh} PHP = ${data.totalCost}`;
    }
}

function onSayonaraClicked() {
    const bgRow = document.getElementById("bgRow");
    const catGifContent = document.getElementById("catGifContent");
    const answerContent = document.getElementById("answerContent");
    const thankyouScreen = document.getElementById("thankyouScreen");

    if (bgRow) bgRow.style.animation = "tiltLeftAnimation 1s ease-out forwards";
    if (catGifContent) catGifContent.style.display = "none";
    if (answerContent) answerContent.style.display = "none";
    if (thankyouScreen) thankyouScreen.style.display = "flex";

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3500);
}
