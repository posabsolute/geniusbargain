dealapp.layout = {
    loadIndicator : function (deals) {
        var $indicator = $(this.componentHTML.indicator(deals)),
            self = this;
        $indicator.data("deals", deals);

        $indicator.on("click", function(){ self.loadDealWidget($(this).data("deals")); return false;});
        $indicator.on("click", ".warriorDealIndicatorClose", function(){ self.closeIndicator(); return false;});

        $("body").append($indicator);
        $indicator.animate({
            opacity:1,
            marginRight:0
        });
    },
    closeIndicator : function(){
        $("#warriorDealIndicator").remove();
    },
    loadDealWidget : function(deals){
        var $widget = $(this.componentHTML.widget());
            $iframeContent = $(this.componentHTML.iframeContent(deals));

        $("body").append($widget);
        $("#warriorDealWidgetIframe").contents().find("body").html($iframeContent);
        this.closeIndicator();
        $widget.animate({
            opacity:1,
            marginRight:0
        });
    },
    componentHTML : {
        indicator : function(deals){
            var css = "position:fixed;\
                display:block;\
                width:80px; height:90px;\
                border-top-left-radius:5px;\
                border-bottom-left-radius:5px;\
                z-index:100000;\
                cursor:pointer;\
                border-left:1px solid #999;\
                border-top:1px solid #999;\
                border-bottom:1px solid #999;\
                top:40px;right:0px;\
                margin-right:-83px;\
                opacity:0;\
                background:#fff;\
                font-size:14px;\
                padding:10px;\
                color:#333;\
                font-family:arial;";
            return "<div id='warriorDealIndicator' style='"+css+"'>found "+deals.length+" better deal<a class='warriorDealIndicatorClose' style='position:absolute; top:5px; right:5px;'>x</a></div>";
        },
        widget : function(){
            return "<div id='warriorDealWidget' style='position:fixed; top:40px; right:0px; z-index:10000; margin-right:-500px; opacity:0; width:500px; height:300px; padding:20px; background:#fff;'>\
                        <iframe id='warriorDealWidgetIframe' style='width:100%; height:400px;border:none;'></iframe>\
                    </div>";
        },
        iframeContent : function(deals){
            var dealsContent = "",
                self = this;

            $.each(deals, function(i, deal){ dealsContent += self.dealItem(deal); });

            return "\
            <style>\
            table td{padding:5px;}\
            td.name{overflow:hidden;text-overflow:ellipsis;}\
            </style>\
            <p>We have found "+deals.length+" better deals</p>\
                        <table>"+dealsContent+"</table>";
        },
        dealItem : function(deal){

            return "<tr>\
                    <td><a target='_parent' href='"+deal.url+"'><img class='storeLogo' src='"+deal.store.logo+"' /></a></td>\
                    <td class='name'><a target='_parent' href='"+deal.url+"'>"+deal.name+"</a></td>\
                    <td><a target='_parent' href='"+deal.url+"'>$"+deal.price+"</a></td></tr>";
        }
    }
};