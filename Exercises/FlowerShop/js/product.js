class Product {

    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
        this.count = 0;
    }

    increaseCount() {
        this.count++
    }

    decreaseCount(){
        this.count--
    }
}