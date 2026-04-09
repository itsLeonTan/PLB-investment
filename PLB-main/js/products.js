
const bonds = document.getElementById("bonds");
const stocks = document.getElementById("stocks");
const cash = document.getElementById("cash");

const bondsValue = document.getElementById("bondsValue");
const stocksValue = document.getElementById("stocksValue");
const cashValue = document.getElementById("cashValue");

const totalText = document.getElementById("total");
const returnText = document.getElementById("return");


function activateCustomMode() {
    document.getElementById("custom-builderbox").style.display = "none";
    document.getElementById("custom-sliders").style.display = "block";
}


function updateValues() {
    let b = parseInt(bonds.value);
    let s = parseInt(stocks.value);
    let c = parseInt(cash.value);

    let total = b + s + c;

    bondsValue.textContent = b + "%";
    stocksValue.textContent = s + "%";
    cashValue.textContent = c + "%";

    totalText.textContent = "Total: " + total + "%";

        if(total !=100)
        {
            totalText.style.color= "red";
        }else totalText.style.color= "black";

    let expectedReturn =  (b / 100) * 0.03 + (s / 100) * 0.08 +(c / 100) * 0.01;
    expectedReturn = expectedReturn * 100;
    returnText.textContent = "Expected Return: " + expectedReturn.toFixed(2) + "%";

    
}


bonds.addEventListener("input", updateValues);
stocks.addEventListener("input", updateValues);
cash.addEventListener("input", updateValues);

function activateCustomMode() {
    document.getElementById('custom-builderbox').style.display = 'none';
    document.getElementById('custom-sliders').style.display = 'block';
}

function deactivateCustomMode() {
    document.getElementById('custom-builderbox').style.display = 'block';
    document.getElementById('custom-sliders').style.display = 'none';
}