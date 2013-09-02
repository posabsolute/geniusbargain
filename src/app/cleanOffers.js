dealapp.cleanOffers = {
    get : function(xml, product){
        var $xml = $(xml),
            goodOffers = [],
            self = this,
            $products = $xml.find("product");

        if(!$products || !$products.length) return [];

        this.getSimilarity($products, product.title);
        
        $products.each(function(){
            var $offerlist = $(this).find("offer");
            $offerlist.each(function(){
                var $item = $(this);
                var offerPrice = parseInt($item.find("price").text(),10);
                // Check if price is lower
                if(product.price > offerPrice){
                    var title = $item.children("name").text();
                    // check if title matcg
                    if(self.similarText(dealapp.utils.subs(title) ,product.title) < 35) return true;
                    goodOffers.push({
                        name: $item.children("name").text(),
                        price : $item.find("price").text(),
                        url : $item.find("url").text(),
                        store : {
                            name : $item.find("store name").text(),
                            logo : $item.find("store logo").text()
                        }
                    });
                }

            });
        });
    
        goodOffers.sort(comparePrice);

        function comparePrice(a,b){
            if (a.price < b.price)
                return 1;
            if (a.price > b.price)
                return -1;
            return 0;
        }

        return goodOffers;
    },
    getSimilarity : function (products, title) {
        var productslist = [],
            self = this;
        products.each(function(){
            var $item = $(this);
            var itemtitle = $item.find("name:first").text();
            this.similarity = self.similarText(dealapp.utils.subs(itemtitle)  , title);
            productslist.push(this);
        });
        products.sort(compareSimilarText);
        /*
        products.each(function(){
            var $item = $(this);
            console.log($item.children("name").text())
            console.log(dealapp.utils.subs($item.children("name").text()));
            console.log(title);
            console.log(this.similarity);
        });
        */
        function compareSimilarText(a,b){
            if (a.similarity < b.similarity)
                return 1;
            if (a.similarity > b.similarity)
                return -1;
            return 0;
        }
    },
    similarText : function(a,b) {
        var lengthA = a.length;
        var lengthB = b.length;
        var equivalency = 0;
        var minLength = (a.length > b.length) ? b.length : a.length;
        var maxLength = (a.length < b.length) ? b.length : a.length;
        for(var i = 0; i < minLength; i++) {
            if(a[i] == b[i]) {
                equivalency++;
            }
        }
        var weight = equivalency / maxLength;
        return (weight * 100);
    }
};