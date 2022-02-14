/*! Global variabel */
var cart_kosong = '<div class="cart-kosong"><div class="dots_group"><i class="red"></i><i class="blue-1"></i><i class="blue"></i></div><svg width="1em" height="1em" fill="currentColor" viewBox="-46 -34 1065 1065.0019" ><path d="m911.785156 342.367188-210.933594-38.507813 21.128907 121.078125c57.660156 1.601562 124.507812 4.476562 182.652343 5.144531 8.277344-32.996093 7.152344-54.882812 7.152344-87.714843zm-272.242187-49.695313-169.851563-31.003906 45.632813 157.519531 147.019531 4.085938zm92.667969 190.875 19.527343 111.898437c55.640625-18.710937 101.800781-57.332031 130.03125-107.734374zm-37.726563 123.878906-21.914063-125.539062-140.199218-3.898438 41.96875 144.863281zm-288.890625-357.460937-170.296875-31.085938 72.324219 195.792969c17.09375 0 121.640625 2.128906 146.515625 2.816406zm538.136719 38.988281c14.898437 1.363281 26.566406 13.890625 26.566406 29.128906v53.695313c0 148.882812-109.148437 273.027344-257.085937 292.011718l-338.949219 43.578126c-25.464844 3.253906-39.050781 31.691406-25.292969 53.609374 7.042969 11.214844 17.996094 17.117188 31.339844 17.117188h553.027344c16.152343 0 29.253906 13.09375 29.253906 29.25s-13.101563 29.257812-29.253906 29.257812h-553.027344c-69.179688 0-115.851563-71.300781-86.113282-134.253906 8.980469-18.992187 23.277344-34.042968 41.429688-43.285156l-169.035156-457.546875-71.089844-65.101563c-33.667969 13.46875-72.296875-.625-89.617188-32.292968-19.042968-34.832032-6.148437-78.40625 28.609376-97.410156 34.832031-19.0625 78.40625-6.152344 97.417968 28.59375 9.714844 17.757812 11.765625 39.246093 4.289063 59.410156l63.871093 58.488281c247.882813 45.253906 495.769532 90.503906 743.660157 135.75zm-427.917969 341.410156-44.640625-154.074219-142.25-3.957031 64.199219 173.769531zm-53.535156 216.554688c-40.414063-10.820313-82.21875 13.285156-93.0625 53.761719-10.828125 40.40625 13.285156 82.222656 53.765625 93.070312 40.402343 10.816406 82.214843-13.289062 93.0625-53.769531 10.820312-40.402344-13.285157-82.214844-53.765625-93.0625zm-4.394532 64.652343c4.847657 8.359376 1.882813 19.179688-6.496093 24.019532-13.292969 7.6875-29.824219-4.5-25.714844-19.828125 4.0625-15.191407 24.417969-17.683594 32.210937-4.191407zm373.027344-64.652343c-40.398437-10.820313-82.222656 13.285156-93.066406 53.761719-10.820312 40.40625 13.28125 82.222656 53.765625 93.070312 40.398437 10.816406 82.214844-13.289062 93.058594-53.769531 10.828125-40.402344-13.277344-82.214844-53.757813-93.0625zm-4.394531 64.652343c4.84375 8.359376 1.882813 19.179688-6.492187 24.019532-13.296876 7.6875-29.832032-4.488282-25.722657-19.828125 4.070313-15.191407 24.425781-17.683594 32.214844-4.191407zm-745.800781-848.375c-5.726563-10.464843-21.414063-8.726562-24.742188 2.660157-3.410156 11.648437 8.902344 21.449219 19.449219 15.671875 6.585937-3.601563 8.839844-11.84375 5.292969-18.332032zm0 0"></svg><center>No products have been added yet...</center><a class="link-toko touch-effect" href="/search/label/Products">Our Products</a></div>';var formatBulan=["January","February","March","April","May","June","July","August","September","October","November","December"],fixedMenu=!0,fixedSidebar=!0,jumlahRelatedPost=3,jenisKomentar="blogger",disqusShortname="themeidn",showMoreText='',addthisLink="",sharethisLink="",next='Next',previous='Previous',nomorWa='',email_address='yourname@example.com',subject_email='Ordering Products',pesanSalam='',nameAdmin='',stockHabis='',paymentMethod={},followByEmailText=''
/*!
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*! Social */
$('.social .facebook a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>');
$('.social .whatsapp a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" /></svg>');
$('.social .twitter a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" /></svg>');
$('.social .youtube a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>');
$('.social .instagram a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>');
$('.social .telegram a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" /></svg>');
$('.social .messenger a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2C6.36,2 2,6.13 2,11.7C2,14.61 3.19,17.14 5.14,18.87C5.3,19 5.4,19.22 5.41,19.44L5.46,21.22C5.5,21.79 6.07,22.16 6.59,21.93L8.57,21.06C8.74,21 8.93,20.97 9.1,21C10,21.27 11,21.4 12,21.4C17.64,21.4 22,17.27 22,11.7C22,6.13 17.64,2 12,2M18,9.46L15.07,14.13C14.6,14.86 13.6,15.05 12.9,14.5L10.56,12.77C10.35,12.61 10.05,12.61 9.84,12.77L6.68,15.17C6.26,15.5 5.71,15 6,14.54L8.93,9.87C9.4,9.14 10.4,8.95 11.1,9.47L13.44,11.23C13.66,11.39 13.95,11.39 14.16,11.23L17.32,8.83C17.74,8.5 18.29,9 18,9.46Z" /></svg>');
$('.social .email a').append('<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>');
$('.button.view, .outline.view').append('<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>');
$('.button.download, .outline.download').append('<svg fill="currentColor" viewBox="0 0 24 24"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>');
$('.button.link, .outline.link').append('<svg fill="currentColor" viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>');
var galite = galite || {};
galite.UA = 'UA-119672153-4';
(function(b,l,e,g,h,f){1!==parseInt(e.msDoNotTrack||b.doNotTrack||e.doNotTrack,10)&&b.addEventListener("load",function(){var r=(new Date).getTime();b.galite=b.galite||{};var m=new XMLHttpRequest,n="https://www.google-analytics.com/collect?cid="+(l.uid=l.uid||Math.random()+"."+Math.random())+"&v=1&tid="+galite.UA+"&dl="+f(h.location.href)+"&ul=en-us&de=UTF-8",a=function(b){var d="",c;for(c in b){if(void 0===b[c])return!1;d+=f(b[c])}return d},p={dt:[h.title],sd:[g.colorDepth,"-bit"],sr:[g.availHeight,
"x",g.availWidth],vp:[innerWidth,"x",innerHeight],dr:[h.referrer]},k;for(k in p){var q=k+"="+a(p[k]);q&&(n+="&"+q)}a=function(b,d){var c="",a;for(a in d)c="&"+a+"="+f(d[a]);return function(){var a=n+c+(galite.anonymizeIp?"&aip=1":"")+"&t="+f(b)+"&z="+(new Date).getTime();if(e.sendBeacon)e.sendBeacon(a);else try{m.open("GET",a,!1),m.send()}catch(t){(new Image).src=a}}};setTimeout(a("pageview",null),100);b.addEventListener("unload",a("timing",{utc:"JS Dependencies",utv:"unload",utt:(new Date).getTime()-
r}))})})(window,localStorage,navigator,screen,document,encodeURIComponent);
document.write("<data:blog.blogId/>");
/*! Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */ (function($){$.fn.theiaStickySidebar=function(options){var defaults={'containerSelector':'','additionalMarginTop':0,'additionalMarginBottom':0,'updateSidebarHeight':true,'minWidth':0,'disableOnResponsiveLayouts':true,'sidebarBehavior':'modern','defaultPosition':'relative','namespace':'TSS'};options=$.extend(defaults,options);options.additionalMarginTop=parseInt(options.additionalMarginTop)||0;options.additionalMarginBottom=parseInt(options.additionalMarginBottom)||0;tryInitOrHookIntoEvents(options,this);function tryInitOrHookIntoEvents(options,$that){var success=tryInit(options,$that);if(!success){console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');$(document).on('scroll.'+options.namespace,function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt)}}}(options,$that));$(window).on('resize.'+options.namespace,function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt)}}}(options,$that))}}function tryInit(options,$that){if(options.initialized===true){return true}if($('body').width()<options.minWidth){return false}init(options,$that);return true}function init(options,$that){options.initialized=true;var existingStylesheet=$('#theia-sticky-sidebar-stylesheet-'+options.namespace);if(existingStylesheet.length===0){$('head').append($('<style id="theia-sticky-sidebar-stylesheet-'+options.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'))}$that.each(function(){var o={};o.sidebar=$(this);o.options=options||{};o.container=$(o.options.containerSelector);if(o.container.length==0){o.container=o.sidebar.parent()}o.sidebar.parents().css('-webkit-transform','none');o.sidebar.css({'position':o.options.defaultPosition,'overflow':'visible','-webkit-box-sizing':'border-box','-moz-box-sizing':'border-box','box-sizing':'border-box'});o.stickySidebar=o.sidebar.find('.theiaStickySidebar');if(o.stickySidebar.length==0){var javaScriptMIMETypes=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;o.sidebar.find('script').filter(function(index,script){return script.type.length===0||script.type.match(javaScriptMIMETypes)}).remove();o.stickySidebar=$('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());o.sidebar.append(o.stickySidebar)}o.marginBottom=parseInt(o.sidebar.css('margin-bottom'));o.paddingTop=parseInt(o.sidebar.css('padding-top'));o.paddingBottom=parseInt(o.sidebar.css('padding-bottom'));var collapsedTopHeight=o.stickySidebar.offset().top;var collapsedBottomHeight=o.stickySidebar.outerHeight();o.stickySidebar.css('padding-top',1);o.stickySidebar.css('padding-bottom',1);collapsedTopHeight-=o.stickySidebar.offset().top;collapsedBottomHeight=o.stickySidebar.outerHeight()-collapsedBottomHeight-collapsedTopHeight;if(collapsedTopHeight==0){o.stickySidebar.css('padding-top',0);o.stickySidebarPaddingTop=0}else{o.stickySidebarPaddingTop=1}if(collapsedBottomHeight==0){o.stickySidebar.css('padding-bottom',0);o.stickySidebarPaddingBottom=0}else{o.stickySidebarPaddingBottom=1}o.previousScrollTop=null;o.fixedScrollTop=0;resetSidebar();o.onScroll=function(o){if(!o.stickySidebar.is(":visible")){return}if($('body').width()<o.options.minWidth){resetSidebar();return}if(o.options.disableOnResponsiveLayouts){var sidebarWidth=o.sidebar.outerWidth(o.sidebar.css('float')=='none');if(sidebarWidth+50>o.container.width()){resetSidebar();return}}var scrollTop=$(document).scrollTop();var position='static';if(scrollTop>=o.sidebar.offset().top+(o.paddingTop-o.options.additionalMarginTop)){var offsetTop=o.paddingTop+options.additionalMarginTop;var offsetBottom=o.paddingBottom+o.marginBottom+options.additionalMarginBottom;var containerTop=o.sidebar.offset().top;var containerBottom=o.sidebar.offset().top+getClearedHeight(o.container);var windowOffsetTop=0+options.additionalMarginTop;var windowOffsetBottom;var sidebarSmallerThanWindow=(o.stickySidebar.outerHeight()+offsetTop+offsetBottom)<$(window).height();if(sidebarSmallerThanWindow){windowOffsetBottom=windowOffsetTop+o.stickySidebar.outerHeight()}else{windowOffsetBottom=$(window).height()-o.marginBottom-o.paddingBottom-options.additionalMarginBottom}var staticLimitTop=containerTop-scrollTop+o.paddingTop;var staticLimitBottom=containerBottom-scrollTop-o.paddingBottom-o.marginBottom;var top=o.stickySidebar.offset().top-scrollTop;var scrollTopDiff=o.previousScrollTop-scrollTop;if(o.stickySidebar.css('position')=='fixed'){if(o.options.sidebarBehavior=='modern'){top+=scrollTopDiff}}if(o.options.sidebarBehavior=='stick-to-top'){top=options.additionalMarginTop}if(o.options.sidebarBehavior=='stick-to-bottom'){top=windowOffsetBottom-o.stickySidebar.outerHeight()}if(scrollTopDiff>0){top=Math.min(top,windowOffsetTop)}else{top=Math.max(top,windowOffsetBottom-o.stickySidebar.outerHeight())}top=Math.max(top,staticLimitTop);top=Math.min(top,staticLimitBottom-o.stickySidebar.outerHeight());var sidebarSameHeightAsContainer=o.container.height()==o.stickySidebar.outerHeight();if(!sidebarSameHeightAsContainer&&top==windowOffsetTop){position='fixed'}else if(!sidebarSameHeightAsContainer&&top==windowOffsetBottom-o.stickySidebar.outerHeight()){position='fixed'}else if(scrollTop+top-o.sidebar.offset().top-o.paddingTop<=options.additionalMarginTop){position='static'}else{position='absolute'}}if(position=='fixed'){var scrollLeft=$(document).scrollLeft();o.stickySidebar.css({'position':'fixed','width':getWidthForObject(o.stickySidebar)+'px','transform':'translateY('+top+'px)','left':(o.sidebar.offset().left+parseInt(o.sidebar.css('padding-left'))-scrollLeft)+'px','top':'0px'})}else if(position=='absolute'){var css={};if(o.stickySidebar.css('position')!='absolute'){css.position='absolute';css.transform='translateY('+(scrollTop+top-o.sidebar.offset().top-o.stickySidebarPaddingTop-o.stickySidebarPaddingBottom)+'px)';css.top='0px'}css.width=getWidthForObject(o.stickySidebar)+'px';css.left='';o.stickySidebar.css(css)}else if(position=='static'){resetSidebar()}if(position!='static'){if(o.options.updateSidebarHeight==true){o.sidebar.css({'min-height':o.stickySidebar.outerHeight()+o.stickySidebar.offset().top-o.sidebar.offset().top+o.paddingBottom})}}o.previousScrollTop=scrollTop};o.onScroll(o);$(document).on('scroll.'+o.options.namespace,function(o){return function(){o.onScroll(o)}}(o));$(window).on('resize.'+o.options.namespace,function(o){return function(){o.stickySidebar.css({'position':'static'});o.onScroll(o)}}(o));if(typeof ResizeSensor!=='undefined'){new ResizeSensor(o.stickySidebar[0],function(o){return function(){o.onScroll(o)}}(o))}function resetSidebar(){o.fixedScrollTop=0;o.sidebar.css({'min-height':'1px'});o.stickySidebar.css({'position':'static','width':'','transform':'none'})}function getClearedHeight(e){var height=e.height();e.children().each(function(){height=Math.max(height,$(this).height())});return height}})}function getWidthForObject(object){var width;try{width=object[0].getBoundingClientRect().width}catch(err){}if(typeof width==="undefined"){width=object.width()}return width}return this}})(jQuery); var Shortcode=function(el,tags){if(!el){return}this.el=el;this.tags=tags;this.matches=[];this.regex='\\[{name}(\\s[\\s\\S]*?)?\\]'+'(?:((?!\\s*?(?:\\[{name}|\\[\\/(?!{name})))[\\s\\S]*?)'+'(\\[\/{name}\\]))?';if(this.el.jquery){this.el=this.el[0]}this.matchTags();this.convertMatchesToNodes();this.replaceNodes()};Shortcode.prototype.matchTags=function(){var html=this.el.outerHTML,instances,match,re,contents,regex,tag,options;for(var key in this.tags){if(!this.tags.hasOwnProperty(key)){return}re=this.template(this.regex,{name:key});instances=html.match(new RegExp(re,'g'))||[];for(var i=0,len=instances.length;i<len;i++){match=instances[i].match(new RegExp(re));contents=match[3]?'':undefined;tag=match[0];regex=this.escapeTagRegExp(tag);options=this.parseOptions(match[1]);if(match[2]){contents=match[2].trim();tag=tag.replace(contents,'').replace(/\n\s*/g,'');regex=this.escapeTagRegExp(tag).replace('\\]\\[','\\]([\\s\\S]*?)\\[')}this.matches.push({name:key,tag:tag,regex:regex,options:options,contents:contents})}}};Shortcode.prototype.convertMatchesToNodes=function(){var html=this.el.innerHTML,excludes,re,replacer;replacer=function(match,p1,p2,p3,p4,offset,string){if(p1){return match}else{var node=document.createElement('span');node.setAttribute('data-sc-tag',this.tag);node.className='omesnap-node omesnap-node-'+this.name;return node.outerHTML}};for(var i=0,len=this.matches.length;i<len;i++){excludes='((data-sc-tag=")|(<pre.*)|(<code.*))?';re=new RegExp(excludes+this.matches[i].regex,'g');html=html.replace(re,replacer.bind(this.matches[i]))}this.el.innerHTML=html};Shortcode.prototype.replaceNodes=function(){var self=this,html,match,result,done,node,fn,replacer,nodes=this.el.querySelectorAll('.omesnap-node');replacer=function(result){if(result.jquery){result=result[0]}result=self.parseCallbackResult(result);node.parentNode.replaceChild(result,node)};for(var i=0,len=this.matches.length;i<len;i++){match=this.matches[i];node=this.el.querySelector('.omesnap-node-'+match.name);if(node&&node.dataset.scTag===match.tag){fn=this.tags[match.name].bind(match);done=replacer.bind(match);result=fn(done);if(result!==undefined){done(result)}}}};Shortcode.prototype.parseCallbackResult=function(result){var container,fragment,children;switch(typeof result){case'function':result=document.createTextNode(result());break;case'string':container=document.createElement('div');fragment=document.createDocumentFragment();container.innerHTML=result;children=container.childNodes;if(children.length){for(var i=0,len=children.length;i<len;i++){fragment.appendChild(children[i].cloneNode(true))}result=fragment}else{result=document.createTextNode(result)}break;case'object':if(!result.nodeType){result=JSON.stringomesnap(result);result=document.createTextNode(result)}break;case'default':break}return result};Shortcode.prototype.parseOptions=function(stringOptions){var options={},set;if(!stringOptions){return}set=stringOptions.replace(/(\w+=)/g,'\n$1').split('\n');set.shift();for(var i=0;i<set.length;i++){var kv=set[i].split('=');options[kv[0]]=kv[1].replace(/\'|\"/g,'').trim()}return options};Shortcode.prototype.escapeTagRegExp=function(regex){return regex.replace(/[\[\]\/]/g,'\\$&')};Shortcode.prototype.template=function(s,d){for(var p in d){s=s.replace(new RegExp('{'+p+'}','g'),d[p])}return s};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,'')};if(window.jQuery){var pluginName='shortcode';$.fn[pluginName]=function(tags){this.each(function(){if(!$.data(this,pluginName)){$.data(this,pluginName,new Shortcode(this,tags))}});return this}}
/*! Menu */ !function(a){a.fn.menuomesnap=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu littleSub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 littleSub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('subNavigasi');});}}(jQuery);
/*! Tab */ !function(a){a.fn.tabomesnap=function(b){b=jQuery.extend({onHover:false,animated:true},b);return this.each(function(){var e=a(this),c=e.children('[tab-omy]'),d=0,n='',k='tab-active';if(b.onHover==true){var event='mouseenter'}else{var event='click'}e.prepend('<ul class="select-tab"></ul>');c.each(function(){if(b.animated==true){a(this).addClass(n)}e.find('.select-tab').append('<li class="touch-effect"><a href="javascript:;">'+a(this).attr('tab-omy')+'<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"/></svg></a></li>')}).eq(d).addClass(k);e.find('.select-tab a').on(event,function(){var f=a(this).parent().index();a(this).closest('.select-tab').find('.active').removeClass('active');a(this).parent().addClass('active');c.removeClass(k).eq(f).addClass(k);return false}).eq(d).parent().addClass('active')})}}(jQuery); $('#grid').click(function(){ $(".blog-posts").removeClass('list'); $("#list").removeClass('active'); $("#grid").addClass('active'); $(".blog-posts").removeClass('post-animated post-fadeInUp'); }); $('#list').click(function(){ $(".blog-posts").addClass('list'); $("#grid").removeClass('active'); $("#list").addClass('active'); $(".blog-posts").addClass('post-animated post-fadeInUp'); }); $(function(){$(".separator:first").remove(),$(".post-body > img:first").remove()}); $("#dark").click(function(){$("body").toggleClass("dark")}),$("body").toggleClass(localStorage.toggled),$("#dark").click(function(){"dark"!=localStorage.toggled?($("body").toggleClass("dark",!0),localStorage.toggled="dark"):($("body").toggleClass("dark",!1),localStorage.toggled="")}); $(document).ready(function(){$('a[name="ad-post-top"]').before($("#ads-post-1 .widget-content").html()),$("#ads-post-1 .widget-content").html(""),$('a[name="ad-post-bottom"]').before($("#ads-post-2 .widget-content").html()),$("#ads-post-2 .widget-content").html("")}); var prevScrollpos=window.pageYOffset;window.onscroll=function(){var currentScrollPos=window.pageYOffset;if(prevScrollpos>currentScrollPos){document.getElementById("at-custom-mobile-bar").style.bottom="40px"}else{document.getElementById("at-custom-mobile-bar").style.bottom="-15px"} prevScrollpos=currentScrollPos} $(document).ready(function(a){a(window).on("scroll",function(){a(window).scrollTop()+a(window).height()>a(".item .blog-post").outerHeight()?a("#at-custom-sidebar").hide():a("#at-custom-sidebar").show()})}); $(function(){$(window).scroll(function(){600<$(this).scrollTop()?$(""):$("#at-custom-sidebar").hide()})}); !function(a) { a.fn.lazyomesnap=function() { return this.each(function() { var t=a(this), dImg=t.attr('data-omy'), iWid=Math.round(t.width()), iHei=Math.round(t.height()), iSiz='/w'+iWid+'-h'+iHei+'-p-k-no-nu', img=''; if(dImg.match('s72-c')) { img=dImg.replace('/s72-c', iSiz) } else if(dImg.match('w72-h')) { img=dImg.replace('/w72-h72-p-k-no-nu', iSiz) } else { img=dImg } a(window).on('resize scroll', lazyOnScroll); function lazyOnScroll() { var wHeight=a(window).height(), scrTop=a(window).scrollTop(), offTop=t.offset().top; if(scrTop+wHeight>offTop) { var n=new Image(); n.onload=function() { t.attr('style', 'background-image:url('+this.src+')').addClass('lazyload') } , n.src=img } } lazyOnScroll() } ) } }(jQuery); !function() { omeLazyYt('sddefault'); function omeLazyYt(_0xc7dex2) { $(".ytl").each(function () { var _0xc7dex3 = "https://img.youtube.com/vi/" + $(this).data("embed") + "/" + _0xc7dex2 + ".jpg"; $(this).append('<span class="youtube-thumb" data-omy="'+_0xc7dex3+'"/>'); $(this).addClass('omeLazyYt'); $(this).append('<span class="button"><svg class="btn-play-yt" viewBox="0 0 213.7 213.7"><polygon class="triangle" points="73.5,62.5 148.5,105.8 73.5,149.1"></polygon><circle class="circle" cx="106.8" cy="106.8" r="103.3"></circle></svg></span>'); $(this).click(function () { $(this).html(""); $("<iframe>", { id: "youtubeOmesnap", src: "https://www.youtube.com/embed/" + $(this).data("embed"), frameborder: 0, allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: "" }).appendTo($(this)) }) }) } }(jQuery); $('#omesnap-menuNavigasi').menuomesnap(); $('#omesnap-menuNavigasi .widget').addClass('show-menu'); $('.show-search').on('click', function() { $('#nav-search').slideToggle('normal'); } ); $('.hide-search').on('click', function() { $('#nav-search').slideToggle('normal'); } ); $('.blog-posts-headline,.related-title').each(function() { var $t=$(this), $m=$t.find('.more'), $mT=showMoreText; if($mT !='') { $m.text($mT) } } ); $('.blog-posts-headline,.related-title').each(function() { var $t=$(this), $m=$t.find('.more'), $mT=showMoreText; if($mT !='') { $m.text($mT) } } ); $('.follow-by-email-text').each(function() { var $t=$(this), $fbet=followByEmailText; if($fbet !='') { $t.text($fbet) } } ); $(".post-body strike").each(function() { var e = $(this), a = e.text().trim(); "$ads={1}" == a && e.replaceWith('<div id="new-before-ad"/>'), "$ads={2}" == a && e.replaceWith('<div id="new-after-ad"/>'), "$related={1}" == a && e.replaceWith('<div id="content-related"/>'), "$related={2}" == a && e.replaceWith('<div id="content-related2"/>') }); $('#new-before-ad').each(function() { var $t=$(this); if($t.length) { $('#before-ad').appendTo($t) } } ); $('#new-after-ad').each(function() { var $t=$(this); if($t.length) { $('#after-ad').appendTo($t) } } ); $('#content-related').each(function() { var $t=$(this); if($t.length) { $('#related-midle').appendTo($t) } } ); $('#content-related2').each(function() { var $t=$(this); if($t.length) { $('#related-midle2').appendTo($t) } } ); $('#main-before-ad .widget').each(function() { var $t=$(this); if($t.length) { $t.appendTo($('#before-ad')) } } ); $('#main-after-ad .widget').each(function() { var $t=$(this); if($t.length) { $t.appendTo($('#after-ad')) } } ); $('#relatedthumb').each(function() { var $t=$(this); if($t.length) { $t.appendTo($('#related-midle')) } } ); $('#relatedtext').each(function() { var $t=$(this); if($t.length) { $t.appendTo($('#related-midle2')) } } ); $('#sidebar-tabs').each(function() { $('#sidebar-tabs .widget').each(function() { var textTab=$(this).find('.widget-title > h3').text().trim(); $(this).attr('tab-omy', textTab) } ); $('#sidebar-tabs').tabomesnap(); var wCount=$('#sidebar-tabs .widget').length; if(wCount>=1) { $(this).addClass('tabs-'+wCount).show() } } ); $('.avatar-image-container img').attr('src', function($this, i) { i=i.replace('//resources.blogblog.com/img/blank.gif', '//1.bp.blogspot.com/-1SBxYRxh8nI/Xyf3gU0XAtI/AAAAAAAAACE/b3KsNEifd00wU7C_76VHyjwAGqKG_ahTACLcBGAsYHQ/s35-r/hartomyAvatar.jpg'); i=i.replace('//img1.blogblog.com/img/blank.gif', '//1.bp.blogspot.com/-1SBxYRxh8nI/Xyf3gU0XAtI/AAAAAAAAACE/b3KsNEifd00wU7C_76VHyjwAGqKG_ahTACLcBGAsYHQ/s35-r/hartomyAvatar.jpg'); return i } ); $('.post-body a').each(function(px) { var $this=$(this), type=$this.text().trim(), sp=type.split('/'), txt=sp[0], ico=sp[1], color=sp.pop(); if(type.match('button')) { $this.addClass('button').text(txt); if(ico !='button') { $this.addClass(ico) } if(color !='button') { $this.addClass('button-color').css( { 'background-color':color } ) } }; if(type.match('outline')) { $this.addClass('outline').text(txt); if(ico !='outline') { $this.addClass(ico) } if(color !='outline') { var px = 1; $this.addClass('outline-color').css( {"border":  px+"px " +" solid"+ color,"color":color }) } } }); var base64 = { _keyStr: 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890+/=', encode: function (input) { var output, chr1, chr2, chr3, enc1, enc2, enc3, enc4 = '', i = 0; for (input = base64._utf8_encode(input); i < input.length;) { chr3 = (output = input.charCodeAt(i++)) >> 2, enc1 = (3 & output) << 4 | (chr1 = input.charCodeAt (i++)) >> 4, enc2 = (15 & chr1) << 2 | (chr2 = input.charCodeAt(i++)) >> 6, enc3 = 63 & chr2, isNaN(chr1) ? enc2 = enc3 = 64 : isNaN(chr2) && (enc3 = 64), enc4 = enc4 + this._keyStr .charAt(chr3) + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt( enc3) }; return enc4 }, decode: function (input) { var output, chr1, chr2, chr3, enc1, enc2, enc3 = '', enc4 = 0; for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ''); enc4 < input.length;) { output = this._keyStr.indexOf(input.charAt(enc4++)) << 2 | (chr3 = this._keyStr.indexOf(input.charAt( enc4++))) >> 4, chr1 = (15 & chr3) << 4 | (enc1 = this._keyStr.indexOf(input.charAt( enc4++))) >> 2, chr2 = (3 & enc1) << 6 | (enc2 = this._keyStr.indexOf(input.charAt(enc4++))), enc3 += String.fromCharCode(output), 64 != enc1 && (enc3 += String.fromCharCode(chr1)), 64 != enc2 && (enc3 += String.fromCharCode(chr2)) }; return base64._utf8_decode(enc3) }, _utf8_encode: function (input) { input = input.replace(/\r\n/g, '\x0A'); for (var output = '', chr1 = 0; chr1 < input.length; chr1++) { var chr2 = input.charCodeAt(chr1); chr2 < 128 ? output += String.fromCharCode(chr2) : (127 < chr2 && chr2 < 2048 ? output += String.fromCharCode(chr2 >> 6 | 192) : (output += String.fromCharCode(chr2 >> 12 | 224), output += String.fromCharCode(chr2 >> 6 & 63 | 128)), output += String.fromCharCode(63 & chr2 | 128)) }; return output }, _utf8_decode: function (input) { for (var output = '', chr1 = 0, chr2 = c1 = c2 = 0; chr1 < input.length;) { (chr2 = input.charCodeAt(chr1)) < 128 ? (output += String.fromCharCode(chr2), chr1++) : 191 < chr2 && chr2 < 224 ? (c2 = input.charCodeAt(chr1 + 1), output += String.fromCharCode((31 & chr2) << 6 | 63 & c2), chr1 += 2) : (c2 = input.charCodeAt(chr1 + 1), c3 = input.charCodeAt(chr1 + 2), output += String.fromCharCode((15 & chr2) << 12 | (63 & c2) << 6 | 63 & c3), chr1 += 3) }; return output } }; var scroll="yes",Fscroll=scroll.replace(/(\r\n|\n|\r)/gm," ");"yes"===Fscroll&&($(document).ready(function(){$("body")}),$(window).bind("load resize scroll",function(){var o=$(this).height();$(".post-body img").each(function(){var s=.1*$(this).height()-o+$(this).offset().top;$(document).scrollTop()>s&&$(this).addClass("omesnap")})})); $('.post-body pre').each(function() { var $this=$(this), html=$this.html(); $this.replaceWith('<pre class="code-box"><code>'+html+'<code></pre>') }); $('.post-body blockquote').each(function() { var $this=$(this), html=$this.html(); $this.replaceWith('<blockquote><svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z" fill="#626262"/></svg>'+html+'</blockquote>') }); $('.post-body blockquote').each(function() { var $this=$(this), type=$this.text().trim(), html=$this.html(); if(type.match('code-box')) { $this.replaceWith('<pre class="code-box short-b"><code>'+html+'<code></pre>') } var $sb=$('.post-body .short-b').find('b'); $sb.each(function() { var $b=$(this), $t=$b.text().trim(); if($t.match('code-box')) { $b.replaceWith("") } } ) }); $('.post-body strike').each(function() { var $this=$(this), type=$this.text().trim(), html=$this.html(); if(type.match('left-sidebar')) { $this.replaceWith('<style>#main-wrapper{float:right}#sidebar-wrapper{float:left}}</style>') } if(type.match('right-sidebar')) { $this.replaceWith('<style>#main-wrapper{float:left}#sidebar-wrapper{float:right}</style>') } if(type.match('Produk')) { $this.replaceWith('<style>.first-thumbnail,#after-ad,#related_posts{display:none}.item-post .post-body{padding:0;box-shadow:none;width:100%}.productCheckout{display:block}</style>') } if(type.match('full-width')) { $this.replaceWith('<style>#row-wrapper{background:#ffffff;}#main-wrapper{width:100%}.width-item-post{width:80%;margin:0 auto;float:none}.contentheader{width:70%;text-align:center;margin:0 auto;}.entry-meta .entry-comments-link,.entry-meta .entry-comments-link.show{float:none;display:flex;align-items:flex-end}.item-post .blog-entry-header .card-author.vcard,.item-post .blog-entry-header .entry-meta{float:none;display:block;}.item-post .meta-timecount{top:0}.item-post .blog-entry-header{height:230px;width:70%;float:none;margin: 0 auto;padding:30px 0}.statis-post .contentheader{width:100%;text-align:center;text-transform:capitalize}.statis-post .post-body{top:-250px!important}.item-post .post-body{width:63%;float:unset;margin:0 auto;box-shadow:none!important;border-radius:0;padding:0;z-index:2}.first-thumbnail{border-radius:10px}.blog-post{width:100%;padding:0;will-change: unset;border-radius:0}#content-wrapper{margin:0 auto;width:100%;padding:0}#sidebar-wrapper,.first-thumbnail .entry-meta,.first-thumbnail .card-author.vcard,.entry-category{display:none}.dark #footer-wrapper,.dark #row-wrapper{background-color:var(--dark-bg-widget);}@media screen and (max-width:1133px){.contentheader{width:100%}.item-post .post-body{width:85%}}@media screen and (max-width:880px){.item-post .blog-entry-header{width:80%}.item-post .post-body{width:85%;}.width-item-post{width:95%}}@media screen and (max-width:540px){.item .blog-post{width:100%}.item-post .post-body{width:95%;}.item-post .blog-entry-header{padding:30px 10px;padding-top:30px;}.item-post .blog-entry-header{width:95%}}</style>') } var $sb=$('.post-body .short-b').find('b'); $sb.each(function() { var $b=$(this), $t=$b.text().trim(); if($t.match('left')||$t.match('right')) { $b.replaceWith("") } } ) } ); $('.about-author .author-description span a').each(function() { var $this=$(this), cls=$this.text().trim(), url=$this.attr('href'); $this.replaceWith('<li class="'+cls+'"><a href="'+url+'" title="'+cls+'" target="_blank"/></li>'); $('.author-description').append($('.author-description span li')); $('.author-description').addClass('show-icons') } ); $('.footer-widgets-wrap').each(function() { var $t=$(this), $n=$t.find('.no-items').length; if($n==3) { $('#footer-wrapper').addClass('compact-footer') } } ); $('#omesnap-menuNavigasi li').each(function() { var lc=$(this), ltx=lc.find('a'), am=ltx.attr('href'), st=am.toLowerCase(), $this=lc, li=$this, text=st; if(st.match('getmega')) { $this.addClass('subNavigasi megaMenu').append('<div class="getMega">'+am+'</div>') } $this.find('.getMega').shortcode( { getMega:function() { var label=this.options.label, type=this.options.type, num=5; ajaxMega($this, type, num, label, text); if(type=='mtabs') { if(label !=undefined) { label=label.split('/') } megaTabs(li, type, label) } } } ) } ); function megaTabs(li, type, label) { if(type=='mtabs') { if(label !=undefined) { var lLen=label.length, code='<ul class="complex-tabs">'; for(var i=0; i<lLen; i++) { var tag=label[i]; if(tag) { code+='<div class="mega-tab" tab-omy="'+tag+'"/>' } } code+='</ul>'; li.addClass('tabMegaMenu mtabs').append(code); li.find('a:first').attr('href', 'javascript:;'); $('.mega-tab').each(function() { var $this=$(this), label=$this.attr('tab-omy'); ajaxMega($this, 'megatabs', 4, label, 'getmega') } ); li.find('ul.complex-tabs').tabomesnap( { onHover:true } ) } else { li.addClass('tabMegaMenu').append('<ul class="mega-widget">'+msgError()+'</ul>') } } }; $('#featuredPost .HTML .widget-content').each(function() { var $this=$(this), text=$this.text().trim().toLowerCase(); $this.shortcode( { getFeatured:function() { var label=this.options.label, type=this.options.type; switch(type) { case'featured2':var num=4; break; case'featured3':num=6; break; case'featured5':num=4; break; default:num=5; break } ajaxFeatured($this, type, num, label, text) } } ) } ); $('.widget-style .HTML .widget-content').each(function() { var $this=$(this), text=$this.text().trim().toLowerCase(); $this.shortcode( { getBlock:function() { var num=this.options.results, label=this.options.label, type=this.options.type; ajaxBlock($this, type, num, label, text) } } ) } ); $('.omesnap-widgetPost .HTML .widget-content').each(function() { var $this=$(this), text=$this.text().trim().toLowerCase(); $this.shortcode( { getWidget:function() { var num=this.options.results, label=this.options.label, type=this.options.type; ajaxWidget($this, type, num, label, text) } } ) } ); $('.omesnap-post-related').each(function() { var $this=$(this), label=$this.find('.related-tag').attr('data-label'), num=jumlahRelatedPost; if(num>=6) { num=6 } else { num=3 } ajaxRelated($this, 'related', num, label, 'hasilrelated') } ); var LLaddthis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===LLaddthis||0!=document.body.scrollTop&&!1===LLaddthis)&&(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=addthisLink;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),LLaddthis=!0)},!0);var LLJS=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===LLJS||0!=document.body.scrollTop&&!1===LLJS)&&(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=sharethisLink;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),LLJS=!0)},!0); function msgError() { return'<span class="no-posts"><b>Error:</b> No Results Found</span>' } function msgServerError() { return'<div class="no-posts error-503"><b>Failed to load resource:</b> the server responded with a status of 503</div>' } function beforeLoader() { return'<div class="loader"><div class="lds-ripple"><div></div><div></div></div></div>' } function getFeedUrl(type,num,label) { var furl=''; switch(label) { case'recent': furl='/feeds/posts/summary?alt=json&max-results='+num; break; case'comments':if(type=='list') { furl='/feeds/comments/summary?alt=json&max-results='+num } else { furl='/feeds/posts/summary/-/'+label+'?alt=json&max-results='+num } break; default:furl='/feeds/posts/summary/-/'+label+'?alt=json&max-results='+num; break } return furl } function getPostLink(feed, i) { for(var x=0; x<feed[i].link.length; x++)if(feed[i].link[x].rel=='alternate') { var link=feed[i].link[x].href; break } return link } function getPostTitle(feed, i) { var n=feed[i].title.$t; return n } function getPostImage(feed, i) { if('media$thumbnail'in feed[i]) { var src=feed[i].media$thumbnail.url; if(src.match('img.youtube.com')) { src=src.replace('/default.', '/0.') } var img=src } else { img='https://1.bp.blogspot.com/-ozkcrxptGoI/XxlrFVtlVqI/AAAAAAAAALY/eKpaVOesnns9PFKSz6BWh2fdtTnctyChACLcBGAsYHQ/s72-c/hartomy-noimage.png' } return img } function getPostAuthor(feed, i) { var n=feed[i].author[0].name.$t, by=messages.postedBy, em=''; if(by !='') { em='<em><svg viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z"/></svg>'+by+'</em>' } else { em='' } var code='<span class="entry-author">'+em+'<span class="by">'+n+'</span></span>'; return code } function getPostDate(feed, i) { var c=feed[i].published.$t, d=c.substring(0, 4), f=c.substring(5, 7), m=c.substring(8, 10), h=formatBulan[parseInt(f, 10)-1]+' '+m+', '+d; var on=messages.postedOn, em=''; if(on !='') { em='<em></em>' } else { em='' } var code=['<span class="entry-time">'+em+'<time class="published" datetime="'+c+'">'+h+'</time></span>', '<span class="entry-time"><time class="published" datetime="'+c+'">'+h+'</time></span>']; return code } function getPostLabel(feed, i) { if(feed[i].category !=undefined) { var tag=feed[i].category[0].term, code='<span class="label-category">'+tag+'</span>' } else { code='' } return code } function getPostComments(feed, i, link) { var n=feed[i].author[0].name.$t, e=feed[i].author[0].gd$image.src.replace('/s113', '/w55-h55-p-k-no-nu'), h=feed[i].title.$t; if(e.match('//img1.blogblog.com/img/blank.gif')) { var img='//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg' } else { var img=e } var code='<article class="custom-item item-'+i+'"><a class="post-image-link cmm-avatar" href="'+link+'"><span class="post-thumb" data-omy="'+img+'"/></a><h2 class="entry-title"><a href="'+link+'">'+n+'</a></h2><span class="cmm-snippet excerpt">'+h+'</span></article>'; return code } function getFeatMeta(type, i, author, date) { var code='<div class="entry-meta">'+date[1]+'</div>'; switch(type) { case'featured2':case'featured1':case'featured3':case'featured4':case'featured5':switch(i) { case 0:switch(type) { case'featured2': case'featured1':case'featured4':code='<div class="entry-meta">'+author+date[0]+'</div>'; break } break; case 1:switch(type) { case'featured4': code='<div class="entry-meta">'+author+date[0]+'</div>'; break } break } break } return code } function getAjax($this, type, num, label) { switch(type) { case'msimple':case'megatabs':case'featured2':case'featured1':case'featured3':case'featured4':case'featured5':case'block1':case'block2':case'col-left':case'col-right':case'carousel':case'videos':case'list':case'related':if(label==undefined) { label='geterror404' } var furl=getFeedUrl(type,num,label); $.ajax( { url:furl, type:'GET', dataType:'json', cache:true, beforeSend:function(data) { switch(type) { case'featured2':case'featured1':case'featured3':case'featured4':case'featured5':$this.html(beforeLoader()).parent().addClass('omesnap-open show-'+type+' container-width'); break; case'block1':case'block2':case'videos':case'carousel':case'related':$this.html(beforeLoader()).parent().addClass('omesnap-open'); break; case'col-left':$this.html(beforeLoader()).parent().addClass('column-left block-column omesnap-open'); break; case'col-right':$this.html(beforeLoader()).parent().addClass('column-right block-column omesnap-open'); break; case'list':$this.html(beforeLoader()); break } } , success:function(data) { var html = ""; switch (type) { case "msimple": case "megatabs": html = '<ul class="mega-widget">'; break; case "featured2": case "featured1": case "featured3": case "featured4": case "featured5": html = '<div class="featured-grid ' + type + '">'; break; case "block1": html = '<div class="widget-style-1">'; break; case "block2": html = '<div class="widget-style-2 total-' + num + '">'; break; case "col-left": case "col-right": html = '<div class="column-posts">'; break; case "carousel": html = '<div class="block-carousel">'; break; case "videos": html = '<div class="block-videos total-' + num + '">'; break; case "list": html = '<div class="custom-widget">'; break; case "related": html = '<div class="related-posts total-' + num + '">'; break; } var entry=data.feed.entry; if(entry !=undefined) { for(var i=0, feed=entry; i<feed.length; i++) { var link=getPostLink(feed, i), title=getPostTitle(feed, i, link), image=getPostImage(feed, i, link), author=getPostAuthor(feed, i), date=getPostDate(feed, i), tag=getPostLabel(feed, i), feat_meta=getFeatMeta(type, i, author, date); var content=''; switch(type) { case'msimple':case'megatabs':content+='<article class="mega-item"><div class="mega-content"><a class="post-image-link" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>'; break; case'featured2':case'featured1':case'featured4':case'featured5':switch(i) { case 0:content+='<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a>'+tag+'<div class="entry-info"><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2>'+feat_meta+'</div></div></article><div class="featured-scroll">'; break; default:content+='<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a>'+tag+'<div class="entry-info"><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2>'+feat_meta+'</div></div></article>'; break } break; case'featured3':switch(i) { case 0:content+='<div class="featured-carousel"><article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2>'+feat_meta+'</div></div></article>'; break; default:content+='<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2>'+feat_meta+'</div></div></article>'; break } break; case'block1':switch(i) { case 0:content+='<article class="block-item item-'+i+'"><div class="block-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></div></article>'; break; default:content+='<article class="block-item item-'+i+'"><a class="post-image-link" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>'; break } break; case'block2':switch(i) { case 0:content+='<article class="block-item item-'+i+'"><div class="block-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></div></article><div class="block-grid">'; break; default:content+='<article class="block-item item-'+i+'"><div class="entry-image"><a class="post-image-link" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a></div><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></article>'; break } break; case'col-left':case'col-right':switch(i) { case 0:content+='<article class="column-item item-'+i+'"><div class="column-inner"><a class="post-image-link before-mask" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></div></article>'; break; default:content+='<article class="column-item item-'+i+'"><a class="post-image-link" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>'; break } break; case 'carousel': content += '<article class="carousel-item item-' + i + '"><div class="entry-image"><a class="post-image-link" href="' + link + '"><span class="post-thumb touch-effect" data-omy="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>'; break; case 'videos': content += '<article class="videos-item item-' + i + '"><div class="entry-image"><a class="post-image-link" href="' + link + '"><span class="post-thumb touch-effect" data-omy="' + image + '"/><span class="video-icon"><svg width="24" height="24" fill="currentColor" viewBox="0 0 294.843 294.843"><path d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z" /><path d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029C113.877,77.926,111.575,77.902,109.699,78.969z" /></svg></span></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>'; break; case 'list': switch (label) { case 'comments': var code = getPostComments(feed, i, link); content += code; break; default: content += '<article class="custom-item item-' + i + '"><a class="post-image-link" href="' + link + '"><span class="post-thumb touch-effect" data-omy="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>'; break } break; case'related':content+='<article class="related-item item-'+i+'"><div class="related-item-inner"><div class="entry-image"><a class="post-image-link" href="'+link+'"><span class="post-thumb touch-effect" data-omy="'+image+'"/></a></div><h2 class="entry-title"><a href="'+link+'">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></article>'; break } html+=content } } else { switch(type) { case'msimple':case'megatabs':html='<ul class="mega-widget">'+msgError()+'</ul>'; break; default:html=msgError(); break } } switch(type) { case'msimple':html+='</ul>'; $this.append(html).addClass('msimple'); $this.find('a:first').attr('href', function($this, href) { switch(label) { case'recent':href=href.replace(href, '/search'); break; default:href=href.replace(href, '/search/label/'+label); break } return href } );  break; case'featured3':html+='</div>'; $this.html(html); var $slider=$this.find('.featured-carousel'); $slider.owlCarousel( { items:3, slideBy:1, margin:0, smartSpeed:900, nav:false, navText:['<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" fill="currentColor"><path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>', '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>'], loop:true, autoHeight:false, autoplay:true, dots:true, responsive: { 0: { items:1 } , 541: { items:2 } , 768: { items:2 } , 800: { items:3 } } } ); break; case'featured2':case'featured1':case'featured3':case'featured4':case'featured5':html+='</div></div>'; $this.html(html); break; case'block1':case'col-left':case'col-right':case'videos':html+='</div>'; $this.html(html); break; case'block2':html+='</div></div>'; $this.html(html); break; case'carousel':html+='</div>'; $this.html(html); var $slider=$this.find('.block-carousel'); $slider.owlCarousel( { items:3, slideBy:3, margin:20, smartSpeed:1200, nav:true, navText:['<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" fill="currentColor"><path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>', '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>'], loop:true, autoHeight:false, autoplay:true, dots:true, responsive: { 0: { items:1 } , 541: { items:2 } , 681: { items:2 } } } ); break; default:html+='</div>'; $this.html(html); break } $this.find('span.post-thumb').lazyomesnap() } , error:function() { switch(type) { case'msimple':$this.append('<ul>'+msgServerError()+'</ul>'); break; default:$this.html(msgServerError()); break } } } ) } } function ajaxMega($this, type, num, label, text) { if(text.match('getmega')) { if(type=='msimple'||type=='megatabs'||type=='mtabs') { return getAjax($this, type, num, label) } else { $this.addClass('subNavigasi megaMenu').append('<ul class="mega-widget">'+msgError()+'</ul>') } } } function ajaxFeatured($this, type, num, label, text) { if(text.match('getfeatured')) { if(type=='featured2'||type=='featured1'||type=='featured3'||type=='featured4'||type=='featured5') { return getAjax($this, type, num, label) } else { $this.html(beforeLoader()).parent().addClass('omesnap-open'); setTimeout(function() { $this.html(msgError()) } , 500) } } } function ajaxBlock($this, type, num, label, text) { if(text.match('getblock')) { if(type=='block1'||type=='block2'||type=='col-left'||type=='col-right'||type=='carousel'||type=='videos') { var moreText=showMoreText, text=''; if(moreText !='') { text=moreText } else { text=messages.showMore } $this.parent().find('.widget-title').append('<a class="more" href="/search/label/'+label+'">'+text+'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"/></svg></a>'); return getAjax($this, type, num, label) } else { $this.html(msgError()).parent().addClass('omesnap-open') } } } function ajaxWidget($this, type, num, label, text) { if(text.match('getwidget')) { if(type=='list') { return getAjax($this, type, num, label) } else { $this.html(msgError()) } } } function ajaxRelated($this, type, num, label, text) { if(text.match('hasilrelated')) { return getAjax($this, type, num, label) } } $('.comments-title h3.title').each(function() { var $t=$(this), $tx=$t.text().trim(), $c=$t.attr('count').trim(), $m=$t.attr('message').trim(), $sp=$tx.split('/'), $r=''; if($c==0) { $r=$sp[1] } else { if($sp[2]==undefined) { $r=$sp[0]+' '+$m } else { $r=$sp[0]+' '+$sp[2] } } $t.text($r) } ); $('.omesnap-blog-comments-post').each(function() { var $this = $(this), system = jenisKomentar, disqus = '<div id="disqus_thread"><div id="disqus_empty"></div></div>', sClass = 'comments-system-' + system; switch (system) { case 'blogger': $this.addClass(sClass).show(); $('.entry-meta .entry-comments-link').addClass('aktif'); break; case 'disqus': $this.addClass(sClass).show().find('#comments').replaceWith(disqus); break; case 'hide': $this.hide(); break; default: $this.addClass('comments-system-default').show(); $('.entry-meta .entry-comments-link').addClass('aktif'); break } var $r=$this.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'), $c=$this.find('.comments .toplevel-thread > #top-continue'); $r.on('click', function() { $c.show() } ); $c.on('click', function() { $c.hide() } ) } ); $(function() { $('.index-post .post-image-link .post-thumb, .PopularPosts .post-image-link .post-thumb, .FeaturedPost .post-image-link .post-thumb').lazyomesnap(); $('.post-body .first-thumbnail .post-thumb,.about-author .author-avatar, .post-body .omeLazyYt .youtube-thumb').lazyomesnap(); $('.mobile-logo').each(function() { var $t=$(this), $l=$('#main-logo .header-widget a').clone(); $l.find('#h1-tag').remove(); $l.appendTo($t) } ); $('#mobile-menu').each(function() { var $t=$(this), $m=$('#omesnap-menuNavigasi-nav').clone(); $m.attr('id', 'mobileNavigasiMenu'); $m.find('.getMega, .mega-widget, .mega-tab').remove(); $m.find('li.tabMegaMenu .complex-tabs').each(function() { var $eq=$(this); $eq.replaceWith($eq.find('> ul.select-tab').attr('class', 'sub-menu littleSub')) } ); $m.find('.megaMenu > a').each(function() { var $a=$(this), $h=$a.attr('href').trim().toLowerCase(); if($h.match('getmega')) { $a.attr('href', '/search') } } ); $m.find('.tabMegaMenu ul li > a').each(function() { var $a=$(this), $l=$a.text().trim(); $a.attr('href', '/search/label/'+$l) } ); $m.appendTo($t); $('.show-mobile-menu, .closeMobileMenu, .overlay').on('click', function() { $('body').toggleClass('nav-active') } ); $('.mobile-menu .subNavigasi').append('<div class="submenu-toggle"><svg height="1em" viewBox="0 0 24 24" fill="currentColor" width="1em"><path d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg></div>'); $('.mobile-menu .megaMenu').find('.submenu-toggle').remove(); $('.mobile-menu .tabMegaMenu').append('<div class="submenu-toggle"><svg height="1em" viewBox="0 0 24 24" fill="currentColor" width="1em"><path d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"/></svg></div>'); $('.mobile-menu ul li .submenu-toggle').on('click', function($this) { if($(this).parent().hasClass('subNavigasi')) { $this.preventDefault(); if( !$(this).parent().hasClass('show')) { $(this).parent().addClass('show').children('.littleSub').slideToggle(170) } else { $(this).parent().removeClass('show').find('> .littleSub').slideToggle(170) } } } ) } ); $('.navbarWrap .navbar').each(function() { var $this=$(this); if(fixedMenu==true) { if($this.length>0) { var t=$(document).scrollTop(), w=$this.offset().top, s=$this.height(), h=(w+s); $(window).scroll(function() { var n=$(document).scrollTop(), f=$('#footer-wrapper').offset().top, m=(f-s); if(n<m) { if(n>h) { $this.addClass('fixed-nav') } else if(n<=0) { $this.removeClass('fixed-nav') } if(n>t) { $this.removeClass('show') } else { $this.addClass('show') } t=$(document).scrollTop() } } ) } } } ); $('#main-wrapper, #sidebar-wrapper').each(function() { if(fixedSidebar==true) { $(this).theiaStickySidebar( { additionalMarginTop:60, additionalMarginBottom:30 } ) } } ); $('.back-top').each(function() { var $this=$(this); $(window).on('scroll', function() { $(this).scrollTop()>=100?$this.fadeIn(250):$this.fadeOut(250) } ), $this.click(function() { $('html, body').animate( { scrollTop:0 } , 500) } ) } ); $('#load-more-link').each(function() { var $this=$(this), $loadLink=$this.data('load'); if($loadLink) { $('#load-more-link').show() } $('#load-more-link').on('click', function(a) { $('#load-more-link').hide(); $.ajax( { url:$loadLink, success:function(data) { var $p=$(data).find('.blog-posts'); $p.find('.index-post').addClass('post-animated post-fadeInUp'); $('.blog-posts').append($p.html()); $loadLink=$(data).find('#load-more-link').data('load'); if($loadLink) { $('#load-more-link').show() } else { $('#load-more-link').hide(); $('#blog-pager .no-more').addClass('show') } $('.index-post .post-image-link .post-thumb').lazyomesnap() } , beforeSend:function() { $('#blog-pager .loading').show() } , complete:function() { $('#blog-pager .loading').hide() } } ); a.preventDefault() } ) } ) } ); !function() { var a = $("a.blog-pager-newer-link"), b = $("a.blog-pager-older-link"); $.get(a.attr("href"), function (pagger) { a.html("<svg width='1em' height='1em' viewBox='0 0 20 20'><path d='M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574c-.445.436-1.197.408-1.615 0c-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 0 1 0-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z'/></svg><span class='next'>" + next + "</span> <span>" + $(pagger).find(".entry-title").first().text() + "</span>") }, "html"); $.get(b.attr("href"), function (pagger) { b.html("<span class='Previous'>" + previous + "</span><svg width='1em' height='1em' fill='currentColor' viewBox='0 0 24 24'><path d='M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z'/></svg><span>" + $(pagger).find(".entry-title").first().text() + "</span>") }, "html"); }();
/*! pre */ $('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1); function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/Arlina-Design/frame@master/highlightr.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
/*! New Waves */ !function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===d.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("touch-effect"))){e=n;break}if(n.classList.contains("touch-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;var o=(n=a[a.length-1]).getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},u)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("touch-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(u(".touch-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);
(function (window, document) {

	var typeof_string			= typeof "",
		typeof_undefined		= typeof undefined,
		typeof_function			= typeof function () {},
		typeof_object			= typeof {},
		isTypeOf				= function (item, type) { return typeof item === type; },
		isString				= function (item) { return isTypeOf(item, typeof_string); },
		isUndefined				= function (item) { return isTypeOf(item, typeof_undefined); },
		isFunction				= function (item) { return isTypeOf(item, typeof_function); },

		isObject				= function (item) { return isTypeOf(item, typeof_object); },
		//Returns true if it is a DOM element
		isElement				= function (o) {
			return typeof HTMLElement === "object" ? o instanceof HTMLElement : typeof o === "object" && o.nodeType === 1 && typeof o.nodeName === "string";
		},



		generateomesnapCart = function (space) {

			// stealing this from selectivizr
			var selectorEngines = {
				"MooTools"							: "$$",
				"Prototype"							: "$$",
				"jQuery"							: "*"
			},


				// local variables for internal use
				item_id					= 0,
				item_id_namespace		= "SCI-",
				sc_items				= {},
				namespace				= space || "productCart",
				selectorFunctions		= {},
				eventFunctions			= {},
				baseEvents				= {},

				// local references
				localStorage			= window.localStorage,
				console					= window.console || { msgs: [], log: function (msg) { console.msgs.push(msg); } },

				// used in views 
				_VALUE_		= 'value',
				_TEXT_		= 'text',
				_HTML_		= 'html',
				_CLICK_		= 'click',

				// Currencies
				currencies = {
					"IDR": { code: "IDR", symbol: "Rp. ", name: "Indonesia Rupiah" },
					"USD": { code: "USD", symbol: "&#36;", name: "US Dollar" },
					"AUD": { code: "AUD", symbol: "&#36;", name: "Australian Dollar" },
					"BRL": { code: "BRL", symbol: "R&#36;", name: "Brazilian Real" },
					"CAD": { code: "CAD", symbol: "&#36;", name: "Canadian Dollar" },
					"CZK": { code: "CZK", symbol: "&nbsp;&#75;&#269;", name: "Czech Koruna", after: true },
					"DKK": { code: "DKK", symbol: "DKK&nbsp;", name: "Danish Krone" },
					"EUR": { code: "EUR", symbol: "&euro;", name: "Euro" },
					"HKD": { code: "HKD", symbol: "&#36;", name: "Hong Kong Dollar" },
					"HUF": { code: "HUF", symbol: "&#70;&#116;", name: "Hungarian Forint" },
					"ILS": { code: "ILS", symbol: "&#8362;", name: "Israeli New Sheqel" },
					"JPY": { code: "JPY", symbol: "&yen;", name: "Japanese Yen", accuracy: 0 },
					"MXN": { code: "MXN", symbol: "&#36;", name: "Mexican Peso" },
					"NOK": { code: "NOK", symbol: "NOK&nbsp;", name: "Norwegian Krone" },
					"NZD": { code: "NZD", symbol: "&#36;", name: "New Zealand Dollar" },
					"PLN": { code: "PLN", symbol: "PLN&nbsp;", name: "Polish Zloty" },
					"GBP": { code: "GBP", symbol: "&pound;", name: "Pound Sterling" },
					"SGD": { code: "SGD", symbol: "&#36;", name: "Singapore Dollar" },
					"SEK": { code: "SEK", symbol: "SEK&nbsp;", name: "Swedish Krona" },
					"CHF": { code: "CHF", symbol: "CHF&nbsp;", name: "Swiss Franc" },
					"THB": { code: "THB", symbol: "&#3647;", name: "Thai Baht" },
					"BTC": { code: "BTC", symbol: " BTC", name: "Bitcoin", accuracy: 4, after: true	}
				},

				// default options
				settings = {
					checkout				: { type: "PayPal", email: "hartommy.oktavian@gmail.com" },
					currency				: "IDR",
					language				: "english-us",

					cartStyle				: "div",
					cartColumns			: [
						{ attr: "name", label: "Name" },
						{ attr: "price", label: "Price", view: 'currency' },
						{ view: "decrement" },
						{ attr: "quantity", label: "Qty" },
						{ view: "increment" },
						{ attr: "total", label: "SubTotal", view: 'currency' },
						{ view: "remove", text: "Remove" }
					],

					excludeFromCheckout	: ['thumb'],

					shippingFlatRate		: 0,
					shippingQuantityRate	: 0,
					shippingTotalRate		: 0,
					shippingCustom		: null,

					taxRate				: 0,
					
					taxShipping			: false,

					data				: {}

				},


				// main omesnapCart object, function call is used for setting options
				omesnapCart = function (options) {
					// shortcut for omesnapCart.ready
					if (isFunction(options)) {
						return omesnapCart.ready(options);
					}

					// set options
					if (isObject(options)) {
						return omesnapCart.extend(settings, options);
					}
				},

				// selector engine
				$engine,

				// built in cart views for item cells
				cartColumnViews;

			// function for extending objects
			omesnapCart.extend = function (target, opts) {
				var next;

				if (isUndefined(opts)) {
					opts = target;
					target = omesnapCart;
				}

				for (next in opts) {
					if (Object.prototype.hasOwnProperty.call(opts, next)) {
						target[next] = opts[next];
					}
				}
				return target;
			};

			// create copy function
			omesnapCart.extend({
				copy: function (n) {
					var cp = generateomesnapCart(n);
					cp.init();
					return cp;
				}
			});

			// add in the core functionality
			omesnapCart.extend({

				isReady: false,

				// this is where the magic happens, the add function
				add: function (values, opt_quiet) {
					var info		= values || {},
						newItem		= new omesnapCart.Item(info),
						addItem 	= true,
						// optionally supress event triggers
						quiet 		= opt_quiet === true ? opt_quiet : false,
						oldItem;

					// trigger before add event
					if (!quiet) {
					  	addItem = omesnapCart.trigger('beforeAdd', [newItem]);
					
						if (addItem === false) {
							return false;
						}
					}
					
					// if the new item already exists, increment the value
					oldItem = omesnapCart.has(newItem);
					if (oldItem) {
						oldItem.increment(newItem.quantity());
						newItem = oldItem;

					// otherwise add the item
					} else {
						sc_items[newItem.id()] = newItem;
					}

					// update the cart
					omesnapCart.update();

					if (!quiet) {
						// trigger after add event
						omesnapCart.trigger('afterAdd', [newItem, isUndefined(oldItem)]);
					}

					// return a reference to the added item
					return newItem;
				},


				// iteration function
				each: function (array, callback) {
					var next,
						x = 0,
						result,
						cb,
						items;

					if (isFunction(array)) {
						cb = array;
						items = sc_items;
					} else if (isFunction(callback)) {
						cb = callback;
						items = array;
					} else {
						return;
					}

					for (next in items) {
						if (Object.prototype.hasOwnProperty.call(items, next)) {
							result = cb.call(omesnapCart, items[next], x, next);
							if (result === false) {
								return;
							}
							x += 1;
						}
					}
				},

				find: function (id) {
					var items = [];

					// return object for id if it exists
					if (isObject(sc_items[id])) {
						return sc_items[id];
					}
					// search through items with the given criteria
					if (isObject(id)) {
						omesnapCart.each(function (item) {
							var match = true;
							omesnapCart.each(id, function (val, x, attr) {

								if (isString(val)) {
									// less than or equal to
									if (val.match(/<=.*/)) {
										val = parseFloat(val.replace('<=', ''));
										if (!(item.get(attr) && parseFloat(item.get(attr)) <= val)) {
											match = false;
										}

									// less than
									} else if (val.match(/</)) {
										val = parseFloat(val.replace('<', ''));
										if (!(item.get(attr) && parseFloat(item.get(attr)) < val)) {
											match = false;
										}

									// greater than or equal to
									} else if (val.match(/>=/)) {
										val = parseFloat(val.replace('>=', ''));
										if (!(item.get(attr) && parseFloat(item.get(attr)) >= val)) {
											match = false;
										}

									// greater than
									} else if (val.match(/>/)) {
										val = parseFloat(val.replace('>', ''));
										if (!(item.get(attr) && parseFloat(item.get(attr)) > val)) {
											match = false;
										}

									// equal to
									} else if (!(item.get(attr) && item.get(attr) === val)) {
										match = false;
									}

								// equal to non string
								} else if (!(item.get(attr) && item.get(attr) === val)) {
									match = false;
								}

								return match;
							});

							// add the item if it matches
							if (match) {
								items.push(item);
							}
						});
						return items;
					}

					// if no criteria is given we return all items
					if (isUndefined(id)) {

						// use a new array so we don't give a reference to the
						// cart's item array
						omesnapCart.each(function (item) {
							items.push(item);
						});
						return items;
					}

					// return empty array as default
					return items;
				},

				// return all items
				items: function () {
					return this.find();
				},

				// check to see if item is in the cart already
				has: function (item) {
					var match = false;

					omesnapCart.each(function (testItem) {
						if (testItem.equals(item)) {
							match = testItem;
						}
					});
					return match;
				},

				// empty the cart
				empty: function () {
					// remove each item individually so we see the remove events
					var newItems = {};
					omesnapCart.each(function (item) {
						// send a param of true to make sure it doesn't
						// update after every removal
						// keep the item if the function returns false,
						// because we know it has been prevented 
						// from being removed
						if (item.remove(true) === false) {
							newItems[item.id()] = item
						}
					});
					sc_items = newItems;
					omesnapCart.update();
				},


				// functions for accessing cart info
				quantity: function () {
					var quantity = 0;
					omesnapCart.each(function (item) {
						quantity += item.quantity();
					});
					return quantity;
				},

				total: function () {
					var total = 0;
					omesnapCart.each(function (item) {
						total += item.total();
					});
					return total;
				},

				grandTotal: function () {
					return omesnapCart.total() + omesnapCart.tax() + omesnapCart.shipping();
				},


				// updating functions
				update: function () {
					omesnapCart.save();
					omesnapCart.trigger("update");
				},

				init: function () {
					omesnapCart.load();
					omesnapCart.update();
					omesnapCart.ready();
				},

				// view management
				$: function (selector) {
					return new omesnapCart.ELEMENT(selector);
				},

				$create: function (tag) {
					return omesnapCart.$(document.createElement(tag));
				},

				setupViewTool: function () {
					var members, member, context = window, engine;

					// Determine the "best fit" selector engine
					for (engine in selectorEngines) {
						if (Object.prototype.hasOwnProperty.call(selectorEngines, engine) && window[engine]) {
							members = selectorEngines[engine].replace("*", engine).split(".");
							member = members.shift();
							if (member) {
								context = context[member];
							}
							if (typeof context === "function") {
								// set the selector engine and extend the prototype of our
								// element wrapper class
								$engine = context;
								omesnapCart.extend(omesnapCart.ELEMENT._, selectorFunctions[engine]);
								return;
							}
						}
					}
				},

				// return a list of id's in the cart
				ids: function () {
					var ids = [];
					omesnapCart.each(function (item) {
						ids.push(item.id());
					});
					return ids;

				},


				// storage
				save: function () {
					omesnapCart.trigger('beforeSave');

					var items = {};

					// save all the items
					omesnapCart.each(function (item) {
						items[item.id()] = omesnapCart.extend(item.fields(), item.options());
					});

					localStorage.setItem(namespace + "_items", JSON.stringify(items));

					omesnapCart.trigger('afterSave');
				},

				load: function () {

					// empty without the update
					sc_items = {};

					var items = localStorage.getItem(namespace + "_items");

					if (!items) {
						return;
					}
					
					// we wrap this in a try statement so we can catch 
					// any json parsing errors. no more stick and we
					// have a playing card pluckin the spokes now...
					// soundin like a harley.
					try {
						omesnapCart.each(JSON.parse(items), function (item) {
							omesnapCart.add(item, true);
						});
					} catch (e){
						omesnapCart.error( "Error Loading data: " + e );
					}


					omesnapCart.trigger('load');
				},

				// ready function used as a shortcut for bind('ready',fn)
				ready: function (fn) {

					if (isFunction(fn)) {
						// call function if already ready already
						if (omesnapCart.isReady) {
							fn.call(omesnapCart);

						// bind if not ready
						} else {
							omesnapCart.bind('ready', fn);
						}

					// trigger ready event
					} else if (isUndefined(fn) && !omesnapCart.isReady) {
						omesnapCart.trigger('ready');
						omesnapCart.isReady = true;
					}

				},


				error: function (message) {
					var msg = "";
					if (isString(message)) {
						msg = message;
					} else if (isObject(message) && isString(message.message)) {
						msg = message.message;
					}
					try { console.log("omesnapCart(js) Error: " + msg); } catch (e) {}
					omesnapCart.trigger('error', [message]);
				}
			});


			/*******************************************************************
			 *	TAX AND SHIPPING
			 *******************************************************************/
			omesnapCart.extend({

				// TODO: tax and shipping
				tax: function () {
					var totalToTax = settings.taxShipping ? omesnapCart.total() + omesnapCart.shipping() : omesnapCart.total(),
						cost = omesnapCart.taxRate() * totalToTax;
					
					omesnapCart.each(function (item) {
						if (item.get('tax')) {
							cost += item.get('tax');
						} else if (item.get('taxRate')) {
							cost += item.get('taxRate') * item.total();
						}
					});
					return parseFloat(cost);
				},
				
				taxRate: function () {
					return settings.taxRate || 0;
				},

				shipping: function (opt_custom_function) {

					// shortcut to extend options with custom shipping
					if (isFunction(opt_custom_function)) {
						omesnapCart({
							shippingCustom: opt_custom_function
						});
						return;
					}

					var cost = settings.shippingQuantityRate * omesnapCart.quantity() +
							settings.shippingTotalRate * omesnapCart.total() +
							settings.shippingFlatRate;

					if (isFunction(settings.shippingCustom)) {
						cost += settings.shippingCustom.call(omesnapCart);
					}

					omesnapCart.each(function (item) {
						cost += parseFloat(item.get('shipping') || 0);
					});
					return parseFloat(cost);
				}

			});

			/*******************************************************************
			 *	CART VIEWS
			 *******************************************************************/

			// built in cart views for item cells
			cartColumnViews = {
				attr: function (item, column) {
					return item.get(column.attr) || "";
				},

				currency: function (item, column) {
					return omesnapCart.toCurrency(item.get(column.attr) || 0);
				},

				link: function (item, column) {
					return "<a href='" + item.get(column.attr) + "'>" + column.text + "</a>";
				},

				muncul: function (item, column) {
                  return "" + (column.text || "Jumlah : ") + "";
				},

				harga: function (item, column) {
                  return "" + (column.text || "<a class=bintang>*</a>Sub total<a class=bintang>*</a> : ") + "";
				},

				boldwa: function (item, column) {
                  return "" + (column.text || "<a class=bintang>*</a>") + "";
				},

				bataswa: function (item, column) {
                  return "" + (column.text || "<a class=bintang>%0AðŸ›’ ====================%0A</a>") + "";
				},

				enterwa: function (item, column) {
                  return "" + (column.text || "<a class=bintang>%0A</a>") + "";
				},

				miringwa: function (item, column) {
                  return "" + (column.text || "<a class=bintang>_</a>") + "";
				},

				decrement: function (item, column) {
					return "<a href='javascript:;' class='" + namespace + "_decrement'>" + (column.text || "<svg width='24' height='24' fill='currentColor' viewBox='0 0 24 24'><path d='M19,13H5V11H19V13Z' /></svg>") + "</a>";
				},

				increment: function (item, column) {
					return "<a href='javascript:;' class='" + namespace + "_increment'>" + (column.text || "<svg width='24' height='24' fill='currentColor' viewBox='0 0 24 24'><path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>") + "</a>";
				},

				image: function (item, column) {
					return "<a href='" + item.get("link") + "'><img src='" + item.get(column.attr) + "' alt='" + item.get("name") + "' title='" + item.get("name") + "'/></a>";
				},

				remove: function (item, column) {
					return "<a href='javascript:;' class='" + namespace + "_remove'>" + (column.text || "<svg width='24' height='24' viewBox='0 0 40 40'><g><path d='M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z'/></g><g><path d='M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9   c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z'/></g><g><path d='M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z'/></g><g><path d='M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z'/></g><g><path d='M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z'/></g></svg>") + "</a>";
				}
			};

          $('.tambahproduk input').on('keyup', function(){
            var value = parseInt($('.tambahproduk input').val());
            if(value <= 1) {
              $('.tambahproduk input').val(1);
              totalPrice(1);
            }
            $(this).parents('.tambahproduk').attr('data-selected',value);
            totalPrice(value);

          });
          $('.tambahproduk .kurangi').on('click', function(){
            var value = parseInt($('.tambahproduk input').val()) - 1;
            if(value <= 1) {
              $('.tambahproduk input').val(1);
              $(this).parents('.tambahproduk').attr('data-selected',1);
              totalPrice(1);

            } else {
              $('.tambahproduk input').val(value);
              $(this).parents('.tambahproduk').attr('data-selected',value);
              totalPrice(value);

            }
          });
          $('.tambahproduk .tambah').on('click', function(){
            var value = parseInt($('.tambahproduk input').val()) + 1;
            $('.tambahproduk input').val(value);
            $(this).parents('.tambahproduk').attr('data-selected',value);
            totalPrice(value);
          });
			// cart column wrapper class and functions
			function cartColumn(opts) {
				var options = opts || {};
				return omesnapCart.extend({
					attr			: "",
					label			: "",
					view			: "attr",
					text			: "",
					className		: "",
					hide			: false
				}, options);
			}

			function cartCellView(item, column) {
				var viewFunc = isFunction(column.view) ? column.view : isString(column.view) && isFunction(cartColumnViews[column.view]) ? cartColumnViews[column.view] : cartColumnViews.attr;

				return viewFunc.call(omesnapCart, item, column);
			}


			omesnapCart.extend({

				// write out cart
				writeCart: function (selector) {
					var TABLE = settings.cartStyle.toLowerCase(),
						isTable = TABLE === 'table',
						TR = isTable ? "div" : "div",
						TH = isTable ? 'div' : 'div',
						TD = isTable ? 'div' : 'div',
						THEAD = isTable ? 'thead' : 'div',
						cart_container = omesnapCart.$(selector),
						container = omesnapCart.$(selector),
						column,
						klass,
						label,
						x,
						xlen;

					container.html(' ').append(cart_container);


					// cycle through the items
					omesnapCart.each(function (item, y) {
						omesnapCart.createCartRow(item, y, TR, TD, cart_container);
					});

					return cart_container;
				},

				// generate a cart row from an item
				createCartRow: function (item, y, TR, TD, container) {
					var row = omesnapCart.$create(TR)
										.addClass('itemProduk produk' + y + " " + (y % 2 ? "" : ""))
										.attr('id', "cartItem_" + item.id()),
						j,
						jlen,
						column,
						klass,
						content,
						cell;

					container.append(row);

					// cycle through the columns to create each cell for the item
					for (j = 0, jlen = settings.cartColumns.length; j < jlen; j += 1) {
						column	= cartColumn(settings.cartColumns[j]);
						klass	= (column.attr || (isString(column.view) ? column.view : column.label || column.text || "cell")) + " " + column.className;
						content = cartCellView(item, column);
						cell	= omesnapCart.$create(TD).addClass(klass).html(content);

						row.append(cell);
					}
					return row;
				}

			});

			/*******************************************************************
			 *	CART ITEM CLASS MANAGEMENT
			 *******************************************************************/

			omesnapCart.Item = function (info) {

				// we use the data object to track values for the item
				var _data = {},
					me = this;

				// cycle through given attributes and set them to the data object
				if (isObject(info)) {
					omesnapCart.extend(_data, info);
				}

				// set the item id
				item_id += 1;
				_data.id = _data.id || item_id_namespace + item_id;
				while (!isUndefined(sc_items[_data.id])) {
					item_id += 1;
					_data.id = item_id_namespace + item_id;
				}

				function checkQuantityAndPrice() {

					// check to make sure price is valid
					if (isString(_data.price)) {
					   // trying to remove all chars that aren't numbers or '.'
						_data.price = parseFloat(_data.price.replace(omesnapCart.currency().decimal, ".").replace(/[^0-9\.]+/ig, ""));

					}
					if (isNaN(_data.price)) {
						_data.price = 0;
					}
					if (_data.price < 0) {
						_data.price = 0;
					}

					// check to make sure quantity is valid
					if (isString(_data.quantity)) {
						_data.quantity = parseInt(_data.quantity.replace(omesnapCart.currency().delimiter, ""), 10);
					}
					if (isNaN(_data.quantity)) {
						_data.quantity = 1;
					}
					if (_data.quantity <= 0) {
						me.remove();
					}

				}

				// getter and setter methods to access private variables
				me.get = function (name, skipPrototypes) {

					var usePrototypes = !skipPrototypes;

					if (isUndefined(name)) {
						return name;
					}

					// return the value in order of the data object and then the prototype
					return isFunction(_data[name])	? _data[name].call(me) :
							!isUndefined(_data[name]) ? _data[name] :

							isFunction(me[name]) && usePrototypes		? me[name].call(me) :
							!isUndefined(me[name]) && usePrototypes	? me[name] :
							_data[name];
				};
				me.set = function (name, value) {
					if (!isUndefined(name)) {
						_data[name.toLowerCase()] = value;
						if (name.toLowerCase() === 'price' || name.toLowerCase() === 'quantity') {
							checkQuantityAndPrice();
						}
					}
					return me;
				};
				me.equals = function (item) {
					for( var label in _data ){
						if (Object.prototype.hasOwnProperty.call(_data, label)) {
							if (label !== 'quantity' && label !== 'id') {
								if (item.get(label) !== _data[label]) {
									return false;
								}
							}
						}
					}
					return true;
				};
				me.options = function () {
					var data = {};
					omesnapCart.each(_data,function (val, x, label) {
						var add = true;
						omesnapCart.each(me.reservedFields(), function (field) {
							if (field === label) {
								add = false;
							}
							return add;
						});

						if (add) {
							data[label] = me.get(label);
						}
					});
					return data;
				};


				checkQuantityAndPrice();
			};

			omesnapCart.Item._ = omesnapCart.Item.prototype = {

				// editing the item quantity
				increment: function (amount) {
					var diff = amount || 1;
					diff = parseInt(diff, 10);

					this.quantity(this.quantity() + diff);
					if (this.quantity() < 1) {
						this.remove();
						return null;
					}
					return this;

				},
				decrement: function (amount) {
					var diff = amount || 1;
					return this.increment(-parseInt(diff, 10));
				},
				remove: function (skipUpdate) {
					var removeItemBool = omesnapCart.trigger("beforeRemove", [sc_items[this.id()]]);
					if (removeItemBool === false ) {
						return false;
					}
					delete sc_items[this.id()];
					if (!skipUpdate) { 
						omesnapCart.update();
					}
					return null;
				},

				// special fields for items
				reservedFields: function () {
					return ['quantity', 'id', 'item_number', 'price', 'name', 'shipping', 'tax', 'taxRate'];
				},

				// return values for all reserved fields if they exist
				fields: function () {
					var data = {},
						me = this;
					omesnapCart.each(me.reservedFields(), function (field) {
						if (me.get(field)) {
							data[field] = me.get(field);
						}
					});
					return data;
				},


				// shortcuts for getter/setters. can
				// be overwritten for customization
				// btw, we are hiring at wojo design, and could
				// use a great web designer. if thats you, you can
				// get more info at http://wojodesign.com/now-hiring/
				// or email me directly: brett@wojodesign.com
				quantity: function (val) {
					return isUndefined(val) ? parseInt(this.get("quantity", true) || 1, 10) : this.set("quantity", val);
				},
				price: function (val) {
					return isUndefined(val) ?
							parseFloat((this.get("price",true).toString()).replace(omesnapCart.currency().symbol,"").replace(omesnapCart.currency().delimiter,"") || 1) :
							this.set("price", parseFloat((val).toString().replace(omesnapCart.currency().symbol,"").replace(omesnapCart.currency().delimiter,"")));
				},
				id: function () {
					return this.get('id',false);
				},
				total:function () {
					return this.quantity()*this.price();
				}

			};




			/*******************************************************************
			 *	CHECKOUT MANAGEMENT
			 *******************************************************************/

			omesnapCart.extend({
				checkout: function () {
					if (settings.checkout.type.toLowerCase() === 'custom' && isFunction(settings.checkout.fn)) {
						settings.checkout.fn.call(omesnapCart,settings.checkout);
					} else if (isFunction(omesnapCart.checkout[settings.checkout.type])) {
						var checkoutData = omesnapCart.checkout[settings.checkout.type].call(omesnapCart,settings.checkout);
						
						// if the checkout method returns data, try to send the form
						if( checkoutData.data && checkoutData.action && checkoutData.method ){
							// if no one has any objections, send the checkout form
							if( false !== omesnapCart.trigger('beforeCheckout', [checkoutData.data]) ){
								omesnapCart.generateAndSendForm( checkoutData );
							}
						}
						
					} else {
						omesnapCart.error("No Valid Checkout Method Specified");
					}
				},
				extendCheckout: function (methods) {
					return omesnapCart.extend(omesnapCart.checkout, methods);
				},
				generateAndSendForm: function (opts) {
					var form = omesnapCart.$create("form");
					form.attr('style', 'display:none;');
					form.attr('action', opts.action);
					form.attr('method', opts.method);
					omesnapCart.each(opts.data, function (val, x, name) {
						form.append(
							omesnapCart.$create("input").attr("type","hidden").attr("name",name).val(val)
						);
					});
					omesnapCart.$("body").append(form);
					form.el.submit();
					form.remove();
				}
			});



			/*******************************************************************
			 *	EVENT MANAGEMENT
			 *******************************************************************/
			eventFunctions = {

				// bind a callback to an event
				bind: function (name, callback) {
					if (!isFunction(callback)) {
						return this;
					}

					if (!this._events) {
						this._events = {};
					}
					
					// split by spaces to allow for multiple event bindings at once
					var eventNameList = name.split(/ +/);
					
					// iterate through and bind each event
					omesnapCart.each( eventNameList , function( eventName ){
						if (this._events[eventName] === true) {
							callback.apply(this);
						} else if (!isUndefined(this._events[eventName])) {
							this._events[eventName].push(callback);
						} else {
							this._events[eventName] = [callback];
						}
					});

					
					return this;
				},
				
				// trigger event
				trigger: function (name, options) {
					var returnval = true,
						x,
						xlen;

					if (!this._events) {
						this._events = {};
					}
					if (!isUndefined(this._events[name]) && isFunction(this._events[name][0])) {
						for (x = 0, xlen = this._events[name].length; x < xlen; x += 1) {
							returnval = this._events[name][x].apply(this, (options || []));
						}
					}
					if (returnval === false) {
						return false;
					}
					return true;
				}

			};
			// alias for bind
			eventFunctions.on = eventFunctions.bind;
			omesnapCart.extend(eventFunctions);
			omesnapCart.extend(omesnapCart.Item._, eventFunctions);


			// base omesnapCart events in options
			baseEvents = {
				  beforeAdd				: null
				, afterAdd				: null
				, load					: null
				, beforeSave			: null
				, afterSave				: null
				, update				: null
				, ready					: null
				, checkoutSuccess		: null
				, checkoutFail			: null
				, beforeCheckout		: null
				, beforeRemove			: null
			};
    // events in option
    omesnapCart.bind('beforeAdd', function (item) {
      if (omesnapCart.has(item)) 
        {
         var checkAdd =  confirm('Produk sudah ditambah, tambahkan lagi?');
         if(checkAdd == true){
           // do your code
              omesnapCart.has(item)
              $('.cart-area').addClass('open');
              $("body").css({overflow: "hidden"});
              return false;
         } else {
              omesnapCart.remove(item)
              var cart = document.getElementById("toast-cart");
              cart.classList.remove("show");
           }
        }
    });
    omesnapCart.bind('afterAdd', function (item) {
      if (omesnapCart.has(item)) 
        {
          var cart = document.getElementById("toast-cart");
            cart.classList.add("show");
            setTimeout(function(){
              cart.classList.remove("show");
            }, 3000);
          $('.fixed-nav').addClass('show');
        }
    });
    omesnapCart.bind('beforeRemove', function (item) {
    var checkRemove =  confirm('are you sure you want to delete this?');
    if(checkRemove == true){
      // do your code
          omesnapCart.has(item)
          return false;
    } else {
          omesnapCart.remove(item)
    }
    });
			// extend with base events
			omesnapCart(baseEvents);

			// bind settings to events
			omesnapCart.each(baseEvents, function (val, x, name) {
				omesnapCart.bind(name, function () {
					if (isFunction(settings[name])) {
						settings[name].apply(this, arguments);
					}
				});
			});

			/*******************************************************************
			 *	FORMATTING FUNCTIONS
			 *******************************************************************/
			omesnapCart.extend({
				toCurrency: function (number,opts) {
					var num = parseFloat(number),
						opt_input = opts || {},
						_opts = omesnapCart.extend(omesnapCart.extend({
							  symbol:		"Rp."
							, delimiter:	"."
							, after: false
						}, omesnapCart.currency()), opt_input),

						numParts = num.toFixed(_opts.accuracy).split("."),
						dec = numParts[1],
						ints = numParts[0];
			
					ints = omesnapCart.chunk(ints.reverse(), 3).join(_opts.delimiter.reverse()).reverse();

					return	(!_opts.after ? _opts.symbol : "") +
							ints +
							(dec ? _opts.decimal + dec : "") +
							(_opts.after ? _opts.symbol : "");
	
				},


				// break a string in blocks of size n
				chunk: function (str, n) {
					if (typeof n==='undefined') {
						n=2;
					}
					var result = str.match(new RegExp('.{1,' + n + '}','g'));
					return result || [];
				}

			});


			// reverse string function
			String.prototype.reverse = function () {
				return this.split("").reverse().join("");
			};


			// currency functions
			omesnapCart.extend({
				currency: function (currency) {
					if (isString(currency) && !isUndefined(currencies[currency])) {
						settings.currency = currency;
					} else if (isObject(currency)) {
						currencies[currency.code] = currency;
						settings.currency = currency.code;
					} else {
						return currencies[settings.currency];
					}
				}
			});


			/*******************************************************************
			 *	VIEW MANAGEMENT
			 *******************************************************************/

			omesnapCart.extend({
				// bind outlets to function
				bindOutlets: function (outlets) {
					omesnapCart.each(outlets, function (callback, x, selector) {
						
						omesnapCart.bind('update', function () {
							omesnapCart.setOutlet("." + namespace + "_" + selector, callback);
						});
					});
				},

				// set function return to outlet
				setOutlet: function (selector, func) {
					var val = func.call(omesnapCart, selector);
					if (isObject(val) && val.el) {
						omesnapCart.$(selector).html(' ').append(val);
					} else if (!isUndefined(val)) {
						omesnapCart.$(selector).html(val);
					}
				},

				// bind click events on inputs
				bindInputs: function (inputs) {
					omesnapCart.each(inputs, function (info) {
						omesnapCart.setInput("." + namespace + "_" + info.selector, info.event, info.callback);
					});
				},

				// attach events to inputs	
				setInput: function (selector, event, func) {
					omesnapCart.$(selector).live(event, func);
				}
			});		


			// class for wrapping DOM selector shit
			omesnapCart.ELEMENT = function (selector) {

				this.create(selector);
				this.selector = selector || null; // "#" + this.attr('id'); TODO: test length?
			};

			omesnapCart.extend(selectorFunctions, {

				"MooTools"		: {
					text: function (text) {
						return this.attr(_TEXT_, text);
					},
					html: function (html) {
						return this.attr(_HTML_, html);
					},
					val: function (val) {
						return this.attr(_VALUE_, val);
					},
					attr: function (attr, val) {
						if (isUndefined(val)) {
							return this.el[0] && this.el[0].get(attr);
						}
						
						this.el.set(attr, val);
						return this;
					},
					remove: function () {
						this.el.dispose();
						return null;
					},
					addClass: function (klass) {
						this.el.addClass(klass);
						return this;
					},
					removeClass: function (klass) {
						this.el.removeClass(klass);
						return this;
					},
					append: function (item) {
						this.el.adopt(item.el);
						return this;
					},
					each: function (callback) {
						if (isFunction(callback)) {
							omesnapCart.each(this.el, function( e, i, c) {
								callback.call( i, i, e, c );
							});
						}
						return this;
					},
					click: function (callback) {
						if (isFunction(callback)) {
							this.each(function (e) {
								e.addEvent(_CLICK_, function (ev) {
									callback.call(e,ev);
								});
							});
						} else if (isUndefined(callback)) {
							this.el.fireEvent(_CLICK_);
						}

						return this;
					},
					live: function (	event,callback) {
						var selector = this.selector;
						if (isFunction(callback)) {
							omesnapCart.$("body").el.addEvent(event + ":relay(" + selector + ")", function (e, el) {
								callback.call(el, e);
							});
						}
					},
					match: function (selector) {
						return this.el.match(selector);
					},
					parent: function () {
						return omesnapCart.$(this.el.getParent());
					},
					find: function (selector) {
						return omesnapCart.$(this.el.getElements(selector));
					},
					closest: function (selector) {
						return omesnapCart.$(this.el.getParent(selector));
					},
					descendants: function () {
						return this.find("*");
					},
					tag: function () {
						return this.el[0].tagName;
					},
					submit: function (){
						this.el[0].submit();
						return this;
					},
					create: function (selector) {
						this.el = $engine(selector);
					}


				},

				"Prototype"		: {
					text: function (text) {
						if (isUndefined(text)) {
							return this.el[0].innerHTML;
						}
						this.each(function (i,e) {
							$(e).update(text);
						});
						return this;
					},
					html: function (html) {
						return this.text(html);
					},
					val: function (val) {
						return this.attr(_VALUE_, val);
					},
					attr: function (attr, val) {
						if (isUndefined(val)) {
							return this.el[0].readAttribute(attr);
						}
						this.each(function (i,e) {
							$(e).writeAttribute(attr, val);
						});
						return this;
					},
					append: function (item) {
						this.each(function (i,e) {
							if (item.el) {
								item.each(function (i2,e2) {
									$(e).appendChild(e2);
								});
							} else if (isElement(item)) {
								$(e).appendChild(item);
							}
						});
						return this;
					},
					remove: function () {
						this.each(function (i, e) {
							$(e).remove();
						});
						return this;
					},
					addClass: function (klass) {
						this.each(function (i, e) {
							$(e).addClassName(klass);
						});
						return this;
					},
					removeClass: function (klass) {
						this.each(function (i, e) {
							$(e).removeClassName(klass);
						});
						return this;
					},
					each: function (callback) {
						if (isFunction(callback)) {
							omesnapCart.each(this.el, function( e, i, c) {
								callback.call( i, i, e, c );
							});
						}
						return this;
					},
					click: function (callback) {
						if (isFunction(callback)) {
							this.each(function (i, e) {
								$(e).observe(_CLICK_, function (ev) {
									callback.call(e,ev);
								});
							});
						} else if (isUndefined(callback)) {
							this.each(function (i, e) {
								$(e).fire(_CLICK_);
							});
						}
						return this;
					},
					live: function (event,callback) {
						if (isFunction(callback)) {
							var selector = this.selector;
							document.observe(event, function (e, el) {
								if (el === $engine(e).findElement(selector)) {
									callback.call(el, e);
								}
							});
						}
					},
					parent: function () {
						return omesnapCart.$(this.el.up());
					},
					find: function (selector) {
						return omesnapCart.$(this.el.getElementsBySelector(selector));
					},
					closest: function (selector) {
						return omesnapCart.$(this.el.up(selector));
					},
					descendants: function () {
						return omesnapCart.$(this.el.descendants());
					},
					tag: function () {
						return this.el.tagName;
					},
					submit: function() {
						this.el[0].submit();
					},

					create: function (selector) {
						if (isString(selector)) {
							this.el = $engine(selector);
						} else if (isElement(selector)) {
							this.el = [selector];
						}
					}



				},

				"jQuery": {
					passthrough: function (action, val) {
						if (isUndefined(val)) {
							return this.el[action]();
						}
						
						this.el[action](val);
						return this;
					},
					text: function (text) {
						return this.passthrough(_TEXT_, text);
					},
					html: function (html) {
						return this.passthrough(_HTML_, html);
					},
					val: function (val) {
						return this.passthrough("val", val);
					},
					append: function (item) {
						var target = item.el || item;
						this.el.append(target);
						return this;
					},
					attr: function (attr, val) {
						if (isUndefined(val)) {
							return this.el.attr(attr);
						}
						this.el.attr(attr, val);
						return this;
					},
					remove: function () {
						this.el.remove();
						return this;
					},
					addClass: function (klass) {
						this.el.addClass(klass);
						return this;
					},
					removeClass: function (klass) {
						this.el.removeClass(klass);
						return this;
					},
					each: function (callback) {
						return this.passthrough('each', callback);
					},
					click: function (callback) {
						return this.passthrough(_CLICK_, callback);
					},
					live: function (event, callback) {
						$engine(document).delegate(this.selector, event, callback);
						return this;
					},
					parent: function () {
						return omesnapCart.$(this.el.parent());
					},
					find: function (selector) {
						return omesnapCart.$(this.el.find(selector));
					},
					closest: function (selector) {
						return omesnapCart.$(this.el.closest(selector));
					},
					tag: function () {
						return this.el[0].tagName;
					},
					descendants: function () {
						return omesnapCart.$(this.el.find("*"));
					},
					submit: function() {
						return this.el.submit();
					},

					create: function (selector) {
						this.el = $engine(selector);
					}
				}
			});
			omesnapCart.ELEMENT._ = omesnapCart.ELEMENT.prototype;

			// bind the DOM setup to the ready event
			omesnapCart.ready(omesnapCart.setupViewTool);

			// bind the input and output events
			omesnapCart.ready(function () {
				omesnapCart.bindOutlets({
					total: function () {
						return omesnapCart.toCurrency(omesnapCart.total());
					}
					, quantity: function () {
						return omesnapCart.quantity();
					}
					, items: function (selector) {
						omesnapCart.writeCart(selector);
					}
					, tax: function () {
						return omesnapCart.toCurrency(omesnapCart.tax());
					}
					, taxRate: function () {
						return omesnapCart.taxRate().toFixed();
					}
					, shipping: function () {
						return omesnapCart.toCurrency(omesnapCart.shipping());
					}
					, grandTotal: function () {
						return omesnapCart.toCurrency(omesnapCart.grandTotal());
					}
				});
				omesnapCart.bindInputs([
					{	  selector: 'checkout'
						, event: 'click'
						, callback: function () {
							omesnapCart.checkout();
						}
					}
					, {	  selector: 'empty'
						, event: 'click'
						, callback: function () {
							omesnapCart.empty();
						}
					}
					, {	  selector: 'increment'
						, event: 'click'
						, callback: function () {
							omesnapCart.find(omesnapCart.$(this).closest('.itemProduk').attr('id').split("_")[1]).increment();
							omesnapCart.update();
						}
					}
					, {	  selector: 'decrement'
						, event: 'click'
						, callback: function () {
							omesnapCart.find(omesnapCart.$(this).closest('.itemProduk').attr('id').split("_")[1]).decrement();
							omesnapCart.update();
						}
					}
					/* remove from cart */
					, {	  selector: 'remove'
						, event: 'click'
						, callback: function () {
							omesnapCart.find(omesnapCart.$(this).closest('.itemProduk').attr('id').split("_")[1]).remove();
						}
					}

					/* cart inputs */
					, {	  selector: 'input'
						, event: 'change'
						, callback: function () {
							var $input = omesnapCart.$(this),
								$parent = $input.parent(),
								classList = $parent.attr('class').split(" ");
							omesnapCart.each(classList, function (klass) {
								if (klass.match(/.+/i)) {
									var field = klass.split("-")[1];
									omesnapCart.find($parent.closest('.itemProduk').attr('id').split("_")[1]).set(field,$input.val());
									omesnapCart.update();
									return;
								}
							});
						}
					}

					/* here is our shelfItem add to cart button listener */
					, { selector: 'shelfItem .item_add'
						, event: 'click'
						, callback: function () {
							var $button = omesnapCart.$(this),
								fields = {};

                var cart = document.getElementById("toast-cart");
            cart.classList.add("show");
            setTimeout(function(){
              cart.classList.remove("show");
            }, 3000);
            $('.fixed-nav').addClass('show');

							$button.closest("." + namespace + "_shelfItem").descendants().each(function (x,item) {
								var $item = omesnapCart.$(item);

								// check to see if the class matches the item_[fieldname] pattern
								if ($item.attr("class") &&
									$item.attr("class").match(/item_.+/) &&
									!$item.attr('class').match(/item_add/)) {

									// find the class name
									omesnapCart.each($item.attr('class').split(' '), function (klass) {
										var attr,
											val,
											type;

										// get the value or text depending on the tagName
										if (klass.match(/item_.+/)) {
											attr = klass.split("_")[1];
											val = "";
											switch($item.tag().toLowerCase()) {
												case "input":
												case "textarea":
												case "select":
													type = $item.attr("type");
													if (!type || ((type.toLowerCase() === "checkbox" || type.toLowerCase() === "radio") && $item.attr("checked")) || type.toLowerCase() === "text" || type.toLowerCase() === "number") {
														val = $item.val();
													}				
													break;
												case "img":
													val = $item.attr('src');
													break;
												default:
													val = $item.text();
													break;
											}

											if (val !== null && val !== "") {
												fields[attr.toLowerCase()] = fields[attr.toLowerCase()] ? fields[attr.toLowerCase()] + ", " +  val : val;
											}
										}
									});
								}
							});

							// add the item
							omesnapCart.add(fields);
						}
					}
				]);
			});


			/*******************************************************************
			 *	DOM READY
			 *******************************************************************/
			// Cleanup functions for the document ready method
			// used from jQuery
			/*global DOMContentLoaded */
			if (document.addEventListener) {
				window.DOMContentLoaded = function () {
					document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
					omesnapCart.init();
				};

			} else if (document.attachEvent) {
				window.DOMContentLoaded = function () {
					// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
					if (document.readyState === "complete") {
						document.detachEvent("onreadystatechange", DOMContentLoaded);
						omesnapCart.init();
					}
				};
			}
			// The DOM ready check for Internet Explorer
			// used from jQuery
			function doScrollCheck() {
				if (omesnapCart.isReady) {
					return;
				}

				try {
					// If IE is used, use the trick by Diego Perini
					// http://javascript.nwbox.com/IEContentLoaded/
					document.documentElement.doScroll("left");
				} catch (e) {
					setTimeout(doScrollCheck, 1);
					return;
				}

				// and execute any waiting functions
				omesnapCart.init();
			}
			
			// bind ready event used from jquery
			function sc_BindReady () {

				// Catch cases where $(document).ready() is called after the
				// browser event has already occurred.
				if (document.readyState === "complete") {
					// Handle it asynchronously to allow scripts the opportunity to delay ready
					return setTimeout(omesnapCart.init, 1);
				}

				// Mozilla, Opera and webkit nightlies currently support this event
				if (document.addEventListener) {
					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

					// A fallback to window.onload, that will always work
					window.addEventListener("load", omesnapCart.init, false);

				// If IE event model is used
				} else if (document.attachEvent) {
					// ensure firing before onload,
					// maybe late but safe also for iframes
					document.attachEvent("onreadystatechange", DOMContentLoaded);

					// A fallback to window.onload, that will always work
					window.attachEvent("onload", omesnapCart.init);

					// If IE and not a frame
					// continually check to see if the document is ready
					var toplevel = false;

					try {
						toplevel = window.frameElement === null;
					} catch (e) {}

					if (document.documentElement.doScroll && toplevel) {
						doScrollCheck();
					}
				}
			}

			// bind the ready event
			sc_BindReady();

			return omesnapCart;
		};


	window.omesnapCart = generateomesnapCart();

}(window, document));

/************ JSON *************/
var JSON;JSON||(JSON={});
(function () {function k(a) {return a<10?"0"+a:a}function o(a) {p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function (a) {var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j) {var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b) {case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if (!b)return"null";
e += n;f=[];if (Object.prototype.toString.apply(b)==="[object Array]") {m=b.length;for (c=0;c<m;c += 1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if (i&&typeof i==="object") {m=i.length;for (c=0;c<m;c += 1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for (d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
"}";e=g;return h}}if (typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function () {return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function () {return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if (typeof JSON.stringify!=="function")JSON.stringify=function (a,j,c) {var d;n=e="";if (typeof c==="number")for (d=0;d<c;d += 1)n += " ";else typeof c==="string"&&(n=c);if ((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("",
{"":a})};if (typeof JSON.parse!=="function")JSON.parse=function (a,e) {function c(a,d) {var g,f,b=a[d];if (b&&typeof b==="object")for (g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function (a) {return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();


/************ HTML5 Local Storage Support *************/
(function () {if (!this.localStorage)if (this.globalStorage)try {this.localStorage=this.globalStorage}catch(e) {}else{var a=document.createElement("div");a.style.display="none";document.getElementsByTagName("head")[0].appendChild(a);if (a.addBehavior) {a.addBehavior("#default#userdata");var d=this.localStorage={length:0,setItem:function (b,d) {a.load("localStorage");b=c(b);a.getAttribute(b)||this.length++;a.setAttribute(b,d);a.save("localStorage")},getItem:function (b) {a.load("localStorage");b=c(b);return a.getAttribute(b)},
removeItem:function (b) {a.load("localStorage");b=c(b);a.removeAttribute(b);a.save("localStorage");this.length=0},clear:function () {a.load("localStorage");for (var b=0;attr=a.XMLDocument.documentElement.attributes[b++];)a.removeAttribute(attr.name);a.save("localStorage");this.length=0},key:function (b) {a.load("localStorage");return a.XMLDocument.documentElement.attributes[b]}},c=function (a) {return a.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,
"-")};a.load("localStorage");d.length=a.XMLDocument.documentElement.attributes.length}}})();

omesnapCart({
	cartColumns: [
{ view: "bataswa" },
{ attr:"thumb",view:"image"},
{ view: "miringwa" }, // miringWA
{ view: "boldwa" }, // boldWA
{ attr: "name" , label: "Name", view: function (item, column) {return "<a href='" + item.get("link") + "'>" + item.get(column.attr) + "</a>";}},
{ view: "remove" },
{ view: "boldwa" }, // boldWA
{ view: "miringwa" }, // miringWA
{ view: "enterwa" }, // enterWA
{ attr: "size" },
{ view: "enterwa" }, // enterWA
{ attr: "warna" },
{ view: "enterwa" }, // enterWA
{ attr: "enter" },
{ attr: "price" , view: 'currency' },
{ view: "enterwa" }, // enterWA
{ view: "decrement" },
{ view: "muncul" },
{ attr: "quantity" },
{ view: "increment" },
{ view: "enterwa" }, // enterWA
{ view: "harga" },
{ view: "miringwa" }, // miringWA
{ attr: "total", label: "Total harga", view: 'currency' },
{ view: "miringwa" }, // miringWA
{ view: "enterwa" }, // enterWA
{ view: "enterwa" }, // enterWA
	],	currency: "IDR",
	});

$(document).ready(function () {
    $('.buka-tutup').on('click', function () {
        $('.cart-area').toggleClass('open');
	$("body").css({overflow: "hidden"});
        return false;
    });
    $('.close-btn').on('click', function () {
	$("body").css({overflow: "auto"});
        return false;
    });
});
$(document).on('click', '.checkout', function () {
    $(".cart-body").slideToggle('normal');
    $(".chart-right").slideToggle('normal');
    $(".rincian").slideToggle('normal');
    $(".pesan").slideToggle('normal');
});

        function angkaToRp(angka) {
          var rupiah = '';    
          var angkarev = angka.toString().split('').reverse().join('');
          for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
          return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
        }
        /* alert(angkaToRp(10000000)); -> Rp. 10.000.000 */

        function rpToAngka(rupiah) {
          return parseInt(rupiah.replace(/[^0-9]/g, ''), 10);
        }
        /* alert(rpToAngka("Rp 10.000.000")); -> 10000000 */

      $('.priceArea .price').each(function(){
        var price = $(this).text(),
            discount = $(this).data('discount-percent'),
            discount_price = price - price * discount / 100;

        var realPrice = '';
        if(discount != '') {
          $(this).html('<small><span>-'+discount+'%</span><s>'+angkaToRp(price)+'</s></small><b>'+angkaToRp(discount_price)+'</b><sp class="item_price">'+discount_price+'</sp>');
          var realPrice = discount_price;
        } else {
          $(this).html('<b>'+angkaToRp(price)+'</b>');
          var realPrice = price;
        }
        $(this).attr('data-price',realPrice);
        $(this).parents('.itemPost').attr('data-price',realPrice);
      });

/* Option -------------------------------------------------------------------- */
$('.nameOption').each(function(){
  var id = $(this).attr('class');
var value = $(this).text();
  $('.daftar-opsi-produk').append('<div class="itemInfo"><div class="item_size">'+value+'<small><s></s><b></b></small></div><span class="wa-space"></span></div>');

}); 

$('.productOption').each(function(){

  $(this).find('li').click(function(){
    var value = $(this).text();
    $(this).parents('.productOption').find('li').removeAttr('class');
    $(this).addClass('selected');
    $(this).parents('.productOption').attr('data-price',value);
    $('.item_size').find('b').text(value);
  $('.item_size').find('s').text(' : ');
  $('.itemInfo').find('span').text('%0A');
  });
  $(this).find('li:first').trigger('click');
}); 

$('.nameOption2').each(function(){
  var id = $(this).attr('class');
var value = $(this).text();
  $('.daftar-opsi-produk').append('<div class="itemInfo2"><div class="item_warna">'+value+'<small><s></s><b></b></small></div><span class="wa-space"></span></div>');

});  
$('.productOption2').each(function(){

  $(this).find('li').click(function(){
    var value = $(this).text();
    $(this).parents('.productOption2').find('li').removeAttr('class');
    $(this).addClass('selected');
    $(this).parents('.productOption2').attr('data-price',value);
    $('.item_warna').find('b').text(value);
  $('.item_warna').find('s').text(' : ');
  $('.itemInfo2').find('span').text('%0A');
  });
  $(this).find('li:first').trigger('click');
});

    $('.post-body').each(function() {
          /* Stok Habis -------------------------------------------------------------------- */
        var stock = $('.productDetail').data('stock');
        if(stock === 'off') {
            $('.productCheckout').append('<div style="cursor:not-allowed;" onclick="alert(&#39;'+stockHabis+'&#39;);" class="stock" title="'+stockHabis+'"></div>');
          }
          var stock = $(this).find('.productDetail').data('stock');
          if(stock === 'off') {
            $(this).find('.productPhoto').append('<div class="ribbon"><small class="text">'+stockHabis+'</small></div>');
          }
          /* Stok Habis -------------------------------------------------------------------- */

        var discount = $('.price', this).attr('data-discount-percent');
        var price = $('.price', this).attr('data-normal-price');

        if (discount != null && discount != 0) {
            var discount_price = price - price * discount / 100;
            $('.price', this).attr('data-price', discount_price);
            $('.price', this).text(angkaToRp(discount_price));
            $('.priceArea', this).prepend('<span class="normalPrice"><small><span>-'+discount+'%</span><s>'+angkaToRp(price)+'</s></small></span>');
          $('.priceArea', this).prepend('<span class="item_price" style="display:none">' + discount_price + '</span>');
        } else {
            $('.price', this).text(angkaToRp(price));
        }
    });


    $(document).ready(function() {
        $('.productOption, .productOption2').each(function() {
            $(this).find('li:first').trigger('click');
        });
    });

    $('.productOption li').each(function() {
        var optionPrice = $(this).attr('data-price');
        var price = $(this).parents('.post-body').find('.price').attr('data-normal-price');
        if (optionPrice == 0 || optionPrice == undefined) {
            $(this).attr('data-price', price);
        }
    });
    $('.post-body').each(function(q) {
        $('.productOption li', this).on('click', function() {
            var text = $(this).text();
            var price = $(this).attr('data-price');
            $(this).parents('.productOption').find('li').removeClass('selected');
            $(this).addClass('selected');
            var discount = $(this).parents('.post-body').find('.price').attr('data-discount-percent');

            if (price != null && price != 0) {

                if (discount != null && discount != 0) {
                    var discount_price = price - price * discount / 100;
                    $('.list-product-checkout').find('.total').text(angkaToRp(discount_price));
                    $(this).parents('.post-body').find('.totalPrice').text(angkaToRp(discount_price));
                    $(this).parents('.post-body').find('.price').attr('data-price', discount_price);
                    $(this).parents('.post-body').find('.price').html(angkaToRp(discount_price));
                    $(this).parents('.post-body').find('.priceArea .normalPrice').html('<small><span>-'+discount+'%</span><s>'+angkaToRp(price)+'</s></small>');
                    $(this).parents('.post-body').find('.priceArea .item_price').html(discount_price);
                    $('.post-body').find('.qty').text(1);
                 } else {
                    $(this).parents('.post-body').find('.price').attr('data-price', price);
                    $(this).parents('.post-body').find('.price').html(angkaToRp(price));
                    $('.list-product-checkout').find('.total').text(angkaToRp(price));
                    $(this).parents('.post-body').find('.item_price').text(price);
                    $(this).parents('.post-body').find('.totalPrice').html(angkaToRp(price));
                    $('.post-body').find('.qty').text(1);
                }
            } else {
                $(this).parents('.post-body').find('.price').attr('data-price', price);
                $(this).parents('.post-body').find('.price').html(angkaToRp(price));
            }
        });

        $('.productOption2 li', this).on('click', function() {
            var text = $(this).text();
            $(this).parents('.productOption2').find('li').removeClass('selected');
            $(this).addClass('selected');

        });
    });


          /* Qty -------------------------------------------------------------------- */

          $('<div class="kuantitas"><small>Qty</small><small class="jumlah-pesan"> : <a class="qty"></a><span class="wa-space">%0A</span></small></div>').appendTo('.daftar-opsi-produk');

          
          function totalPrice(q) {
            var realPrice = $('.price').attr('data-price'),
                priceTotal = realPrice * q;
            $('.list-product-checkout').find('.total').text(angkaToRp(priceTotal));
            $('.daftar-opsi-produk').find('.qty').text(q);

          }
          var realPrice = $('.price').attr('data-price'),
              priceTotal = realPrice * 1;

          $(document).ready(function(){
            totalPrice(1);
          });
          $('.tambahproduk input').on('keyup', function(){
            var value = parseInt($('.tambahproduk input').val());
            if(value <= 1) {
              $('.tambahproduk input').val(1);
              totalPrice(1);
            }
            $(this).parents('.tambahproduk').attr('data-price',value);
            totalPrice(value);

          });
          $('.tambahproduk .min').on('click', function(){
            var value = parseInt($('.tambahproduk input').val()) - 1;
            if(value <= 1) {
              $('.tambahproduk input').val(1);
              $(this).parents('.tambahproduk').attr('data-price',1);
              totalPrice(1);

            } else {
              $('.tambahproduk input').val(value);
              $(this).parents('.tambahproduk').attr('data-price',value);
              totalPrice(value);

            }
          });
          $('.tambahproduk .plus').on('click', function(){
            var value = parseInt($('.tambahproduk input').val()) + 1;
            $('.tambahproduk input').val(value);
            $(this).parents('.tambahproduk').attr('data-price',value);
            totalPrice(value);
          });
          if($('.price').val() == null) {
            $('.list-product-checkout hr, .list-product-checkout .total-pesanan, .list-product-checkout .ongkir').remove();
          }


          /* Carousel -------------------------------------------------------------------- */
$(document).ready(function(){

  $(".productPhotoWrapper").owlCarousel({    
    loop:true,
    items:1,
    margin:0,
    stagePadding: 0,
    autoplay:true  
  });
  
  dotcount = 1;
  
  jQuery('.productPhotoWrapper .owl-dot').each(function() {
    jQuery( this ).addClass( 'dotnumber' + dotcount);
    jQuery( this ).attr('data-info', dotcount);
    dotcount=dotcount+1;
  });
  
  slidecount = 1;
  
  jQuery('.productPhotoWrapper .owl-item').not('.cloned').each(function() {
    jQuery( this ).addClass( 'slidenumber' + slidecount);
    slidecount=slidecount+1;
  });
  
  jQuery('.productPhotoWrapper .owl-dot').each(function() {  
    grab = jQuery(this).data('info');   
    slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
    jQuery(this).css("background-image", "url("+slidegrab+")");   
  });
  
  amount = $('.productPhotoWrapper .owl-dot').length;
  gotowidth = 100/amount;     
  jQuery('.productPhotoWrapper .owl-dot').css("height", gotowidth+"%");

});
          /* Append -------------------------------------------------------------------- */


          $('.productCheckout').appendTo('.productDetail');
          $('.detailDescription').appendTo('#tabDescription');

          var arr_pembayaran = metodeBayar;
          $.each(arr_pembayaran, function(key, value) {
            $('#orderViaWa .pembayaran optgroup').append('<option value="'+key+'%0A'+value+'">'+key+' - ' +value+ '</option>');
          });
          var arr_pembayaran = metodeBayar;
          $.each(arr_pembayaran, function(key, value) {
            $('#wa-checkout .pembayaran optgroup').append('<option value="'+key+'%0A'+value+'">'+key+' - ' +value+ '</option>');
          });

      /* cForm-WA  -------------------------------------------------------------------- */
      $('.satu-pesanan-btn, .tombol-wa').on('click', function() {
        $('#orderViaWa').addClass('open');
	    $("body").css({overflow: "hidden"});
        if($(this).attr('data-img') != null) {
          var img = $(this).attr('data-img');
          $('.tombol-wa').find('.content img').show();
          $('.tombol-wa').find('.content img').attr('src',img);
        }
        if($(this).attr('data-tooltip') != null) {
          var tooltip = $(this).attr('data-tooltip');
          $('.tombol-wa').find('.satu-pesanan-wrap').show();
          $('.tombol-wa').find('.satu-pesanan-wrap').html(tooltip)
        }
      });
$(".imageProduct").each(function () {
    var $t = $(this),
        $l = $(".productCart_shelfItem .item_thumb").clone();
    $l.find(".item_thumb").remove();
    $l.appendTo($t);
});
      $('.popup .close-form-wa').on('click', function() {
        $('body').removeClass('hideScroll');
        $(this).parents('.popup').removeClass('open');
	    $("body").css({overflow: "auto"});
      });

      $(document).keyup(function(e) {
        if (e.key === "Escape") {
          $('.popup .close-form-wa').trigger('click');
        }
      });
      $(document).on('keypress','.formWA input, .formWA textarea', function() {
        if (event.keyCode === 13) {
          $(this).parents(".formWA").find('.submit').trigger('click');
        }
      });

      $('.formWA .wajib').each(function() {
        title = $(this).attr('placeholder');
        label = $(this).parents('label');
        $('<span class="validasi"><b>' + title + '</b> (Wajib diisi)</span>').appendTo(label);
      });

      $(document).on('keyup','.formWA .wajib', function() {
        if ($(this).val() != '') {
          $(this).removeClass('focus');
          $(this).parents('label').find('.validasi').removeClass('show');
        }
      });

      $(document).on('change','.formWA select', function() {
        $(this).removeClass('focus');
        $(this).parents('label').find('.validasi').removeClass('show');
      });

      $(document).on('click','.formWA .submit', function(){
        kirimWA($(this).parents('.satu-pesanan').attr('id'));
        return false;
      });
      $(document).on('change','.formWA select.informasi', function() {
        var infooo = $(this).val();
        if(infooo == 'Teman') {
          $('.formWA .nama_teman_wrap').slideDown();
          $('.formWA .nama_teman_wrap .nama_teman').addClass('wajib');
        } else {
          $('.formWA .nama_teman_wrap').slideUp();
          $('.formWA .nama_teman_wrap .nama_teman').removeClass('wajib');
        }
      });
      function kirimWA(id) {

        var validasi = true;

        $('#'+id+' .wajib').each(function() {
          if ($.trim($(this).val()) == '' || $.trim($(this).val()) == 'default') {
            $(this).addClass('focus');
          }
        });
        $('#'+id+' .wajib').each(function() {

          if ($.trim($(this).val()) == '') {

            validasi = false;

            $(this).parents('label').find('.validasi').addClass('show');
            $(this).focus();
            return false;
          } else if ($.trim($(this).val()) == 'default') {

            validasi = false;

            $(this).parents('label').find('.validasi').addClass('show');
            return false;
          }
        });

        if (validasi === true) {

          var parameter = '';
          var url_wa = 'https://web.whatsapp.com/send';
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            url_wa = 'whatsapp://send';
          }
          if (id == 'orderViaWa') {

            var nama_admin = namaAdmin,
                pesan_salam = pesanSalam,
                kode_area = kodeArea,
                nomor_whatsapp = nomorWa,
                judul = $('#'+id+' .info-product .title-product').text(),
                info = $('#'+id+' .daftar-opsi-produk').text(),
                harga = $('#'+id+' .total-pesanan .total').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                jumlah = $('#'+id+' .jumlah').val(),
                pembayaran = $('#'+id+' .pembayaran').val(),
                alamat = $('#'+id+' .alamat').val(),
                kota = $('#'+id+' .kota').val(),
                kecamatan = $('#'+id+' .kecamatan').val();

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '.. ' +
                'saya mau beli *' + judul + '.*%0A%0A' +
                info +
                '==============================%0A' +
                '*Total Harga :*%0A' + harga + '%0A' +
                '==============================%0A%0A' +

                '*Metode Pembayaran :*%0A' + pembayaran + '%0A%0A' +
                'A/n.%0A*' + nama + '* ( ' + nohp + ' )%0A%0A' +
                '*Alamat :*%0A' + alamat + '%0A' +
                'Kota. ' + kota + ' - Kec. ' + kecamatan + '%0A%0A' +
                'via ' + location.href;

          } else if (id == 'wa-checkout') {

            var nama_admin = namaAdmin,
                pesan_salam = pesanSalam,
                kode_area = kodeArea,
                nomor_whatsapp = nomorWa,
                cartItem = $('#'+id+' .productCart_items .itemProduk').text(),
                totalCart = $('#'+id+' .productCart_total').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                jumlah = $('#'+id+' .jumlah').val(),
                pembayaran = $('#'+id+' .pembayaran').val(),
                alamat = $('#'+id+' .alamat').val(),
                kota = $('#'+id+' .kota').val(),
                kecamatan = $('#'+id+
' .kecamatan').val();

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '.. ' +
                'saya mau beli %0A%0A' +
                '*Detail Pesanan :*' +
                '%0Aâ€»â€»â€»â€»â€»â€»â€»â€»â€»â€»â€»â€»â€»â€»â€»â€»%0A' +
                 cartItem + '%0A%0A' +
                '==============================%0A' +
                '*Total Harga :*%0A' + totalCart + '%0A' +
                '==============================%0A%0A' +

                '*Metode Pembayaran :*%0A' + pembayaran + '%0A%0A' +
                'A/n.%0A*' + nama + '* ( ' + nohp + ' )%0A%0A' +
                '*Alamat :*%0A' + alamat + '%0A' +
                'Kota. ' + kota + ' - Kec. ' + kecamatan + '%0A%0A' +
                'via ' + location.href;

          } else {
            alert('id tidak ditemukan');
          }
          // alert(parameter);
          $(this).attr('href', parameter);

          var w = 960,
              h = 540,
              left = Number((screen.width / 2) - (w / 2)),
              tops = Number((screen.height / 2) - (h / 2)),
              popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
          popupWindow.focus();
          return false;
        }
      }
