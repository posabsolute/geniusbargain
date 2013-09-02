dealapp.check = {

    loadApi : function (search) {
        if(!search) return false;
        var self = this;
        return $.ajax({
          beforeSend: function (request)
          {
            request.setRequestHeader("X_Public_Key", "098234234230429348234230498");
          },
          url: "http://api.geniusbargain.com?q="+search,
          type: 'get',
          dataType: 'xml'
        });
        
    }
};