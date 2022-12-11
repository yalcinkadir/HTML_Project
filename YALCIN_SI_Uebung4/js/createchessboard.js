function white() {
    
    const cols = {0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H"}
    const table = document.createElement("table");
    table.className = "board";
    for (let i = 1; i < 9; i++) {
        let tr = document.createElement('tr');
        tr.dataset.line = i
        for (let j = 1; j < 9; j++) {
            let td = document.createElement('td');
            td.dataset.col = cols[j - 1];
            td.dataset.line = i;
            td.className = (i % 2 === j % 2) ? "white square" : "black square";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.querySelector("div").appendChild(table);
}

function black() {

    const cols = {0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H"}
    const table = document.createElement("table");
    table.className = "board";
    for (let i = 1; i < 9; i++) {
        let tr = document.createElement('tr');
        tr.dataset.line = i
        for (let j = 1; j < 9; j++) {
            let td = document.createElement('td');
            td.dataset.col = cols[j - 1];
            td.dataset.line = i;
            td.className = (i % 2 != j % 2) ? "white square" : "black square";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.querySelector("div").appendChild(table);
}