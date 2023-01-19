require(['js/order'], function (order) {
    ordered = new Orders();
});
require(['js/product'], function (products) {
    gilly = new Product("Gilly", 5);
    rose = new Product("Rose", 9);
    vase = new Product("Vase", 25);
    accessories = new Product("Accessories", 5);
});
require(['js/customer'], function (customer) {
    customerData = new Customer();

});

 

