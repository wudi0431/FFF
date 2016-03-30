define(["zepto","H5ToNative"],function(e,t){function u(e){return!e||e.indexOf("http://")!=0&&e.indexOf("https://")!=0?!1:!0}function a(e,t,n){var r="[http://|https://][\\w\\.]+yhd\\.com";t&&t.indexOf("yhd")==-1&&t.indexOf("com")==-1?r="[http://|https://]"+t+"\\.yhd\\.com":t&&(r=t);var i="(/)?[^/]{0,}$";return n!=null&&n==0&&(i="[^/]{0,}$"),e==null&&(e=""),RegExp(r+e+i)}function l(e){if(u(e))for(var t=0;t<f.length;t++)if(f[t][0].test(e))return t;return-1}var n={},r=1,i={},s=[],o=!1,f=[[a("/m/login_input.do","passport",!1),"yhd://login/",null],[a("/store/m-(\\d{1,11})(-\\d{1,2})?.html","(http://|https://)[\\w\\.]+yhd\\.com",!1),"yhd://web/",'"url":"${0}","type":1,"targetUrlIntent":"yhd://mallshopsearch?merchantId=${2}"'],[a("/mw/store/(\\d{1,11})(/\\d{1,2})?","(http://|https://)[\\w\\.]+yhd\\.com",!1),"yhd://web/",'"url":"${0}","type":1,"targetUrlIntent":"yhd://mallshopsearch?merchantId=${2}"'],[a("/item/(\\d{1,11})",null,!1),"yhd://detail/",'"pmId":${1}'],[a("/item/lp/(\\d{1,11})_(\\d{1,11})",null,!1),"yhd://detail/",'"pmId":${2},"promotionId":"${1}_landingpage"'],[a("/mingpin/list/(\\d{1,11})(/\\d{1,2})?"),"yhd://flashbuyproductlist/",'"flashbuyId":${1}'],[a("/mingpin/item/(\\d{1,11})_(\\d{1,11})(/(\\d{1,2})/)?(/?[^/]{0,}categoryId=(\\d{1,11}))?",null,!1),"yhd://flashbuyproductdetail/",'"flashbuyId":${1},"productId":${2}'],[a("/mingpin/category/(\\d{1,11})"),"yhd://flashbuyhome/",'"categoryId":${1}'],[a("/mingpin"),"yhd://flashbuyhome/",null],[a("/tuan"),"yhd://grouponhome/",null],[a("","http://t.m.yhd.com(/\\d{1,2})?",!1),"yhd://grouponhome/",null],[a("/tuan/[^/\\.]{0,}c(\\d{1,11})[^/\\.]{0,}.html\\?nid=(\\d{1,11})"),"yhd://productgroupon/",'"grouponType":0,"categoryId":${2}'],[a("/[^/\\.]{0,}c(\\d{1,11})[^/\\.]{0,}.html\\?nid=(\\d{1,11})","http://t.m.yhd.com"),"yhd://productgroupon/",'"grouponType":0,"categoryId":${2}'],[a("/(p\\d{1,2}-)?vt100(-c-1-st0.html)?","http://t.m.yhd.com",!1),"yhd://productgroupon/",'"grouponType":0,"grouponNum":100'],[a("/(p\\d{1,2}-)?vt2(-c-1-st0.html)?","http://t.m.yhd.com",!1),"yhd://productgroupon/",'"grouponType":1,"grouponNum":100'],[a("/(p\\d{1,2}-)?vt3(-c-1-st0.html)?","http://t.m.yhd.com",!1),"yhd://grouponsoon/",null],[a("/tuan/detail/(\\d{1,11})",null,!1),"yhd://grouponsummary/",'"grouponid":${1}'],[a("/detail/(\\d{1,11})","http://t.m.yhd.com",!1),"yhd://grouponsummary/",'"grouponid":${1}'],[a("/tuan/brand",null,!1),"yhd://brandgroupon/",null],[a("/brand(/\\d{1,2})?","http://t.m.yhd.com",!1),"yhd://brandgroupon/",null],[a("/tuan/detailBrand/(\\d{1,11})(-\\d{1,2})?",null,!1),"yhd://brandgroupondetail/",'"brandId":${1}'],[a("/detailBrand/(\\d{1,11})(-\\d{1,2})?","http://t.m.yhd.com",!1),"yhd://brandgroupondetail/",'"brandId":${1}'],[a("/clock","http://t.m.yhd.com",!0),"yhd://oclockGroupon/",'"title":"金牌秒杀"'],[a("/search/\\?req.keyword=([^&/=]{1,})",null,!1),"yhd://search/",'"keyword":"${1}"'],[a("/search/k([^?&=/]{2,})/[^?&=/]*s(\\d+)",null,!1),"yhd://search/",'"keyword":"${1}","sortType":"${2}"'],[a("/search/k([^?&=/]{2,})",null,!1),"yhd://search/",'"keyword":"${1}"'],[a("/search/c(\\d{1,11})/p(\\d)+-s(\\d)+/",null,!1),"yhd://search/",'"categoryId":${1},"name":"#{name}","virtualflag":#{virtualflag}'],[a("/search/p(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?.*pmid=(\\d+)",null,!1),"yhd://salespromotion/",'"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"merchantId":#{merchantId},"pmId":${3}'],[a("/search/n(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?.*pmid=(\\d+)",null,!1),"yhd://salespromotion/",'"promotionType":2,"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"conditionValue":0,"merchantId":#{merchantId},"pmId":${3}'],[a("/search/p(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?",null,!1),"yhd://salespromotion/",'"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"merchantId":#{merchantId}'],[a("/search/n(\\d{1,11})-pl(\\d{1,11})-[^?]{1,}\\?",null,!1),"yhd://salespromotion/",'"promotionType":2,"promotionId":${1},"promotionLevelId":${2},"promotionLevel":${2},"conditionValue":0,"merchantId":#{merchantId}'],[a("/search/c(\\d{1,11})/k([^?=/&]{2,})",null,!1),"yhd://search/",'"categoryId":${1},"keyword":"${2}"'],[a("(/)?",null,!1),"yhd://home/",null]];return n._getCallid=function(){return r++,i[r]?n._getCallid:(i[r]={},r)},n.ajax=function(r){if(t.yhdplatform.isother())e.ajax(r);else if(r.venusUrl){var o=n._getCallid();r.success&&(i[o].success=r.success);var u=[],a="";if(r.data){for(var f in data)u.push(f+"="+data[f]);a=u.join("&")}var l={callid:o,urlPath:r.venusUrl,params:a},a=JSON.stringify(l);s.push({callid:o,type:"getRemoteData",paramsStr:a}),n.runQueue()}},n.addNativeListener=function(){return t.yhdplatform.isother()?!1:(e("body").on("click","a,area",function(n){n.preventDefault();var r=e(this),i=e.trim(r.attr("href"));if(u(i)){var s={},o=l(i),a="";if(o>=0){if(f[o][2]){a=f[o][2];var c=i.match(f[o][0]),h=new RegExp("\\d{1,3}"),p=new RegExp("\\$\\{(\\d{1,3})\\}","g"),d=a.match(p);if(d&&d.length>0&&d.length<=c.length)for(var v=0;v<d.length;v++)a=a.replace(d[v],c[d[v].match(h)[0]]);var m=new RegExp("#\\{([a-zA-Z0-9_]{1,30})\\}","g"),g=a.match(m);if(g&&g.length>0){var y=url.getParams(i);for(var b=0;b<g.length;b++){var w=g[b].match("[a-zA-Z0-9_]{1,30}")[0];if(!y[w])return!0;a=a.replace(g[b],y[w])}}}return a.length>0&&(a+=","),a="{"+a+"}",t.goToNative(f[o][1],a),!1}return!0}}),!0)},n.runQueue=function(){if(!!o)return;if(s.length===0)return;switch(s[0].type){case"getRemoteData":t.getRemoteData(s[0].paramsStr),o=!0;break;case"goToNative":t.goToNative(s[0].paramsStr),o=!0;break;default:s.shift(),n.runQueue()}},window.nativeCallback=function(e,t){i[e]&&i[e].success&&i[e].success.apply(null,[t]),s=s.filter(function(t,n){return t.callid!=e}),o=!1,n.runQueue()},n});