var cart = {};

$('document').ready(function(){
    loadGoods();
    checkCart();
});

function loadGoods(){
    $.getJSON('http://myjson.dit.upm.es/api/bins/dnq9', function(data){
        var out = '';
        for (var key in data){
            if (('Санфаянс'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#goods').html(out);
        $('button.goods__add-btn').on('click', addToCart);
    });
}

function addToCart(){
    var articul = $(this).attr('articul');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}

function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}
