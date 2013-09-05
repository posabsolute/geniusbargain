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
            price = $(".camelPrice").text();

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
            price = $(".youPay .pricing").text();
        }else if(/macys.com/.test(url)){
            title = $("h1#productTitle").text();
            price = $("#priceInfo").text();
        }else if(/zappos.com/.test(url)){
            title = $("h1.title").text();
            price = $(".nowPrice").text();
        }else if(/dx.com/.test(url)){
            title = $("h1 #headline").text();
            price = $("#price").text();
        }else if(/barnesandnoble.com/.test(url)){
            title = $("h1.milo").text();
            price = $(".price").text();
        }else if(/overstock.com/.test(url)){
            title = $("#prod_mainCenter h1").text();
            price = $(".Ovalue").text();
        }else if(/staples.com/.test(url)){
            title = $(".productDetails h1").text();
            price = $(".finalPrice").text();
        }else if(/tigerdirect.com/.test(url)){
            title = $(".prodName h1").text();
            price = $(".salePrice").text();
        }else if(/store.sony.com/.test(url)){
            title = $("h1.productName").text();
            price = $(".productDollars").text();
        }else if(/gamestop.com/.test(url)){
            title = $("h1").text();
            price = $(".buy1 h3").text();
        }else if(/qvc.com/.test(url)){
            title = $("h1.fn").text();
            price = $("#parProductDetailPrice").text();
        }


        if(price){
            var stringPrice =  price.replace(/([^0-9.])+/i, "").replace(/,/g,''),
                currentPrice = parseFloat(stringPrice);
        }
        var currentTitle = dealapp.utils.subs(title);

        return {
            title : currentTitle,
            encodedTitle : encodeURIComponent(currentTitle),
            price : currentPrice
        };
    }
    
};