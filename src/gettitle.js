dealapp.getProduct = {
    get : function(){
        var url = location.href,
            title = "",
            price = "";

        if(/amazon.com/.test(url)){
            title = $("#btAsinTitle").text();
            price = $("#actualPriceValue").text();
        }else if(/walmart.com/.test(url)){
            title = $(".productTitle").text();
            price = $(".bigPriceText1").text();

        }else if(/ebay.com/.test(url)){
            title = $("#itemTitle").text();
            price = $("#vi-price").text();
        }else if(/bestbuy.com/.test(url)){
            title = $("#sku-title h1").text();
            price = $("#saletext .price").text();
        }else if(/target.com/.test(url)){
            title = $(".primaryInfo h2").text();
            price = $("#price_main .price").text();
        }else if(/homedepot.com/.test(url)){
            title = $("h1.product_title").text();
            price = $("#ajaxPrice").text();
        }else if(/newegg.com/.test(url)){
            title = $("h1 span:first").text();
            price = $(".price-current-label").text();
        }else if(/sears.com/.test(url)){
            title = $(".productName h1").text();
            price = $("#bigPriceText1").text();
        }else if(/macys.com/.test(url)){
            title = $("h1#productTitle").text();
            price = $("#bigPriceText1").text();
        }else if(/lowes.com/.test(url)){
            title = $(".itemInfo h1").text();
            price = $("#bigPriceText1").text();
        }

        if(price){
            var stringPrice =  price.replace(/([^0-9.])+/i, "").replace(/,/g,''),
                currentPrice = parseFloat(stringPrice);
        }
        if(title && title.length > 45){
            var currentTitle = dealapp.utils.subs(title);
        }
        return {
            title : currentTitle,
            encodedTitle : encodeURIComponent(currentTitle),
            price : currentPrice
        };
    }
    
};