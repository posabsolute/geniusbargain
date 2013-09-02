dealapp.ajax.newegg = {
    url: "http://www.amazon.com",
    loadEvents : function(){
        var self = this;
        $.subscribe("dealapp.checkDeals", function(content){
            self.checkDeals(content);
        });
        $.subscribe("dealapp.checkPage", function(){
            self.checkPage();
        });
    },
    checkPage : function(){

        var shopping = dealapp.app.checkPage([
            {
                test : /newegg.com/,
                site : "newegg",
                country : "us"
            },
            {
                test : /newegg.ca/,
                site : "newegg",
                country : "ca"
            }
        ]);
    },
    getProduct : function(){
        return {
            name : $("h1").text()
        };
    },
    checkDeals : function(content){
        if(content.site == "newegg") return false;

        var self = this;
        $.ajax({
            url: 'http://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&N=-1&isNodeId=1&Description='+content.product.name+'+&x=0&y=0',
            type: 'GET',
            dataType: 'html',
            success: function(data, textStatus, xhr) {
                var $frag = $(data),
                    productName = $frag.find(".productList .itemText:first .itemDescription:first").html(),
                    productLink = $frag.find(".productList .itemText:first a:first").attr("href");
                    self.loadProductPage(productLink);
            },
            error:function(data){
            }
        });
        
        
    },
    loadProductPage : function (link) {
        alert(link)
        $.ajax({
          url: link,
          type: 'GET',
          dataType: 'html',
          success: function(data, textStatus, xhr) {
            var $frag = $(data),
                content = {
                    price : $frag.find(".price-current").attr("content"),
                    img : $frag.find(".mainSlide img").attr("src"),
                    link : link
                }
                $.publish("dealapp.checkPrice", [content]); 
          }
        });
    }

};

