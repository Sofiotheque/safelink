//Mag Layout
$(".firstwd .widget-content").each(function(){var e=$(this).text();if(e.match("random")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=e.feed.entry.length;var n=0;var r=t-3;var i=Math.floor(Math.random()*(r-n+1))+n;$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+i+"&max-results=3",type:"get",dataType:"jsonp",success:function(e){var t="";var n="<ul>";for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arl-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arl-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+='<li><a href="/search/label/'+a+'" class="post-tag">'+a+"</a>"+p+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="recent-date">'+u+'</span><span class="recent-author">'+o+"</span></div></li>"}n+='<div class="clear"/></ul>';$(".firstwd .widget-content").each(function(){if($(this).text().match("random")){$(this).html(n);$(this).removeClass("widget-content").addClass("layout-content");$(".first-ld").remove();$(this).find(".arl-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}if(e.match("recent")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=3",type:"get",dataType:"jsonp",success:function(e){var t="";var n="<ul>";for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arl-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arl-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+='<li><a href="/search/label/'+a+'" class="post-tag">'+a+"</a>"+p+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="recent-date">'+u+'</span><span class="recent-author">'+o+"</span></div></li>"}n+='<div class="clear"/></ul>';$(".firstwd .widget-content").each(function(){if($(this).text().match("recent")){$(this).html(n);$(this).removeClass("widget-content").addClass("layout-content");$(".first-ld").remove();$(this).find(".arl-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}});$(".widget-content").each(function(){var e=$(this).text();if(e.match("recentcomments")){$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="recomments">';for(var r=0;r<e.feed.entry.length;r++){if(r==e.feed.entry.length)break;for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}if("content"in e.feed.entry[r]){var s=e.feed.entry[r].content.$t}else if("summary"in b_rc){var s=e.feed.entry[r].summary.$t}else var s="";var o=/<\S[^>]*>/g;s=s.replace(o,"");if(s.length>90){s=""+s.substring(0,70)+"..."}var u=e.feed.entry[r].title.$t;var a=e.feed.entry[r].author[0].name.$t;var f=e.feed.entry[r].author[0].gd$image.src;if(f.match("")){var l='<img class="rc-img" src=""/>'}else{if(f.match("")){var l='<img class="rc-img" src=""/>'}else{var l='<div class="avatarImg avatarcomments"><img class="avatarcomments" src="'+f+'"/></div>'}}n+="<li>"+l+'<a href="'+t+'">'+a+'</a><span>"'+s+'"</span></li>'}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("recentcomments")){$(this).html(n);$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}if(e.match("randomposts")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=e.feed.entry.length;var n=0;var r=t-5;var i=Math.floor(Math.random()*(r-n+1))+n;$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+i+"&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="recpost">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arl-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arl-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+="<li>"+p+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="recent-date">'+u+'</span><span class="recent-author">'+o+"</span></div></li>"}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("randomposts")){$(this).html(n);$(this).find(".arl-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}if(e.match("recentposts")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="recpost">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arl-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arl-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+="<li>"+p+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="recent-date">'+u+'</span><span class="recent-author">'+o+"</span></div></li>"}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("recentposts")){$(this).html(n);$(this).find(".arl-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}});$(".recent-wid .widget-content").each(function(){var e=$(this).html(),t=$(this).prev("h2").text();var n=e.match(/[^[\]]+(?=])/g);$(this).html("<span>"+n[0]+"</span><span>"+n[1]+"</span><span>"+n[2]+"</span>");var r=$(this).text();var i=$(this).find("span").eq(0).text();var s=$(this).find("span").eq(1).text();var o=$(this).find("span").eq(2).text();if(s.match("pmag2")){$.ajax({url:"/feeds/posts/default/-/"+i+"?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var n="";var s="<ul>";for(var u=0;u<e.feed.entry.length;u++){for(var a=0;a<e.feed.entry[u].link.length;a++){if(e.feed.entry[u].link[a].rel=="alternate"){n=e.feed.entry[u].link[a].href;break}}var f=e.feed.entry[u].title.$t;var l=e.feed.entry[u].author[0].name.$t;var c=e.feed.entry[u].published.$t.substring(0,10);var h=e.feed.entry[u].content.$t;var p=$("<div>").html(h);var d=p.find("img:first").attr("src");var v=e.feed.entry[u].media$thumbnail.url;if(u==0){var m=/<\S[^>]*>/g;var g=h.replace(m,"");if(g.length>100){g=""+g.substring(0,100)+"..."}if(d===undefined){var y='<a class="first-thumb" href="'+n+'" style="background:url('+v+') no-repeat center center;background-size: cover"/>'}else{var y='<a class="first-thumb" href="'+n+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>'}}else{if(d===undefined){var y='<a class="recent-thumb" href="'+n+'" style="background:url('+v+') no-repeat center center;background-size: cover"/>'}else{var y='<a class="recent-thumb" href="'+n+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>'}}if(u==0){s+='<div class="first"><div class="rthumbc">'+y+'</div><div class="first-content"><h3 class="recent-title"><a href="'+n+'">'+f+'</a></h3><span class="recent-date">'+c+'</span><span class="recent-author">'+l+'</span><p class="recent-des">'+g+"<p></div></div>"}else{s+='<li><div class="rthumbc">'+y+'</div><div class="recent-content"><h3 class="recent-title"><a href="'+n+'">'+f+'</a></h3><span class="recent-date">'+c+'</span><span class="recent-author">'+l+'</span></div><div class="clear"/></li>'}}s+="</ul>";$(".recent-wid .widget-content").each(function(){var e=$(this).text();if(e==r){$(this).html(s);$(this).parent().addClass("pmag2");$(this).parent().addClass("pmag");$(this).prev("h2").html('<a href="/search/label/'+i+'">'+t+"</a>");$(this).prev("h2").css("background",o);$(this).prev("h2").wrap('<div class="box-title"></div>');$(this).prev(".box-title").css("border-color",o);$(this).prev(".box-title").append('<a class="more-link" href="/search/label/'+i+'">Plus</a>');$(this).removeClass("widget-content").addClass("layout-content");$(this).find(".recent-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$(this).find(".first-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}if(s.match("pgallery")){$.ajax({url:"/feeds/posts/default/-/"+i+"?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(e){var n="";var s="<ul>";for(var u=0;u<e.feed.entry.length;u++){for(var a=0;a<e.feed.entry[u].link.length;a++){if(e.feed.entry[u].link[a].rel=="alternate"){n=e.feed.entry[u].link[a].href;break}}var f=e.feed.entry[u].title.$t;var l=e.feed.entry[u].author[0].name.$t;var c=e.feed.entry[u].published.$t.substring(0,10);var h=e.feed.entry[u].content.$t;var p=$("<div>").html(h);var d=p.find("img:first").attr("src");var v=e.feed.entry[u].media$thumbnail.url;if(d===undefined){var m='<a class="recent-thumb" href="'+n+'" style="background:url('+v+') no-repeat center center;background-size: cover"/>'}else{var m='<a class="recent-thumb" href="'+n+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>'}s+="<li>"+m+'<div class="recent-content"><h3 class="recent-title"><a href="'+n+'">'+f+'</a></h3><span class="recent-date">'+c+'</span><span class="recent-author">'+l+'</span></div><div class="clear"/></li>'}s+="</ul>";$(".recent-wid .widget-content").each(function(){var e=$(this).text();if(e==r){$(this).html(s);$(this).parent().addClass("pgallery");$(this).parent().addClass("recent-block");$(this).prev("h2").html('<a href="/search/label/'+i+'">'+t+"</a>");$(this).prev("h2").css("background",o);$(this).prev("h2").wrap('<div class="box-title"></div>');$(this).prev(".box-title").css("border-color",o);$(this).prev(".box-title").append('<a class="more-link" href="/search/label/'+i+'">Plus</a>');$(this).removeClass("widget-content").addClass("layout-content");$(this).find(".recent-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}if(s.match("pvid")){$.ajax({url:"/feeds/posts/default/-/"+i+"?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(e){var n="";var s="<ul>";for(var u=0;u<e.feed.entry.length;u++){for(var a=0;a<e.feed.entry[u].link.length;a++){if(e.feed.entry[u].link[a].rel=="alternate"){n=e.feed.entry[u].link[a].href;break}}var f=e.feed.entry[u].title.$t;var l=e.feed.entry[u].author[0].name.$t;var c=e.feed.entry[u].media$thumbnail.url;var h=e.feed.entry[u].published.$t.substring(0,10);var p='<a class="recent-thumb" href="'+n+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>';s+="<li>"+p+'<div class="recent-content"><h3 class="recent-title"><a href="'+n+'">'+f+'</a></h3><span class="recent-date">'+h+'</span><span class="recent-author">'+l+'</span></div><div class="clear"/></li>'}s+="</ul>";$(".recent-wid .widget-content").each(function(){var e=$(this).text();if(e==r){$(this).html(s);$(this).parent().addClass("pvid");$(this).parent().addClass("recent-block");$(this).prev("h2").html('<a href="/search/label/'+i+'">'+t+"</a>");$(this).prev("h2").css("background",o);$(this).prev("h2").wrap('<div class="box-title"></div>');$(this).prev(".box-title").css("border-color",o);$(this).prev(".box-title").append('<a class="more-link" href="/search/label/'+i+'">Plus</a>');$(this).removeClass("widget-content").addClass("layout-content");$(this).find(".recent-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}});$(window).bind("load",function(){$(".first-ld").remove();$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}) 
//Slide bar Scroll
$(window).scroll(function(){$("#sliding_box").css($(this).scrollTop()>100?{left:"0px"}:{left:"-360px"})}),$(document).ready(function(){var i=$("#sliding_box"),s=$("#sliding_box-close"),o=$("#sliding_box-min"),l=$("#sliding_box-max");l.hide(),s.click(function(){i.css({left:"-350px"}),i.fadeOut("slow")}),o.click(function(){i.toggleClass("hide"),$(this).hide(),l.show()}),l.click(function(){i.toggleClass("hide"),$(this).hide(),o.show()})});
//Adsense
(function() { var ad = document.createElement('script'); ad.type = 'text/javascript'; ad.async = true; ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })();             
//Related Post Widget
var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:72,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail" in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s"+d.thumbnailSize+"-c"):d.noImage;u=("summary" in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);
//Inspect
var message="Ah, nice try, This is forbidden";function clickIE4(){if(2==event.button)return alert(message),!1}function clickNS4(e){if((document.layers||document.getElementById&&!document.all)&&(2==e.which||3==e.which))return alert(message),!1}document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=clickNS4):document.all&&!document.getElementById&&(document.onmousedown=clickIE4),document.oncontextmenu=new Function("alert(message);return false");
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
shortcut={all_shortcuts:{},add:function(e,t,a){var o={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(a)for(var r in o)void 0===a[r]&&(a[r]=o[r]);else a=o;o=a.target,"string"==typeof a.target&&(o=document.getElementById(a.target)),e=e.toLowerCase(),r=function(o){var r;if((o=o||window.event,a.disable_in_input)&&(o.target?r=o.target:o.srcElement&&(r=o.srcElement),3==r.nodeType&&(r=r.parentNode),"INPUT"==r.tagName||"TEXTAREA"==r.tagName))return;o.keyCode?code=o.keyCode:o.which&&(code=o.which),r=String.fromCharCode(code).toLowerCase(),188==code&&(r=","),190==code&&(r=".");var n=e.split("+"),c=0,l={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},s={esc:27,escape:27,tab:9,space:32,return:13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,break:19,insert:45,home:36,delete:46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},i=!1,d=!1,p=!1,u=!1,h=!1,f=!1,g=!1,v=!1;o.ctrlKey&&(u=!0),o.shiftKey&&(d=!0),o.altKey&&(f=!0),o.metaKey&&(v=!0);for(var y=0;k=n[y],y<n.length;y++)"ctrl"==k||"control"==k?(c++,p=!0):"shift"==k?(c++,i=!0):"alt"==k?(c++,h=!0):"meta"==k?(c++,g=!0):1<k.length?s[k]==code&&c++:a.keycode?a.keycode==code&&c++:r==k?c++:l[r]&&o.shiftKey&&(r=l[r],r==k&&c++);if(c==n.length&&u==p&&d==i&&f==h&&v==g&&(t(o),!a.propagate))return o.cancelBubble=!0,o.returnValue=!1,o.stopPropagation&&(o.stopPropagation(),o.preventDefault()),!1},this.all_shortcuts[e]={callback:r,target:o,event:a.type},o.addEventListener?o.addEventListener(a.type,r,!1):o.attachEvent?o.attachEvent("on"+a.type,r):o["on"+a.type]=r},remove:function(e){e=e.toLowerCase();var t=this.all_shortcuts[e];if(delete this.all_shortcuts[e],t){e=t.event;var a=t.target;t=t.callback;a.detachEvent?a.detachEvent("on"+e,t):a.removeEventListener?a.removeEventListener(e,t,!1):a["on"+e]=!1}}},shortcut.add("Ctrl+U",function(){alert("Cmon, you better than this")}),shortcut.add("Meta+Alt+U",function(){alert("This is joke right?")}),shortcut.add("Ctrl+C",function(){alert("Wow, amazing!")}),shortcut.add("Meta+C",function(){alert("This is joke right?")});
//Search Button
$(function(){$(".searchbutton").click(function(){$(this).toggleClass("active"),$(".search-form").slideToggle("fast")})});
//OneSignale
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(t){var n=this;this.VERSION=Number(150707),this.log={setLevel:function(e){n.currentLogLevel=e}},this.setupStubFunctions(e.FUNCTION_LIST_TO_STUB,this.stubFunction,t),this.setupStubFunctions(e.FUNCTION_LIST_WITH_PROMISE_TO_STUB,this.stubPromiseFunction,t)}return e.prototype.setupStubFunctions=function(e,t,n){for(var o=this,r=function(e){if(n.indexOf(e)>-1)return"continue";Object.defineProperty(i,e,{value:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t(o,e,n)}})},i=this,u=0,a=e;u<a.length;u++){r(a[u])}},e}();t.OneSignalStub=o,o.FUNCTION_LIST_TO_STUB=["on","off","once","push"],o.FUNCTION_LIST_WITH_PROMISE_TO_STUB=["init","_initHttp","isPushNotificationsEnabled","showHttpPrompt","registerForPushNotifications","setDefaultNotificationUrl","setDefaultTitle","syncHashedEmail","getTags","sendTag","sendTags","deleteTag","deleteTags","addListenerForNotificationOpened","getIdsAvailable","setSubscription","showHttpPermissionRequest","showNativePrompt","showSlidedownPrompt","getNotificationPermission","getUserId","getRegistrationId","getSubscription","sendSelfNotification","setEmail","logoutEmail","setExternalUserId","removeExternalUserId","getExternalUserId","provideUserConsent","isOptedOut","getEmailId"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.shouldLog=function(){try{if("undefined"==typeof window||void 0===window.localStorage)return!1;var e=window.localStorage.getItem("loglevel");return!(!e||"trace"!==e.toLowerCase())}catch(e){return!1}},e.setLevel=function(t){if("undefined"!=typeof window&&void 0!==window.localStorage)try{window.localStorage.setItem("loglevel",t),e.proxyMethodsCreated=void 0,e.createProxyMethods()}catch(e){return}},e.createProxyMethods=function(){if(void 0===e.proxyMethodsCreated){e.proxyMethodsCreated=!0;for(var t={log:"debug",trace:"trace",info:"info",warn:"warn",error:"error"},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],i=void 0!==console[r],u=t[r],a=i&&(e.shouldLog()||"error"===u);e[u]=a?console[r].bind(console):function(){}}}},e}();t.default=o,o.createProxyMethods()},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(n){void 0===n&&(n="");var o=e.call(this,n)||this;return Object.defineProperty(o,"message",{configurable:!0,enumerable:!1,value:n,writable:!0}),Object.defineProperty(o,"name",{configurable:!0,enumerable:!1,value:o.constructor.name,writable:!0}),Error.hasOwnProperty("captureStackTrace")?(Error.captureStackTrace(o,o.constructor),o):(Object.defineProperty(o,"stack",{configurable:!0,enumerable:!1,value:new Error(n).stack,writable:!0}),Object.setPrototypeOf(o,t.prototype),o)}return r(t,e),t}(Error);t.default=i},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)),i=function(){function e(){}return e.processItem=function(e,t){if("function"==typeof t)t();else{if(!Array.isArray(t))throw new r.default("Only accepts function and Array types!");if(0==t.length)throw new r.default("Empty array is not valid!");var n=t.shift();if(null==n||void 0===n)throw new r.default("First element in array must be the OneSignal function name");var o=e[n.toString()];if("function"!=typeof o)throw new r.default("No OneSignal function with the name '"+n+"'");o.apply(e,t)}},e}();t.ProcessOneSignalPushCalls=i},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=n(3),s=i(n(1)),c=function(e){function t(n){var o=e.call(this,Object.getOwnPropertyNames(t.prototype))||this;return window.OneSignal=o,o.playPushes(n),o}return r(t,e),t.prototype.isPushNotificationsSupported=function(){return!1},t.prototype.isPushNotificationsEnabled=function(){return t.newPromiseIfDefined(function(e){e(!1)})},t.prototype.push=function(e){a.ProcessOneSignalPushCalls.processItem(this,e)},t.prototype.stubFunction=function(e,t,n){},t.prototype.stubPromiseFunction=function(e,n,o){return t.newPromiseIfDefined(function(e,t){})},t.newPromiseIfDefined=function(e){return"undefined"==typeof Promise?void 0:new Promise(e)},t.prototype.playPushes=function(e){if(e)for(var t=0,n=e;t<n.length;t++){var o=n[t];try{this.push(o)}catch(e){s.default.error(e)}}},t}(u.OneSignalStub);t.OneSignalStubES5=c},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var OneSignalStubES6=function(e){function OneSignalStubES6(t){var n=e.call(this,Object.getOwnPropertyNames(OneSignalStubES6.prototype))||this;return n.directFunctionCallsArray=new Array,n.preExistingArray=t,n}return r(OneSignalStubES6,e),OneSignalStubES6.prototype.isPushNotificationsSupported=function(){return!0},OneSignalStubES6.prototype.stubFunction=function(e,t,n){e.directFunctionCallsArray.push({functionName:t,args:n,delayedPromise:void 0})},OneSignalStubES6.prototype.stubPromiseFunction=function(e,t,n){var o=void 0,r=new Promise(function(e,t){o={resolve:e,reject:t}});return e.directFunctionCallsArray.push({functionName:t,delayedPromise:o,args:n}),r},OneSignalStubES6}(n(0).OneSignalStub);t.OneSignalStubES6=OneSignalStubES6},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPushNotificationsSupported=function(){return void 0!==window.safari?void 0!==window.safari.pushNotification:"undefined"!=typeof PushSubscriptionOptions&&PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=n(5),i=n(4),u=function(){function e(){}return e.addScriptToPage=function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.head.appendChild(t)},e.getPathAndPrefix=function(){return"https://cdn.onesignal.com/sdks/"},e.isServiceWorkerRuntime=function(){return"undefined"==typeof window},e.serviceWorkerSupportsPush=function(){return void 0!==self.registration},e.addOneSignalPageES6SDKStub=function(){var e=window.OneSignal,t=Array.isArray(e);!e||t?window.OneSignal=new r.OneSignalStubES6(e):console.error("window.OneSignal already defined as '"+typeof OneSignal+"'!\n         Please make sure to define as 'window.OneSignal = window.OneSignal || [];'",OneSignal)},e.addOneSignalPageES5SDKStub=function(){console.log("OneSignal: Using fallback ES5 Stub for backwards compatibility.");var e=window.OneSignal;window.OneSignal=new i.OneSignalStubES5(e)},e.start=function(){e.isServiceWorkerRuntime()?e.serviceWorkerSupportsPush()&&self.importScripts(e.getPathAndPrefix()+"OneSignalSDKWorker.js?v="+e.VERSION):o.isPushNotificationsSupported()?(e.addScriptToPage(e.getPathAndPrefix()+"OneSignalPageSDKES6.js?v="+e.VERSION),e.addOneSignalPageES6SDKStub()):e.addOneSignalPageES5SDKStub()},e}();t.OneSignalShimLoader=u,u.VERSION=Number(150707)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(7).OneSignalShimLoader.start()}]);
//# sourceMappingURL=OneSignalSDK.js.map
