var obj0=document.getElementById("aim1<data:post.id/>");
var obj1=document.getElementById("aim2<data:post.id/>");
var s=obj1.innerHTML;
var r=s.search(/\x3C!--adsense--\x3E/igm);
if(r&gt;0) {obj0.innerHTML=s.substr(0,r);obj1.innerHTML=s.substr(r+14);}
