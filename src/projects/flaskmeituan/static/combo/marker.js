__cjsload("marker",'\'use strict\';function a(b){this.guid=B++;b=b||{};b.begins=b.begins||[];b.ends=b.ends||[];b.transition=b.transition||S;b.precision=b.precision||1e-4;Fa.call(this,b)}function b(a){this.status=0;this.nextAnimation=this.currentAction=null;this.viewmodel=a}function e(){function a(){var c=b.nextAnimation;b.currentAction=null;b.nextAnimation=null;c?e.call(b):b.get("animation")&&b.set("animation",null)}var b=this,c=b.get("animation");2===b.status?this.nextAnimation=c:(c=ya[c])?(1===b.status&&this.stop(!0),this.start(c,a)):this.stop(!1)}function m(a,b){this.key=a;this.list=b}function n(a,b){this.target=a;this.anim=b;this.duration=b.options.duration||0;this.times=b.options.times||1;this.lastTime=!1;this.arrActions=[];this.arrRunningFx=[]}function p(a,b){return function(c){a.set(b,c[0])}}function g(a){pa||(pa=new r);this.viewModel=a}function v(a,b,c){c?q(c,function(c){c.anchor||(c.anchor=new ha(c.size.getWidth()/2,c.size.getHeight()));a.set(b,c);a.viewModel.set(b,c)}):(a.set(b,null),a.viewModel.set(b,null))}function q(a,b){!a||a.size?b(a):(T(a)&&(a=new ja(a)),a.url&&t(a.url,function(c,d){a.size=c&&d?new hb(c,d):new hb(24,24);b(a)}))}function r(){this.icon=new ja(L+"default/imgs/marker.png",new hb(24,37),new ha(0,-1),new ha(12,36));this.shadow=new ja(L+"default/imgs/marker.png",new hb(50,39),new ha(24,0),new ha(19,35),null,45);this.shape=new Y([7,0,13,0,17,1,22,7,22,8,22,14,21,16,20,18,18,19,15,22,13,25,12,26,12,28,11,31,11,33,10,33,10,29,9,28,9,26,8,25,0,15,0,7],"poly");this.cross=new ja(L+"default/imgs/target.png",new hb(16,16),new ha(0,0),new ha(8,8))}function s(a){this.constructed=!1;this.markerEvent=a;var b=this;O(W,function(a,c){a&&(b[c]=null)});this.changeKeys={}}function z(a){var b=0,c=0;a.anchor?(b=a.anchor.x,c=a.anchor.y):(b=a.size.getWidth()/2,c=a.size.getHeight());return new Oa(b,c)}function D(a){this.viewModel=a;this.eventTracker=this.target=null;this.draggable=!1;this.arrCommonEvts=[];this.arrDragEvts=[]}function w(a){this.guid=Ha++;a=a||{};a.begins=a.begins||[];a.ends=a.ends||[];a.transition=a.transition||ka;a.precision=a.precision||1e-4;Ga.call(this,a)}function ka(a,b,c,d){return{lat:c.lat*a/d+b.lat,lng:c.lng*a/d+b.lng}}function J(a){this.status=0;this.nextAnimation=this.currentAction=null;this.viewmodel=a;this.fromPosition=this.animationOptions=null;this.passedPositions=[];this.passPositions=[]}function za(a,b){this.key=a;this.list=b}function ba(a,b){this.target=a;this.anim=b;this.duration=b.options.duration||0;this.times=b.options.times||1;this.autoRotation=b.options.autoRotation||!1;this.lastTime=!1;this.arrActions=[];this.arrRunningFx=[]}function x(a,b){for(var c=0,d=b.length;c<d;c++){var e=b[c];if(a.lat===e.lat&&a.lng===e.lng)return!0}}function K(a,b,c,d){return{lat:c.lat*a/d+b.lat,lng:c.lng*a/d+b.lng}}function N(a,b){return function(c){var d=c[0];d&&d.lat&&d.lng&&(c=new Ka(c[0].lat,c[0].lng),a.set(b,c))}}function oa(a,b){var c=180*Math.atan2(b.x-a.x,b.y-a.y)/Math.PI;return 360<=c?c-360:0>c?c+360:c}function y(a){yb.call(this,a);this.style=new aa(this);this.animation=new cd(this);this.moveAnimation=new Ma(this);this.viewReady=this.isDragging=!1;this.changeKeys={};this.markerEvent=new U(this);this.bindTo("constructed",a);a.viewModel=this;this.initEvent(a)}var Fa=eg,S=function(a,b,c,d){return c*a/d+b},B=0;f(a,Fa);var C=a.prototype;C.onEnterFrame=function(a){var b=this.begins,c=this.ends,d=this.helper,e=this.transition,f=this.duration,g=1/this.precision,k=[],l=[];a<f?h(b,function(b,h){k.push(Math.round((la(e)?e[h]:e)(a,b,d&&d[h]?d[h](c[h],!0):c[h]-b,f)*g)/g)}):k=c.concat();var m=this._lastValues||b;h(k,function(a,b){l.push(a-m[b]);k.toString()!=c.toString()&&(k[b]=d&&d[b]?d[b](a,!1):a)});this._lastValues=k.concat();this.onUpdate(k,l)};C.onStart=function(){};C.onUpdate=function(){};C.onEnd=function(){};var C=f,F=h,Ia=function(a,b,c,d){return c*(a/=d)*a+b},ga=function(a,b,c,d){return-c*(a/=d)*(a-2)+b},E=function(a,b,c,d){return(a/=d)<1/2.75?7.5625*c*a*a+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},ya={};ya[1]={options:{duration:700,times:"infinite",disableCross:!0},actions:[new m("height",[{time:0,value:0,transition:ga},{time:.5,value:20,transition:Ia},{time:1,value:0,transition:ga}])]};ya[2]={options:{duration:500,times:1,disableCross:!0},actions:[new m("height",[{time:0,value:500,transition:Ia},{time:.5,value:0,transition:ga},{time:.75,value:20,transition:Ia},{time:1,value:0,transition:ga}])]};ya[3]={options:{duration:200,times:1},actions:[new m("height",[{time:0,value:0,transition:Ia},{time:1,value:20,transition:ga}])]};ya[4]={options:{duration:500,times:1},actions:[new m("height",[{time:0,value:20,transition:E},{time:1,value:0,transition:E}])]};C(b,Wa);C=b.prototype;C.height_changed=function(){this.viewmodel.set("height",this.get("height"))};C.animation_changed=e;C.stop=function(a){var b=this.currentAction;b&&(a?(this.status=0,b.stop()):(this.status=2,b.lastTime=!0))};C.start=function(a,b){var c=this,d=c.currentAction=new n(c,a),e=this.get("disableCross");c.set("disableCross",!!a.options.disableCross);d.onEnd=function(){c.status=0;c.set("disableCross",e);b()};c.status=1;d.start()};n.prototype.initActionList=function(){var b=this,c=[];F(this.anim.actions,function(d){var e=d.list,f=[];F(e,function(c,g){var h=e[g+1];if(!h)return!1;var k=new a;k.transition=c.transition;var m=c.time,n=h.time;0===g&&0<m&&(k.delay=m*b.duration);k.duration=(n-m)*b.duration;k.begins=[c.value];k.ends=[h.value];k.onUpdate=p(b.target,d.key);f.push(k)});c.push(f)});this.arrActions=c};n.prototype.run=function(){function a(){g--;if(!g)if(!c.lastTime&&("infinite"===e||f<e))b();else c.onEnd()}function b(){g=d.length;f++;F(d,function(b){c.runOneAction(b,a)})}var c=this,d=c.arrActions,e=c.times,f=0,g=0;c.onStart();b()};n.prototype.runOneAction=function(a,b){function c(e){var f=a[e];f?d.runOneFx(f,function(){c(e+1)}):b()}var d=this;c(0)};n.prototype.runOneFx=function(a,b){var c=this;a.onStart=function(){c.arrRunningFx.push(a)};a.onEnd=function(){var d=Ue(c.arrRunningFx,a);0<=d&&c.arrRunningFx.splice(d,1);b()};a.start()};n.prototype.start=function(){this.stop();this.initActionList();this.lastTime=!1;this.run()};n.prototype.stop=function(){for(var a=this.arrRunningFx,b=null;b=a.shift();)b.onEnd=sd,b.stop()};n.prototype.onStart=function(){};n.prototype.onEnd=function(){};var ja=te,Y=Yl,hb=ma,T=G,t=zc,L=Wb,ha=R,pa=null;f(g,Wa);C=g.prototype;C.model_changed=function(){this.get("model")||(this.set("icon",null),this.set("shadow",null),this.set("shape",null),this.set("cross",null))};C.changed=function(a){("modelIcon"===a||"modelShadow"===a||"modelShape"===a||"modelCross"===a||"useDefaults"===a)&&this.redraw()};C.draw=function(){var a=this.get("modelIcon"),b=this.get("modelShadow"),c=this.get("modelShape"),d=this.get("modelCross"),e=this.get("useDefaults");!a&&e&&(a=pa.icon,b=pa.shadow,c=pa.shape);d||(d=pa.cross);v(this,"icon",a);v(this,"shadow",b);this.get("shape")!==c&&(this.set("shape",c),this.viewModel.set("shape",c));this.get("cross")!==d&&(this.set("cross",d),this.viewModel.set("cross",d))};var O=ca,Oa=R,Q=0,W={container:1,position:1,image:1,decoration:1,zIndex:1,height:1,shape:1,title:1,cursor:1,rotation:1},C=s.prototype;C.createDom=function(){var a=document.createElement("div");a.style.cssText="position:absolute;left:0;top:0;width:0;height:0;border:0 none;overflow:hidden;";return a};C.clearDom=function(){this.dom&&(this.markerEvent&&this.markerEvent.setTarget(null),th(this.dom),this.dom=null)};C.updateDom=function(){var a=this.createDom(),b=this.container;this.dom?b.replaceChild(a,this.dom):b.appendChild(a);this.dom=a;if(this.shape){if(!this.maptag){var a=this.dom,b=document.createElement("map"),c=document.createElement("area");b.appendChild(c);a&&a.appendChild(b);this.maptag=b;a="smimap"+Q++;this.maptag.name=a;this.maptag.id=a;a=Ld("area",this.dom)[0];a.href="javascript:void(0);"}}else this.maptag&&(th(this.maptag),this.maptag=null);this.markerEvent&&(a=Ld("area",this.dom)[0]||this.dom,this.markerEvent.setTarget(a))};C.isConstructed=function(){return this.constructed};C.construct=function(){this.isConstructed()||(this.constructed=!0,this.changeAll(),this.draw())};C.changeAll=function(){var a=this.changeKeys;O(W,function(b,c){b&&(a[c]=!0)})};C.destroy=function(){this.isConstructed()&&(this.constructed=!1,this.clearDom())};C.set=function(a,b){this.changeKeys[a]=!0;W[a]&&(this[a]=b);this.renderTimer||(this.renderTimer=setTimeout(M(this.draw,this),10))};C.draw=function(){clearTimeout(this.renderTimer);this.renderTimer=null;if(this.constructed)if(!this.container||!this.position||!this.image)this.clearDom();else{var a=this.changeKeys;this.changeKeys={};if(a.shape||!this.dom)this.updateDom(),h(["cursor","title","image","zIndex"],function(b){a[b]=!0});if(a.image||a.height)a.position=!0;var b=this,c=this.dom;a.image&&(a.decoration=!0,a.shape=!0,delete a.height);O(a,function(a,d){switch(d){case"container":b.drawContainer(c);break;case"position":b.drawPosition(c);break;case"height":case"image":case"rotation":b.drawImage(c);break;case"decoration":b.drawDecoration(c);break;case"zIndex":b.drawZIndex(c);break;case"cursor":b.drawCursor(b.dom);break;case"title":b.drawTitle(b.dom);break;case"shape":b.drawShape(c)}})}};C.drawContainer=function(a){var b=this.container;b?a.parentNode!==b&&b.appendChild(a):a.parentNode&&a.parentNode.removeChild(a)};C.drawPosition=function(a){var b=this.position,c=this.image,d=z(c),e=c.shadowAngle||0,f=this.height||0,g=e%360,c=g?parseInt(Math.cos(X(e))*f):0,e=parseInt((g?Math.sin(X(e)):1)*f);Da(a,b.x-d.x+c,b.y-d.y-e)};C.drawImage=function(a){var b=this.image;this.renderSize(a);this.renderRoatation(a);this.shape&&this.maptag?Xb(a,b.url,b.origin,b.scaledSize,null,null,null,this.maptag.name):Xb(a,b.url,b.origin,b.scaledSize)};C.drawShape=function(a){var b=this.shape;a=Ld("area",a)[0];if(b&&a){var c,d=this.image;if(d&&d.origin){c=[];for(var e=parseInt(d.origin.x),d=parseInt(d.origin.y),f=0;f<b.coords.length;f++)0==f%2?c.push(parseInt(b.coords[f])+e):1==f%2&&c.push(parseInt(b.coords[f])+d);c=c.join(",")}else c=b.coords.join(",");a.setAttribute("shape",b.type);a.setAttribute("coords",c)}};C.drawCursor=function(a){var b=this.cursor||"default",c=Ld("area",a)[0],d=Ld("area",a)[0]||a,e=Ld("img",a)[0]||a;d.style.cursor=b;c&&(d.onmouseover=function(){e.style.cursor=b},d.onmouseout=function(){e.style.cursor=""})};C.drawTitle=function(a){var b=this.title;a=Ld("area",a)[0]||a;null===b||Ub(b)?a.removeAttribute("title"):a.title=b};C.renderRoatation=function(a){var b=this.image,c=z(b),d=b.shadowAngle||0,e=this.height||0,f=d%360,b=f?parseInt(Math.cos(X(d))*e):0,d=parseInt((f?Math.sin(X(d)):1)*e),b=parseInt(c.x)-parseInt(b),d=parseInt(c.y)+parseInt(d),c=this.rotation,e=ud();null!=b&&null!=d&&e&&(a.style[e+"Origin"]=parseFloat(b)+"px "+parseFloat(d)+"px");b=ud();null!=c&&b&&(a.style[b]="rotate("+parseFloat(c)+"deg)")};C.renderSize=function(a){var b=this.image,c=b.anchor,d=this.height,e=parseInt(Math.cos(X(b.shadowAngle||0))*d),f=b.size,b=f.getWidth(),f=f.getHeight();0>d&&(f=Math.max(c.y+e,0));qa(a,b,f)};C.drawZIndex=function(a){var b=this.zIndex;a.style.zIndex=u(b)?b:0};C.drawDecoration=function(a){var b=this.decoration,c=this.decorationDom;if(b){var d=b.content;c?Td(c,!0):(c=this.decorationDom=document.createElement("div"),c.style.cssText="position:absolute;left:0;top:0;");yg(d)?c.appendChild(d):c.innerHTML=d;a.appendChild(c);b=b.offset;if(c){var d=c.style,e=b.y||0,f=Math.floor(c.offsetHeight/2),g=a.offsetHeight/2;d.left=a.offsetWidth/2-Math.floor(c.offsetWidth/2)+(b.x||0)+"px";d.top=g-f+e+"px"}}else c&&(Td(c,!0),th(c))};var Z="click dblclick mousedown mouseup mouseenter mouseleave rightclick".split(" ");f(D,k);C=D.prototype;C.setTarget=function(a){this.eventTracker&&(this.eventTracker.stop(),this.eventTracker.clearAllListener());a?(this.target=a,this.eventTracker=new Je(a),this.eventTracker.start()):this.eventTracker=this.target=null;this.initEvents();this.initDragEvents()};C.setDraggable=function(a){this.draggable=!!a;this.initDragEvents()};C.initDragEvents=function(){var a=this,b=this.arrDragEvts;this.removeEvents(b);var c=a.eventTracker;c&&this.draggable&&(h(["dragstart","dragend","dragging"],function(d){b.push(c.addListener(d,a.createEventHandler(d)))}),b.push(c.addListener("mousedown",function(a){qd(a)})))};C.initEvents=function(){var a=this,b=this.arrCommonEvts;this.removeEvents(b);var c=a.eventTracker;c&&h(Z,function(d){b.push(c.addListener(d,a.createEventHandler(d)))})};C.removeEvents=function(a){for(var b=null;b=a.shift();)b.remove()};C.createEventHandler=function(a){"mouseenter"===a?a="mouseover":"mouseleave"===a&&(a="mouseout");var b=this.viewModel;return function(c,d,e,f){b.doEvent(a,arguments)}};var Ga=eg,Ha=0;f(w,Ga);C=w.prototype;C.onEnterFrame=function(a){var b=this.begins,c=this.ends,d=this.helper,e=this.duration,f=[],g=[];a<e?h(b,function(b,g){f.push(ka(a,b,d&&d[g]?d[g](c[g],!0):c[g].subtract(b),e))}):f=c.concat();var k=this._lastValues||b;h(f,function(a,b){g.push(a-k[b]);f.toString()!=c.toString()&&(f[b]=d&&d[b]?d[b](a,!1):a)});this._lastValues=f.concat();this.onUpdate(f,g)};C.onStart=function(){};C.onUpdate=function(){};C.onEnd=function(){};var Ka=A,Rb=h;f(J,Wa);C=J.prototype;C.destroy=function(){this.status=0;this.fromPosition=this.animationOptions=this.nextAnimation=this.currentAction=null;this.passedPositions=[];this.passPositions=[]};C.moveTo=function(a,b,c,d){this.fromPosition=a;this.passedPositions=[];this.speed=c;this.k=d;this.passPositions=a=Array(a).concat(b);this.move(a,this.speed,this.k)};C.moveAlong=function(a,b,c,d){this.fromPosition=a;this.passPositions=b;this.passedPositions=[];this.speed=c;this.k=d;this.move(b,this.speed,this.k)};C.move=function(a,b,c){var d=this;0!==d.status&&(d.status=0,this.stop(!0));c=0;for(var e=[],f=0,g=a.length;f<g-1;f++){var h=a[f],k=a[f+1],l=h.distanceTo(k),l=Math.round(1e3*(l/(b/3.6))),m=h.toMercator(),p=k.toMercator(),m=oa(m,p);c+=l;0===f&&e.push({time:0,angle:0,value:h,transition:K});e.push({time:l,angle:m,value:k,transition:K})}a=this.get("autoRotation");this.animationOptions={options:{duration:c,times:1,autoRotation:a},actions:[new za("position",e)]};1===d.status&&this.stop(!0);this.start(this.animationOptions,function(){d.currentAction=null;d.nextAnimation=null;var a=d.get("position");d.viewmodel.triggerCustomEvent("moveend",a)})};C.autoRotation_changed=function(){var a=this.get("autoRotation");if(this.animationOptions&&this.animationOptions.options!==a&&(this.animationOptions.options.autoRotation=a,this.currentAction)){this.currentAction.autoRotation=a;var b=this.currentAction.arrRunningFx;this.currentAction&&0<b.length&&a&&this.set("rotation",this.currentAction.arrRunningFx[b.length-1].angle)}};C.position_changed=function(){var a=this.get("position");if(0!==this.status){var b=this.passedPositions.concat(a);this.viewmodel.triggerCustomEvent("moving",a,{passedLatlngs:b})}this.viewmodel.set("position",this.get("position"))};C.rotation_changed=function(){this.viewmodel.set("rotation",this.get("rotation"))};C.stop=function(a){var b=this.currentAction;b&&(a?(this.status=0,b.stop()):(this.status=2,b.lastTime=!0))};C.start=function(a,b){var c=this,d=c.currentAction=new ba(c,a);d.onEnd=function(){c.status=0;b()};c.status=1;d.start()};C.stopMove=function(){0!==this.status&&(this.status=0,this.stop(!0),this.nextAnimation=this.currentAction=null)};C.pauseMove=function(){0===this.status||3===this.status||(this.stop(!0),this.status=3,this.nextAnimation=this.currentAction=null)};C.resumeMove=function(){if(3===this.status){for(var a=this.get("position"),b=this.passedPositions.length,c=this.passedPositions[b-1],d=[],e=!1,f=0,g=this.passPositions.length;f<g;f++){var h=this.passPositions[f];(0===b||e)&&d.push(h);c&&c.lat===h.lat&&c.lng===h.lng&&(e=!0)}a=Array(a).concat(d);this.move(a,this.speed,this.k)}};ba.prototype.start=function(){this.stop();this.initActionList();this.lastTime=!1;this.run()};ba.prototype.stop=function(){for(var a=this.arrRunningFx,b=null;b=a.shift();)b.onEnd=sd,b.stop()};ba.prototype.initActionList=function(){var a=this,b=[];Rb(this.anim.actions,function(c){var d=c.list,e=[];Rb(d,function(b,f){var g=d[f+1];if(!g)return!1;var h=new w;h.transition=b.transition;h.duration=g.time;h.begins=[b.value];h.ends=[g.value];h.angle=g.angle;h.onUpdate=N(a.target,c.key);e.push(h)});b.push(e)});this.arrActions=b};ba.prototype.run=function(){function a(){g--;if(!g)if(!c.lastTime&&f<e)b();else c.onEnd()}function b(){g=d.length;f++;Rb(d,function(b){c.runOneAction(b,a)})}var c=this,d=c.arrActions,e=c.times,f=0,g=0;b()};ba.prototype.runOneAction=function(a,b){function c(e){var f=a[e];f?(x(f.begins[0],d.target.passPositions)&&d.target.passedPositions.push(f.begins[0]),d.runOneFx(f,function(){c(e+1)})):b()}var d=this;c(0)};ba.prototype.runOneFx=function(a,b){var c=this;a.onStart=function(){c.arrRunningFx.push(a)};a.onEnd=function(){var d=Ue(c.arrRunningFx,a);0<=d&&c.arrRunningFx.splice(d,1);b()};a.start();c.autoRotation&&c.target.set("rotation",a.angle)};var yb=Wa,cd=b,Ma=J,aa=g,U=D,Md={icon:"modelIcon",shadow:"modelShadow",shape:"modelShape",cross:"cross",useDefaults:"useDefaults"};f(y,yb);C=y.prototype;C.constructed_changed=function(){this.get("constructed")?(this.construct(),this.viewConstruct(),this.funConstruct()):(this.viewDestroy(),this.destroy(),this.funDestroy())};C.construct=function(){var a=this.getModel();if(a.get("map")){this.bindTo("drawPixelBounds",a.get("map")._(),"pixelBoundsQ");this.style.set("model",a);this.set("title",a.get("title"));this.set("cursor",a.get("cursor"));this.set("draggable",a.get("draggable"));this.set("clickable",a.get("clickable"));this.set("visible",a.get("visible"));this.set("flat",a.get("flat"));this.set("zIndex",a.get("zIndex"));this.set("raiseOnDrag",a.get("raiseOnDrag"));this.set("decoration",a.get("decoration"));this.set("position",a.get("position"));this.set("panes",a.get("panes"));this.set("projection",a.get("projection"));this.set("map",a.get("map"));this.set("height",a.get("height"));this.set("rotation",a.get("rotation"));this.set("autoRotation",a.get("autoRotation"));var b=this.style;b.set("modelIcon",a.get("icon"));b.set("modelShadow",a.get("shadow"));b.set("modelShape",a.get("shape"));b.set("modelCross",a.get("cross"));b.set("useDefaults",a.get("useDefaults"));var b=this.animation,c=this.moveAnimation;b.set("animation",a.get("animation"));b.set("height",a.get("height"));b.set("disableCross",a.get("disableCross"));c.set("autoRotation",a.get("autoRotation"))}};C.viewConstruct=function(){this.iconRender||(this.iconRender=new s(this.markerEvent));this.shadowRender||(this.shadowRender=new s);this.crossRender||(this.crossRender=new s);this.iconRender.construct();this.shadowRender.construct();this.viewReady=!0;this.draggable_changed();this.clickable_changed()};C.funConstruct=function(){if(this.moveArguments){var a=this.moveArguments.arg;if(a)this[this.moveArguments.func](a[0],a[1],a[2]);this.moveArguments=null}};C.funDestroy=function(){this.moveArguments=null;this.moveAnimation.destroy()};C.viewDestroy=function(){this.iconRender&&(this.iconRender.destroy(),this.iconRender=null);this.shadowRender&&(this.shadowRender.destroy(),this.shadowRender=null);this.crossRender&&(this.crossRender.destroy(),this.crossRender=null);this.viewReady=!1};C.destroy=function(){this.style.set("model",null);this.set("position",null);this.set("panes",null);this.set("projection",null);this.set("map",null);this.set("height",null);this.set("rotation",null);this.set("autoRotation",null);this.set("icon",null);this.set("shadow",null);this.set("shape",null);this.set("cross",null);this.set("height",null);this.unbind("drawPixelBounds");this.removeEvent(this.model);this.viewDestroy()};C.getPixelPosition=function(a){var b=this.get("projection");a=a||this.get("position");var c=null;b&&a&&(c=b.fromLatLngToDivPixel(a),c.x=Math.round(c.x),c.y=Math.round(c.y));return c};C.initEvent=function(a){this._moveToListen=d.addListener(a,"moveTo",M(this.moveTo,this));this._moveAlongListen=d.addListener(a,"moveAlong",M(this.moveAlong,this));this._stopMoveListen=d.addListener(a,"stopMove",M(this.stopMove,this));this._pauseMoveListen=d.addListener(a,"pauseMove",M(this.pauseMove,this));this._resumeMoveListen=d.addListener(a,"resumeMove",M(this.resumeMove,this))};C.removeEvent=function(a){this._moveToListen&&(d.removeListener(this._moveToListen),this._moveToListen=null);this._moveAlongListen&&(d.removeListener(this._moveAlongListen),this._moveAlongListen=null);this._stopMoveListen&&(d.removeListener(this._stopMoveListen),this._stopMoveListen=null);this._pauseMoveListen&&(d.removeListener(this._pauseMoveListen),this._pauseMoveListen=null);this._resumeMoveListen&&(d.removeListener(this._resumeMoveListen),this._resumeMoveListen=null)};C.moveTo=function(a,b,c){if(this.get("constructed")){var d=this.get("position");this.moveAnimation.moveTo(d,[a],b,c)}else this.moveArguments={func:"moveTo",arg:arguments}};C.moveAlong=function(a,b,c){if(this.get("constructed")){var d=this.get("position");this.moveAnimation.moveAlong(d,a,b,c)}else this.moveArguments={func:"moveAlong",arg:arguments}};C.stopMove=function(){this.moveAnimation.stopMove()};C.pauseMove=function(){this.moveAnimation.pauseMove()};C.resumeMove=function(){this.moveAnimation.resumeMove()};C.changed=function(a){this.changeKeys[a]=!0;this.get("constructed")&&this.redraw()};C.overlayRedraw_changed=function(a){this.changeKeys.overlayRedraw=!0;this.draw()};C.resetViewChanged=function(){this.changeKeys.icon=this.get("icon")?!0:!1;this.changeKeys.panes=this.get("panes")?!0:!1;this.changeKeys.position=this.get("position")?!0:!1;this.changeKeys.decoration=this.get("decoration")?!0:!1;this.changeKeys.shape=this.get("shape")?!0:!1;this.changeKeys.cursor=this.get("cursor")?!0:!1;this.changeKeys.title=this.get("title")?!0:!1;this.changeKeys.height=this.get("height")?!0:!1;this.changeKeys.zIndex=this.get("zIndex")?!0:!1;this.changeKeys.shadow=this.get("shadow")?!0:!1;this.changeKeys.cross=this.get("cross")?!0:!1;this.changeKeys.rotation=this.get("rotation")?!0:!1};C.icon_changed=function(){this.changeKeys.icon=!0;var a=this.get("icon");this.getModel().set("anchorBounds",a?new c(-a.anchor.getX(),-a.anchor.getY(),a.size.getWidth()-a.anchor.getX(),a.size.getHeight()-a.anchor.getY()):null);this.redraw()};C.draw=function(){this.get("map");var a=this.get("position"),b=this.get("icon"),c=this.get("visible");if(this.get("constructed")&&a&&b&&c&&(this.isInsideDrawPixelBounds(a)||this.isDragging)){this.viewReady||(this.viewConstruct(),this.resetViewChanged());var d=this,a=this.changeKeys;this.changeKeys={};if(a.overlayRedraw||a.projection)a.position=!0;var e={};ca(a,function(a,b){e[b]=d.get(b)});if(a.projection||a.position)e.pixelPosition=this.getPixelPosition();this.drawIcon(e);!this.get("flat")&&this.shadowRender&&this.drawShadow(e);this.drawCross(e);this.iconRender.draw();this.shadowRender.draw();this.crossRender.draw()}else this.viewReady&&this.viewDestroy()};C.drawIcon=function(a){var b=this.iconRender;ca(a,function(a,c){switch(c){case"icon":b.set("image",a);break;case"pixelPosition":b.set("position",a);break;case"decoration":b.set("decoration",a);break;case"shape":b.set("shape",a);break;case"cursor":b.set("cursor",a);break;case"title":b.set("title",a);break;case"height":case"zIndex":case"rotation":b.set(c,a)}});return b};C.drawShadow=function(a){var b=this.shadowRender;ca(a,function(a,c){switch(c){case"panes":b.set("container",a?a.overlayShadow:null);break;case"shadow":b.set("image",a);break;case"pixelPosition":b.set("position",a);break;case"height":case"zIndex":case"rotation":b.set(c,a)}});return b};C.drawCross=function(a){var b=this.get("height"),c=this.crossRender;0<b?c.isConstructed()||c.construct():c.destroy();ca(a,function(a,b){switch(b){case"panes":c.set("container",a?a.overlayShadow:null);break;case"cross":c.set("image",a);break;case"pixelPosition":c.set("position",a)}});return c};C.isInsideDrawPixelBounds=function(){var a=!0,b=this.get("position"),c=this.get("drawPixelBounds"),d=this.get("projection");c&&(a=d.fromLatLngToDivPixel(b),a=c.containsPoint(a));return a};C.doEvent=function(a,b){switch(a){case"dragstart":this.doDragStart.apply(this,b);break;case"dragend":this.doDragEnd.apply(this,b);break;case"dragging":this.doDragging.apply(this,b);break;default:this.triggerMouseEvent(a,{event:b[0]})}};C.doDragStart=function(a,b){var c=this.get("map").get("mapCanvasProjection"),d=this.get("position"),d=c.fromLatLngToContainerPixel(d),c=this.getMouseContainerPixel(a),d=c.minus(d);this.dragPixel=c.minus(d);this.isDragging=!0;this.get("raiseOnDrag")&&(this.up=!0,this.getModel().set("animation",cm.UP));this.triggerMouseEvent("dragstart")};C.doDragEnd=function(){delete this.dragPixel;this.isDragging=!1;this.up&&(delete this.up,this.getModel().set("animation",cm.DOWN));this.triggerMouseEvent("dragend")};C.doDragging=function(a,b,c){a=this.get("map").get("mapCanvasProjection");this.dragPixel=this.dragPixel.plus(c);c=a.fromContainerPixelToLatLng(this.dragPixel,!0);this.getModel().set("position",c);this.triggerMouseEvent("dragging")};C.triggerMouseEvent=function(a,b){var c=this.get("position"),d=this.get("map")._().get("innerContainer");b&&b.event&&(b.cursorPixel=Fe(b.event,d));this.triggerCustomEvent(a,c,b)};C.flat_changed=function(){if(this.get("flat"))this.shadowRender&&this.shadowRender.destroy();else if(this.viewReady){var a={};a.pixelPosition=this.getPixelPosition();a.shadow=this.get("shadow");a.zIndex=this.get("zIndex");a.height=this.get("height");a.panes=this.get("panes");this.drawShadow(a);this.shadowRender.construct()}};C.draggable_changed=function(){this.iconRender&&(this.markerEvent.setDraggable(this.get("draggable")),this.setMouseTarget())};C.clickable_changed=function(){this.iconRender&&this.setMouseTarget()};C.setMouseTarget=function(){var a=this.get("draggable"),b=this.get("clickable");!a&&!b?this.iconRender.set("container",this.get("panes").overlayImage):this.iconRender.set("container",this.get("panes").overlayMouseTarget)};C.styleChange=function(a){var b=this.getModel();this.style.set(Md[a],b.get(a))};C.animationChange=function(a){var b=this.getModel();this.animation.set(a,b.get(a))};P.$setExports(y)');
