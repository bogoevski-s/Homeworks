let rowInput = document.getElementById("rows");
let colInput = document.getElementById("col");
let button = document.getElementById("btn");
let table = document.getElementById("mainTable");

function createTable(rowValue,colValue) {
    rowValue = parseInt(rowInput.value);
    colValue = parseInt(colInput.value);
    let tbody = document.createElement("tbody");

    for (let i = 0; i < rowValue; i++) {
        let tableRow = document.createElement("tr")
        for (let j = 0; j < colValue; j++) {
            let tableData = document.createElement("td")
            tableData.innerText += `row-${i + 1} \n col-${j + 1}`;
            tableRow.appendChild(tableData);
        }
        tbody.appendChild(tableRow);
    }
    table.setAttribute("border", "2")
    table.appendChild(tbody);
}
button.addEventListener('click', createTable);






