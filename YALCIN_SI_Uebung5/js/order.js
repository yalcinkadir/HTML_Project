class Order {
    constructor() {
        this.products = [];
        this.discountAmount = 0;
        this.totalPrice = 0;
    }

    addProduct(product) {
        if ( this.isProductReadyToAdd(product) ) {
            if ( product.count === 0 ) {
                this.products.push(product);
            }
            product.count++;

            if ( product.name === cheeseBurger.name ) {
                document.getElementById("count_cheeseBurger").innerText = product.count;
                document.getElementById("geschenk").style.display = "block";

            }
        }
    }

    removeProduct(product) {

        if ( product.count === 0 ) {
            return;
        }
        product.count--;
        if ( product.count === 0 ) {

            if ( product.name === cheeseBurger.name ) {
                document.getElementById("geschenk").style.display = "none";

            }
            this.products = this.products.filter(function (item) {
                return item.name !== product.name;
            })
        }

        if ( product.name === cheeseBurger.name ) {
            document.getElementById("count_cheeseBurger").innerText = product.count;

        }
    }

    isProductReadyToAdd(product) {
        let productToRemove = null;
        if ( product.name === pommes.name ) {
            productToRemove = salat;
        } else if ( product.name === salat.name ) {
            productToRemove = pommes;
        }

        if ( productToRemove ) {
            this.products = this.products.filter(function (item) {
                return item.name !== productToRemove.name;
            })
        }

        return true;
    }

    getTotalPrice() {
        this.totalPrice = 0;
        for (const product of this.products) {
            this.totalPrice += product.price * product.count;
        }
    }

    applyDiscount() {

        this.getTotalPrice();

        if ( this.totalPrice > 10 ) {
            this.discountAmount = this.totalPrice * 0.15;
            const num = Number(this.discountAmount);
            this.discountAmount = num.toPrecision(4);
            this.totalPrice -= this.discountAmount;
        } else {
            this.discountAmount = 0;
        }
    }

    printReceipt() {

        this.applyDiscount();

        var receipt = "<h2>Hello " + personData.name + "! Your Order:</h2>"

        for (const product of this.products) {
            receipt += ">> " + product.count + " * " + product.name + " : € " + product.price + "</br>"
        }
        if ( this.discountAmount ) {
            receipt += "Discount of 15%: € " + this.discountAmount + "</br>"
        }

        receipt += "Total price: € " + this.totalPrice + "</br>"
        document.getElementById('showReceipt').innerHTML = receipt;
    }
}