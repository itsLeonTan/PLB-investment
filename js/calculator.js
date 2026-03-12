let xValues = [];
let yValues = [];

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0.4,
            backgroundColor: "hsl(111, 41.1%, 30%)",
            borderColor: "rgba(0,0,0,0.2)",
            data: yValues
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {display:false},
            title: {
                display: false,
                // text: "Growth Over Time",
                // font: {size:16}
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Years"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Amount ($)"
                }
            }
        }
    }
});

function fillChartAndTable(xValues, yValues) {
    // Clear Arrays
    xValues.length = 0;
    yValues.length = 0;
    
    xValues.push(0);
    yValues.push(initial);
    
    let table = document.getElementById("table-breakdown");
    let sumInvested = initial;
    let sumInterest = 0;
    
    // Delete existing rows
    numRows = table.rows.length;
    for (let i = 1; i < numRows; i++) {
        table.deleteRow(1);
    }
    
    let tableRow_0 = table.insertRow();
    tableRow_0.insertCell(0).textContent = 0;
    tableRow_0.insertCell(1).textContent = "$" + initial.toLocaleString();
    tableRow_0.insertCell(2).textContent = "$0";
    tableRow_0.insertCell(3).textContent = "$" + initial.toLocaleString();

    for (let i = 1; i <= years; i++) {
        let yearlyContribution = contribution * 12;
        let currentInterest = (yValues[i - 1] + yearlyContribution) * (interest / 100);
        let currentBalance = yValues[i - 1] + yearlyContribution + currentInterest;
        xValues.push(i);
        yValues.push(currentBalance);
    
        sumInvested += yearlyContribution;
        sumInterest += currentInterest;

        let tableAddRow = table.insertRow();
        tableAddRow.insertCell(0).textContent = i;
        tableAddRow.insertCell(1).textContent = "$" + sumInvested.toLocaleString();
        tableAddRow.insertCell(2).textContent = "$" + (Math.round(sumInterest * 100) / 100).toLocaleString();
        tableAddRow.insertCell(3).textContent = "$" + (Math.round(currentBalance * 100) / 100).toLocaleString();
    }
    myChart.update();

    document.getElementById("totalInvested").textContent = "$" + (Math.round(sumInvested * 100) / 100).toLocaleString();
    document.getElementById("totalInterest").textContent = "$" + (Math.round(sumInterest * 100) / 100).toLocaleString();
    document.getElementById("finalBalance").textContent = "$" + (Math.round((sumInvested + sumInterest) * 100) / 100).toLocaleString();
}

let initial = document.getElementById("initial");
let contribution = document.getElementById("contribution");
let interest = document.getElementById("interest");
let years = document.getElementById("years");

initial.addEventListener('input', function() {
    initial = document.getElementById("initial");
    initial = Number(initial.value);
    fillChartAndTable(xValues, yValues);
});
contribution.addEventListener('input', function() {
    contribution = document.getElementById("contribution");
    contribution = Number(contribution.value);
    fillChartAndTable(xValues, yValues);
});
interest.addEventListener('input', function() {
    interest = document.getElementById("interest");
    interest = Number(interest.value);
    fillChartAndTable(xValues, yValues);
});
years.addEventListener('input', function() {
    years = document.getElementById("years");
    years = Number(years.value);
    fillChartAndTable(xValues, yValues);
});

initial = Number(initial.value);
contribution = Number(contribution.value);
interest = Number(interest.value);
years = Number(years.value);
fillChartAndTable(xValues, yValues);
