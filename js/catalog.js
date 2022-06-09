var cart = {};

$('document').ready(function(){
    loadSanfayans();
    loadBaths();
    loadMixers();
    loadSiphons();
    checkCart();
});

function loadSanfayans(){
    $.getJSON('db.json', function(data){
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
        $('#sanfayans').html(out);
    });
}
function loadBaths(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Ванны'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#baths').html(out);
    });
}
function loadMixers(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Смесители'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#mixers').html(out);
    });
}
function loadSiphons(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Сифоны'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#siphons').html(out);
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
}

function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}
