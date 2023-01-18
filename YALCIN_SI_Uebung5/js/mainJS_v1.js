function Product(name, price) {
    this.name = name;
    this.price = price;
}

const cheeseBurger = new Product("CheeseBurger", 5);
const pommes = new Product("Pommes", 3.5);
const salat = new Product("Salat", 2);
const drink = new Product("Drink ", 3);


function Order() {

    this.products = [];
    this.totalPrice = 0;
    this.discountAmount = 0;

    this.addProduct = function (product) {
        if(this.isAllowedToAdd(product)) {
            this.products.push(product);
            this.totalPrice += product.price;
        }
    }

    this.isAllowedToAdd = function(product)
    {
        if ( product.name === pommes.name ) {

            const hasSalat = this.products.filter(p => p.name === salat.name);
            return hasSalat.length === 0;
        } else if ( product.name === salat.name ) {
            const hasPommes = this.products.filter(p => p.name === pommes.name);
            return hasPommes.length === 0;
        }

        return true;
    }



    this.applyDiscount = function () {
        if (this.totalPrice > 10) {
            this.discountAmount = this.totalPrice * 0.15;
            const num = Number(this.discountAmount);
            this.discountAmount = num.toPrecision(4);
            this.totalPrice -= this.discountAmount;
        }
    }


    this.printReceipt = function() {
        console.log("Products:");
        for (const product of this.products) {
            console.log("- "+ product.name + ": €" + product.price);
        }
        if (this.discountAmount) {
            console.log("Discount: € " + this.discountAmount);
        }
        console.log("Total price: €" + this.totalPrice);
    }
}

const order = new Order();

order.addProduct(cheeseBurger);
order.addProduct(pommes);
order.addProduct(salat);
order.addProduct(drink)
order.applyDiscount();
order.printReceipt();







