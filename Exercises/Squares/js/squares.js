class Squares {
    constructor(limit) {
        this.limit = limit;
        this.list = document.createElement("ul");
        document.body.appendChild(this.list);
    }

    generateList() {
        for (let i = 1; i <= this.limit; i++) {
            let item = document.createElement("li");
            item.innerHTML = i + ". " + (i * i);
            this.list.appendChild(item);
        }
    }

    clearList() {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }
    }

    updateLimit(newLimit) {
        this.limit = newLimit;
    }
}

let input = document.createElement("input");
document.body.appendChild(input);

let button = document.createElement("button");
button.innerHTML = "Generate List";
document.body.appendChild(button);

let squares = new Squares(0);

button.addEventListener("click", function () {
    squares.clearList();
    squares.updateLimit(input.value);
    squares.generateList();
});


