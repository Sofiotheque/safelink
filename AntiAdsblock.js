    const adblockModal=document.getElementById(&quot;chp_ads_block_modal_newbYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;);const adbEnableForPage=true;const debug=false;const adbVersion=&quot;3.6&quot;;const ajaxurl=&quot;https://iggtech.com/wp-admin/admin-ajax.php&quot;;let onPageLoad=true;let googleAdsControl=true;let imageAdsControl=true;let classAdsControl=true;let displayOnce=0;let adsRequestURL=&quot;https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js&quot;;const brandingBtn=document.getElementById(&quot;chp_brandingbYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;);if(brandingBtn){brandingBtn.addEventListener(&quot;click&quot;,function(event){event.preventDefault();window.location.href=&quot;https://codehelppro.com/product/wordpress/plugin/chp-ads-block-detector-pro/&quot;;return false;});}
const adblockCloseBtn=document.getElementById(&quot;close_btn_adblockbYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;);if(adblockCloseBtn){adblockCloseBtn.onclick=function(){hide_model();}}
function is_connected(){try{return window.navigator.onLine;}catch(error){return true;}}
function adsBlocked(callBackFunc){if(googleAdsControl&amp;&amp;is_connected()){let adsRequest=new Request(adsRequestURL,{method:&quot;HEAD&quot;,mode:&quot;no-cors&quot;});fetch(adsRequest).then(function(res){if(debug){console.warn(&quot;[ADB DEBUG] Google Ads Request Passed!!!&quot;);}
callBackFunc(false);}).catch(function(res){if(debug){console.warn(&quot;[ADB DEBUG] Google Ads Request Failed!!!&quot;);console.warn(`[ADB DEBUG] ${res}`)}
callBackFunc(true);})}else{if(debug){console.warn(&quot;[ADB DEBUG] Google Ads Request Blocked by Filter Hook or Offline!!!&quot;);}}
callBackFunc(false);}
function chpadb_default_callback(e){console.log(e)}
function reload(){window.location.href=window.location.href}
function redirect(e){window.location.href=e}
function hasClass(e,t){return!!e.className.match(new RegExp(&quot;(\\s|^)&quot;+t+&quot;(\\s|$)&quot;))}
function addClass(e,t){hasClass(e,t)||(e.className+=&quot; &quot;+t)}
function removeClass(e,t){if(hasClass(e,t)){var o=new RegExp(&quot;(\\s|^)&quot;+t+&quot;(\\s|$)&quot;);e.className=e.className.replace(o,&quot; &quot;)}}
let count=0;function hide_model(){try{if(typeof adblockModal==&#039;object&#039;){removeClass(adblockModal,&quot;chp_ads_blocker_detector-showbYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;);removeClass(document.body,&quot;chp_ads_blocker_detector_activebYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;)}}catch(e){console.warn(e);}}
function show_modal(modal){if(modal!=null&amp;&amp;0==displayOnce){displayOnce++;addClass(modal,&quot;chp_ads_blocker_detector-showbYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;);addClass(document.body,&quot;chp_ads_blocker_detector_activebYW1JxKbQdYlcuiVDWYP1WGim0gLy6&quot;)}}
function chp_adblock_browser(){return /Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)?&quot;Opera&quot;:/MSIE (\d+\.\d+);/.test(navigator.userAgent)?&quot;MSIE&quot;:/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)?&quot;Netscape&quot;:/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)?&quot;Chrome&quot;:/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)?&quot;Safari&quot;:/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)?&quot;Firefox&quot;:&quot;Unknown&quot;}
function chp_ads_blocker_detector(enable){if(enable){show_modal(adblockModal);}}
let prevCount=0;function checkMultiple(){let enable=false;if(classAdsControl){let divEle=document.createElement(&quot;div&quot;);divEle.innerHTML=&quot;&amp;nbsp;&quot;;divEle.className=&quot;ad ads doubleclick ad-placement ad-placeholder adbadge BannerAd adsbox&quot;;divEle.id=&quot;filter_ads_by_classname&quot;;try{if(!document.body.contains(document.getElementById(&#039;filter_ads_by_classname&#039;))){document.body.appendChild(divEle);let adBoxEle=document.querySelector(&quot;.adsbox&quot;);enable=!adBoxEle||adBoxEle.offsetHeight==0;if(debug){if(enable){console.warn(&quot;[ADB DEBUG] Class Add Request Failed!!!&quot;);}else{console.log(&quot;[ADB DEBUG] Class Add Request Passed!!!&quot;);}}}else{let adBoxEleId=document.getElementById(&quot;filter_ads_by_classname&quot;);removeClass(adBoxEleId,` ads_${prevCount}`);removeClass(adBoxEleId,`ads_${prevCount}`);prevCount++;addClass(adBoxEleId,`ads_${prevCount}`);}}catch(error){divEle.parentNode.removeChild(divEle);}}else{if(debug){console.warn(&quot;[ADS PRO DEBUG] Check Multiple Request Blocked by Filter Hook or Offline&quot;);}}
return enable;}
function isHidden(e){return&quot;none&quot;===window.getComputedStyle(e).display}
function init(){adsBlocked(function(enable){if(enable){chp_ads_blocker_detector(true);}else{if(imageAdsControl){enable=isHidden(document.getElementById(&quot;chp-ads-image&quot;));if(debug){if(enable){console.warn(&quot;[ADB DEBUG] Image Ads Request Failed!!!&quot;);}else{console.log(&quot;[ADB DEBUG] Image Ads Request Passed!!!&quot;);}}}
if(!enable){enable=checkMultiple();if(debug){if(enable){console.warn(&quot;[ADB DEBUG] Check Multiple Request Failed!!!&quot;);}else{console.log(&quot;[ADB DEBUG] Check Multiple Request Passed!!!&quot;);}}}
chp_ads_blocker_detector(enable)}})}
function startCheckingAdblock(){init();}
if(adbEnableForPage){if(onPageLoad){document.addEventListener(&quot;DOMContentLoaded&quot;,function(e){startCheckingAdblock();},false);}else{startCheckingAdblock();}}
