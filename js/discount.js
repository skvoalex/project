loadDiscounts();
function loadDiscounts(){
    $.getJSON('db.json', function(data){
        
        var discountCounter = 1;
        
        for (var key in data){
            if (data[key]['discount']){
            var discountVar = 'discount-item';
            var out = '';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="discounts__img" src="'+data[key]['img']+'" alt="" width="150" height="150">';
            out+='<h2 class="discounts__old-price"><strike>'+data[key]['oldPrice']+' ₽</strike></h2>';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            discountVar+=discountCounter;
            discountCounter++;
            $('#'+discountVar).html(out);
            }
        }
    });
}