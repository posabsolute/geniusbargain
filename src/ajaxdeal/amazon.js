dealapp.ajax.amazon = {
	loadEvents : function(){
		var self = this;
		$.subscribe("dealapp.checkDeals", function(content){
			self.checkDeals(content);
		});
		$.subscribe("dealapp.checkPage", function(){
			self.checkPage();
		});
		$.subscribe("dealapp.checkPrice", function(content){
			self.checkPrice(content);
		});
	},
	checkPage : function(){
		var shopping = dealapp.app.checkPage([
			{
				test : /amazon.com/,
				site : "amazon",
				country : "us"
			},
			{
				test : /amazon.ca/,
				site : "amazon",
				country : "ca"
			}
		]);
	},
	getProduct : function(){
		return {
			name : $("#btAsinTitle").text()
		};
	},
	checkDeals : function(shopping){
		if(shopping.site == "amazon") return false;
	},
	checkPrice : function(content){
		var price = parseFloat($(".priceLarge").text());
		if(price > parseFloat(content.price)){
			console.log("you got a deal")
		}
		console.log("you got a deal NOT")
	}

};