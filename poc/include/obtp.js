try{!function(t,o,r,i){"use strict";function e(){}function a(e,n,t){var r=e[n];e[n]=function(){var e=r.apply(this,arguments);return t.apply(this,arguments),e}}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}function n(){t.obApi.dispatch.apply(t.obApi,arguments)}var u="//tr.outbrain.com",s="PAGE_VIEW",d="product";n.version=t.obApi.version,n.loaded=t.obApi.loaded,n.marketerId=t.obApi.marketerId,n.queue=t.obApi.queue;var p=t.obApi=n;function m(e){var n,t,r,o=(f().split("?")[1]||"").split(/&/);for(n=0;n<o.length;n++)if(t=o[n],r=e,0===t.indexOf(r+"="))return o[n].split("=")[1].split("#")[0];return""}function f(){var n="";try{n=window.top.location.href||document.location.href}catch(e){n=document.location.href}return n||""}p.obtpVersion="1.3.3";var l,v,b,h,w,g,_,y,I,k,A,E,R,C={get:function(e){if(!document.cookie)return"";var n="";try{n=decodeURIComponent(document.cookie)}catch(e){}var t=n.indexOf(e+"=");if(t<0)return"";var r=t+(e+"=").length,o=n.indexOf(";",r),i=0<o?o:document.cookie.length;return n.substring(r,i)},set:function(e,n,t,r){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var i="expires="+o.toUTCString(),a=encodeURIComponent(e)+"="+encodeURIComponent(n)+"; "+i+"; path=/;";r&&(a+="domain="+r+";"),document.cookie=a}},O=(h=b=!(v=[]),w=function(e,n){var t=e.name===s;e.contentType===d&&n&&k(e),g(100)?_.apply(null,arguments):(y(e,n),t&&n&&I(e))},g=function(e){return Math.floor(100*Math.random())+1<=e},_=function(e,n){var t=R(e);delete t.content,delete t.contentType,t.optOut=n?"false":"true";var r=n?S():"";r&&(t.ob_click_id=r),(new o).src=u+"/unifiedPixel?"+A(t)+"&bust="+L()},y=function(e,n){var t=R(e);delete t.content,delete t.contentType,t.optOut=n?"false":"true";var r=n?S():"";r&&(t.ob_click_id=r),(new o).src=u+"/pixel?"+A(t)+"&bust="+L()},I=function(e){(new o).src="//amplifypixel.outbrain.com/pixel?mid="+e.marketerId+"&"+A({dl:e.dl||""})+"&bust="+L()},k=function(e){var n=e.content&&e.content.id||"";(new o).src="//dr.outbrain.com/pixel?mid="+e.marketerId+"&pid="+n+"&bust="+L()},A=function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join("&")},E=function(e){for(var n=[],t={},r=0;r<e.length;r++)t[e[r]]||n.push(e[r]),t[e[r]]=!0;return n},R=function(e){var n={};for(var t in e)n[t]=e[t];return n},function(){var e,n=arguments;if(!n[1])throw new Error("can't dispatch pixel, event name is missing");var t=n[0],r=n[2]&&"object"==typeof n[2]?n[2]:{};!1===c(p.marketerId)&&(p.marketerId=[p.marketerId]);var o=E(p.marketerId);for(e=0;e<o.length;e++){var i={};for(var a in r)i[a]=r[a];switch(i.marketerId=o[e].trim(),i.obApiVersion=p.version,i.obtpVersion=p.obtpVersion,i.name=n[1].replace(/ /g,"-"),i.dl=f(),t){case"track":z(i,t),N(i);break;default:x(x.LOG_TYPES.ERROR,"Command type "+t+" is not recognized",i.name)}}});function N(e){if(h)return w(e,l);v.push(e),b||(b=!0,P.checkHasConsent(function(e){for(h=!0,l=!!e;0<v.length;)w(v.shift(),l)}))}function L(){return Math.random().toString().replace(".","")}function S(){var e=m("ob_cvr_pixel_domain"),n=m("dicbo");return n?(C.set("outbrain_click_id",n,1,e),n):C.get("outbrain_click_id")}obApi.dispatch=O;var T,G,P=(T=0,{checkHasConsent:function(e){function t(){clearTimeout(T),window.removeEventListener?window.removeEventListener("message",n,!1):window.detachEvent&&window.detachEvent("message",n,!1),e.apply(e,arguments)}var r,n=function(e){var n;try{n=e&&"string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){t(!0)}n&&n.__cmpReturn&&o(t,n.__cmpReturn.returnValue,n.__cmpReturn.success)},o=function(e,n,t){if((!t||!n||!n.vendorConsents||void 0===n.vendorConsents[164]||!0===n.vendorConsents[164])&&function(e){if(!e)return 1;var n=!0;for(var t in e)if(e.hasOwnProperty(t)&&(n=!1,e[t]))return 1;return n}(n.purposeConsents))return e(!0);e(!1)};try{if(T=setTimeout(function(){t.call(e,!0)},500),window.__cmp)r=t,"function"==typeof window.__cmp?window.__cmp("getVendorConsents",[164],function(e,n){o(r,e,n)}):r(!0);else{var i,a=window;try{for(;!i&&(a.frames.__cmpLocator&&(i=a),a!==window.top);)a=a.parent}catch(e){i=window.top}if(window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent&&window.attachEvent("message",n,!1),!i)return void t({msg:"CMP not found"},!1);i.postMessage({__cmpCall:{command:"getVendorConsents",parameter:[164],callId:"obamplify"}},"*")}}catch(e){throw t(!0),e}}}),x=(function(){var e;if(r.pushState&&r.replaceState&&t.addEventListener){var n=function(){i.href!==e&&(e=i.href,obApi("track",s))};a(r,"pushState",n),a(r,"replaceState",n),t.addEventListener("popstate",n,!1)}}(),G=t.postMessage||e,V.LOG_TYPES={LOG:"log",WARNING:"warning",INFO:"info",ERROR:"error"},V);function V(e,n,t){G({action:"log",type:e,message:n,name:t?t.replace(/ /g,"-"):""},"*")}function U(){for(var e=!1;p.queue.length;){var n=p.queue.shift();if(n[1]===s&&!n[2]){if(e)continue;e=!0}p.dispatch.apply(p,n)}}var Y,D,W,M,j,q,z=(Y={USD:1,CAD:1,EUR:1,GBP:1,ILS:1,AUD:1,MXN:1,BRL:1,SEK:1,SGD:1,RUB:1,NZD:1,INR:1,JPY:1,PHP:1,CHF:1},D=new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-]*$"),W=new RegExp("^[0-9]+[.0-9]*$"),function(e,n){var t=e.contentType===d,r=e.content&&e.content.id;return!t||r&&("number"==typeof r||"string"==typeof r)?e.orderValue&&!e.currency?(x(x.LOG_TYPES.WARNING,"Order value reported but no currency is declared",e.name),!1):e.currency&&!Y.hasOwnProperty(e.currency)?(x(x.LOG_TYPES.WARNING,"Currency not recognized",e.name),!1):e.orderValue&&!W.test(e.orderValue)?(x(x.LOG_TYPES.WARNING,"Order value can only be a positive number",e.name),!1):e.name===s||D.test(e.name)?!(e.name!==s&&100<e.name.length&&(x(x.LOG_TYPES.WARNING,"Event name length cannot exceed 100 characters",e.name),1)):(x(x.LOG_TYPES.WARNING,"Event Name invalid",e.name),!1):(x(x.LOG_TYPES.WARNING,"content id is not string or number",e.name),!1)}),H="outbrain_cid_fetch";function B(){C.set(H,!0,5/1440)}C.get("outbrain_click_id")||C.get(H)||m("dicbo")?U():obApi.setCachedClickId=(M=U,q=setTimeout(function(){B(),M()},2e3),(j=document.createElement("script")).src=u+"/cachedClickId?marketerId="+(c(obApi.marketerId)?obApi.marketerId.join(","):obApi.marketerId),document.body.appendChild(j),function(e){if("NoClickId"===e)B();else{var n=m("ob_cvr_pixel_domain");C.set("outbrain_click_id",e,1,n)}window.clearTimeout(q),M()})}(window,(document,Image),history,location)}catch(e){(new Image).src="//tr.outbrain.com/log?obApiVersion="+obApi.version+"&obtpVersion="+obApi.obtpVersion+"&msg="+encodeURIComponent('{"error":"LOAD", "obApiVersion": '+obApi.version+', "marketerID": '+obApi.marketerId+', "referrer": '+document.referrer+', "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","message":"'+e.message+'"}}')}