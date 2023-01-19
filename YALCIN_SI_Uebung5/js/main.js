let cheeseBurger, pommes, salat, getraenk
let ordered
let personData
require(['js/product'], function (product) {

    cheeseBurger = new Product("CheeseBurger", 5);
    pommes = new Product("Pommes", 3.5);
    salat = new Product("Salat", 2);
    getraenk = new Product("Getraenk ", 3);

});

require(['js/order'], function (order) {
    ordered = new Order();

});

require(['js/person'], function (person) {
    personData = new Person();

});

function addGetraenk(element) {
    if ( element.checked ) {
        ordered.addProduct(getraenk)
    } else {
        ordered.removeProduct(getraenk)
    }
}

//order.addProduct(cheeseBurger);
//order.addProduct(pommes);
//order.addProduct(salat);
//order.addProduct(getraenk)
//order.applyDiscount();
//order.printReceipt();