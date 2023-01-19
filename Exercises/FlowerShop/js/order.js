class Orders{
    constructor(){
        this.totalPrice = 0;
        this.basket = [];
    }

    getTotalPrice() {
        this.totalPrice = 0;
        for (const product of this.basket) {
            this.totalPrice += product.price * product.count;
        }
        return this.totalPrice
    }

    printOrder(){
        var receipt = "<h2>Your Order:</h2>"

        for (const product of this.basket) {
            receipt += ">> " + product.count + " * " + product.productName + " : € " + product.price + "</br>"
        }
        
        receipt += "<h3>Total price: € " + this.getTotalPrice() + "</h3></br>"
        document.getElementById('showReceipt').innerHTML = receipt;
    }

    displayQuantity(product) {
        var quantityElement = document.getElementById("product" + product.productName + "-quantity");
        quantityElement.value = product.count;
    }
    
      
    addOthersToBasket() {
        if(document.getElementById('accessories').checked) {
            accessories.count = 1
            this.basket.push(accessories)
        } else{
            this.basket = this.basket.filter(function (item) {
                return item.productName !== accessories.productName;
            })
        }
        if(document.getElementById('vase').checked) {
            vase.count = 1
            this.basket.push(vase)        
        } else {
            this.basket = this.basket.filter(function (item) {
                return item.productName !== vase.productName;
            })
        }
    }
    
    addProduct(product) {
        if(product.count === 0){
        this.basket.push(product);
        } 
        //product.count++;
        product.increaseCount();
        this.displayQuantity(product);
    }

    removeProduct(product) {

        if ( product.count === 0 ) {
            return;
        }
        //product.count--;
        product.decreaseCount();
        if ( product.count === 0 ) {

            this.basket = this.basket.filter(function (item) {
                return item.productName !== product.productName;
            })
        }

        this.displayQuantity(product);

    }
    
}