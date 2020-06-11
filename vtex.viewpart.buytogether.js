﻿/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="vtex.common.js" />
/// <reference path="vtex.jsevents.js" />
/// <reference path="vtex.skuEvents.js" />

$(document).ready(function() {
var buyTogetherListener = new Vtex.JSEvents.Listener('buyTogetherListener', BuyTogether_OnSkuDataReceived);
skuEventDispatcher.addListener(skuDataReceivedEventName, buyTogetherListener);
});

function BuyTogether_OnSkuDataReceived(e) 
{
    var id = e.skuData.id;

    if(id > 0)
    {
//        var dataToPost = { skuId: id};
//        var url = '/comprejuntosku/' + id;
//        var dataReturn = ajaxRequest('POST', url, dataToPost, '.buy-together-content', '');
//        alert(dataReturn);
       // $('.buy-together-content').html(dataReturn);

        $.ajax({
            type: "GET",
            url: '/comprejuntosku/' + id,
            dataType: 'html',
            success: function (data) {
                if(data != "null")
                    $('.buy-together-content').html(data);
                else
                    $('.buy-together-content').html("");
            },
            error: function () {
                $('.buy-together-content').html("erro ao buscar os dados do compre junto.");
            }
        });
        
     }
     else 
     {
         $('.buy-together-content').html('<!-- Não possui nenhum compre-junto para esse Sku ' + id + ' -->');
     }
}

     