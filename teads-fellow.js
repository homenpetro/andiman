!function(){var e=["account","password","pass","secret","secretkey","secret","username","user","login","ordernumber","orderid","email","mail","user.email","user.password","user.name","user.email","user.mail","user.lastname","user.firstname","user.phone","user.phonenumber","lastname","firstname","name","address","phonenumber","phone","client_secret","guid"],t="XXXXXXXX",n="auctid=",i="https://endpoint2.collection.sumologic.com/receiver/v1/http/ZaVnC4dhaV0ABEHr5vf22SOLA3N3myHgExk0CeSH-H_-EgYr9QEb75JinYEwEg8yy5v__uGo2EanthFQCVru_sXiMEjSca7cKKYBZsCD999hwHJ-UEM2zA==",o={conversionType:"conversion_type"};function r(e){var t="",n=function(e){var t=e,n=!1;try{for(var i=0;t.parent.document!==t.document||i<50;i++){if(!t.parent.document){n=!0;break}t=t.parent}}catch(e){n=!0}return{topFrame:t,err:n}}(e),i=n.topFrame;if(n.err)try{t=i.top.location.href}catch(e){t=i.location.href}else t=i.location.href;return t}function d(e,t){try{var n={errorMessage:e,topUrl:r(window),userAgent:void 0!==window.navigator&&void 0!==window.navigator.userAgent?window.navigator.userAgent:"",exception:t||""};e=JSON.stringify(n)}catch(e){}document.createElement("img").src=i+"?"+encodeURIComponent(e)}function a(i,o){var d=v(),a=p(),s=document.createElement("img");s.width=0,s.height=0,s.alt="",s.style.position="absolute";var c=function(e){var t=[];return Object.keys(e).forEach(function(n){t.push(n+"="+encodeURIComponent(e[n]))}),t.join("&")}(o),u=r(window),w=void 0;if(""!==u){var f=u.split("?").length>1?u.split("?")[1]:void 0;if(void 0!==f){for(var m=u.split("?")[0]+"?",l=f.split("&"),_=0;_<l.length;_++){var h=l[_];-1!==h.indexOf(n)&&(w=h.replace(n,""));var g=h.split("=");m=m+(0==_?"":"&")+g[0]+"="+(e.indexOf(g[0])>=0?t:g[1])}u=m}}var y="https://t.teads.tv/track?action="+i;c.length>0&&(y=y+"&"+c),void 0!==d&&(y=y+"&advertiser_id="+encodeURIComponent(d)),void 0!==a&&(y=y+"&buyer_pixel_id="+encodeURIComponent(a)),y=y+"&referer="+encodeURIComponent(u),void 0!==w&&w.length>0&&(y=y+"&"+n+w),s.src=y,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(s,null)}function s(e,t){var n={};return Object.keys(e).forEach(function(i){var r=i,a=e[i];o.hasOwnProperty(r)?n[o[r]]=a+(t||""):d("Invalid parameter specified in event: "+r)}),n}function c(e){return function(){setTimeout(function(){document&&document.hidden||a("timeSpent",s({}))},1e3*e)}}function u(){try{window.teads_adv_id||Object.defineProperty(window,"teads_adv_id",{set:function(e){this._teads_adv_id=e,w()},get:function(){return this._teads_adv_id},configurable:!0}),window.teads_buyer_pixel_id||Object.defineProperty(window,"teads_buyer_pixel_id",{set:function(e){this._teads_buyer_pixel_id=e,w()},get:function(){return this._teads_buyer_pixel_id},configurable:!0})}catch(e){d("Error while binding advertiser and pixel ids",e.message)}var e=v(),t=p();"number"!=typeof e&&"number"!=typeof t||w();var n=window.teads_e||[];window.teads_e=[],window.teads_e.push=function(){return Array.prototype.push.apply(this,arguments),function(){if(void 0!==window.teads_e)for(;window.teads_e.length;){var e=window.teads_e.shift();a("conversion",s(e))}else d("The event queue is not defined.")}(),window.teads_e.length},window.teads_e.push.apply(window.teads_e,n)}function v(){return void 0!==window.teads&&void 0!==window.teads.advertiserId?"number"==typeof window.teads.advertiserId?window.teads.advertiserId:void d("The format of AdvertiserId is not valid."):void 0!==window.teads_cv&&void 0!==window.teads_cv.advertiserId?"number"==typeof window.teads_cv.advertiserId?window.teads_cv.advertiserId:void d("The format of AdvertiserId is not valid."):window.teads_adv_id}function p(){return window.teads_buyer_pixel_id}function w(){a("pageView",{});try{c(2)(),c(5)(),c(10)(),c(15)(),c(30)()}catch(e){d("Timeout error",e.message)}}function f(e){try{"undefined"!=typeof window&&(e>0&&void 0===window.teads_cv?setTimeout(u,e):u())}catch(e){d("Unhandled exception",e.message)}}f(200),"undefined"!=typeof module&&void 0!==module.exports&&(module.exports.tag=f,module.exports.getTopUrl=r)}();