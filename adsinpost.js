function f(){var d=document.getElementById("aim1<data:post.id/>");var e=document.getElementById("aim2<data:post.id/>");var s=e.innerHTML;var r=s.search(/\x3C!--adsense--\x3E/igm);if(r&gt;0){d.innerHTML=s.substr(0,r);e.innerHTML=s.substr(r+14);}}();
