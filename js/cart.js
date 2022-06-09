var cart = {};

$.getJSON('db.json', function(data){
    var goods = data;
    checkCart();
    showCart();
    getSum();
    function showCart(){
        if ($.isEmptyObject(cart)){
            var out = '<div class="cart__empty"><h1>Корзина пуста</h1><img src="images/empty-cart.png" alt=""></div>';
            var outOrder ='';
            $('#cart').html(out);
            $('#cart__order-wrapper').html(outOrder);
        }
        else {
            var out = '';
        for (var key in cart){
            out+='<div class="goods__single-product">';
            out+='<button class="cart__btn" articul="'+key+'"><img src="images/delete.png" width="30" height="30"></button>';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<div class="cart__count-wrapper">';
            out+='<button class="cart__btn-minus" articul="'+key+'"><img src="images/minus.png" width="30" height="30"></button>';
            out+='<p>Количество: '+cart[key]+'</p>';
            out+='<button class="cart__btn-plus" articul="'+key+'"><img src="images/plus.png" width="30" height="30"></button>';
            out+='</div>';
            out+='</div>';
        }
        var outOrder ='<div class="cart__order-container"><h2>Итого: </h2><h2 id="cart-sum" style="font-size: 40px"></h2>';
        outOrder +='<div class="cart__order-btn"><p>Оформить заказ</p></div>';
        $('#cart').html(out);
        $('#cart__order-wrapper').html(outOrder);
        $('.cart__btn-plus').on('click', plusGoods);
        $('.cart__btn-minus').on('click', minusGoods);
        $('.cart__btn').on('click', deleteGoods);
        }
    }
    function plusGoods(){
        var art = $(this).attr('articul');
        cart[art]++;
        saveCart();
        showCart();
        getSum();
    }
    function minusGoods(){
        var art = $(this).attr('articul');
        if (cart[art] > 1) cart[art]--;
        else delete cart[art];
        saveCart();
        showCart();
        getSum();
    }
    function deleteGoods(){
        var art = $(this).attr('articul');
        delete cart[art];
        saveCart();
        showCart();
        getSum();
    }
    function getSum(){
        var out = 0;
        for (var key in cart){
            out+=cart[key]*data[key].price;
        }
        out+='₽';
        $('#cart-sum').html(out);
    }
});

function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}
function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}