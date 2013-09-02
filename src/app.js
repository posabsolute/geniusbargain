dealapp.app = {
    loadEvents : function(){
        var self = this;
        this.getDeal();
    },
    getDeal : function(){
        var product = dealapp.getProduct.get(),
            self = this;

        if(product.title && product.price){
            dealapp.check.loadApi(product.encodedTitle).done(function(data, textStatus, xhr){
                self.loadDeal(data, product);
            });
        }

    },
    loadDeal : function (xml, product) {
        var deals = dealapp.cleanOffers.get(xml, product);
        if(deals.length) dealapp.layout.loadIndicator(deals);
    },
 
};

dealapp.app.loadEvents();