var cart = {};

$.getJSON('http://myjson.dit.upm.es/api/bins/47g9', function(data){
    var goods = data;
    checkCart();
});

function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}