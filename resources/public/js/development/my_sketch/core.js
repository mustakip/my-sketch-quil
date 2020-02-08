// Compiled by ClojureScript 1.10.520 {}
goog.provide('my_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
my_sketch.core.colors = cljs.core.atom.call(null,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","white"], null)));
my_sketch.core.random_color = (function my_sketch$core$random_color(){
cljs.core.reset_BANG_.call(null,my_sketch.core.colors,cljs.core.rest.call(null,cljs.core.deref.call(null,my_sketch.core.colors)));

return cljs.core.first.call(null,cljs.core.deref.call(null,my_sketch.core.colors));
});
my_sketch.core.setup = (function my_sketch$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"color","color",1011675173),my_sketch.core.random_color.call(null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"color","color",1011675173),my_sketch.core.random_color.call(null)], null)], null);
});
my_sketch.core.update_state = (function my_sketch$core$update_state(state){
var G__28268 = cljs.core.mapv.call(null,(function (p1__28267_SHARP_){
return cljs.core.assoc.call(null,p1__28267_SHARP_,new cljs.core.Keyword(null,"radius","radius",-2073122258),((5) + new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p1__28267_SHARP_)));
}),state);
var G__28268__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,state)),(50)))?cljs.core.conj.call(null,G__28268,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(5),new cljs.core.Keyword(null,"color","color",1011675173),my_sketch.core.random_color.call(null)], null)):G__28268);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state)),(1000))){
return cljs.core.rest.call(null,G__28268__$1);
} else {
return G__28268__$1;
}
});
my_sketch.core.draw_state = (function my_sketch$core$draw_state(state){
quil.core.background.call(null,(240));

var tr__21252__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21252__auto__);

var seq__28269 = cljs.core.seq.call(null,state);
var chunk__28270 = null;
var count__28271 = (0);
var i__28272 = (0);
while(true){
if((i__28272 < count__28271)){
var circle = cljs.core._nth.call(null,chunk__28270,i__28272);
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(circle));

quil.core.ellipse.call(null,(0),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle));


var G__28273 = seq__28269;
var G__28274 = chunk__28270;
var G__28275 = count__28271;
var G__28276 = (i__28272 + (1));
seq__28269 = G__28273;
chunk__28270 = G__28274;
count__28271 = G__28275;
i__28272 = G__28276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28269);
if(temp__5735__auto__){
var seq__28269__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28269__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28269__$1);
var G__28277 = cljs.core.chunk_rest.call(null,seq__28269__$1);
var G__28278 = c__4550__auto__;
var G__28279 = cljs.core.count.call(null,c__4550__auto__);
var G__28280 = (0);
seq__28269 = G__28277;
chunk__28270 = G__28278;
count__28271 = G__28279;
i__28272 = G__28280;
continue;
} else {
var circle = cljs.core.first.call(null,seq__28269__$1);
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(circle));

quil.core.ellipse.call(null,(0),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle));


var G__28281 = cljs.core.next.call(null,seq__28269__$1);
var G__28282 = null;
var G__28283 = (0);
var G__28284 = (0);
seq__28269 = G__28281;
chunk__28270 = G__28282;
count__28271 = G__28283;
i__28272 = G__28284;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}});
my_sketch.core.run_sketch = (function my_sketch$core$run_sketch(){
my_sketch.core.my_sketch = (function my_sketch$core$run_sketch_$_my_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"my-sketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,my_sketch.core.update_state))?(function() { 
var G__28285__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.update_state,args);
};
var G__28285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28286__i = 0, G__28286__a = new Array(arguments.length -  0);
while (G__28286__i < G__28286__a.length) {G__28286__a[G__28286__i] = arguments[G__28286__i + 0]; ++G__28286__i;}
  args = new cljs.core.IndexedSeq(G__28286__a,0,null);
} 
return G__28285__delegate.call(this,args);};
G__28285.cljs$lang$maxFixedArity = 0;
G__28285.cljs$lang$applyTo = (function (arglist__28287){
var args = cljs.core.seq(arglist__28287);
return G__28285__delegate(args);
});
G__28285.cljs$core$IFn$_invoke$arity$variadic = G__28285__delegate;
return G__28285;
})()
:my_sketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(700)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,my_sketch.core.setup))?(function() { 
var G__28288__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.setup,args);
};
var G__28288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28289__i = 0, G__28289__a = new Array(arguments.length -  0);
while (G__28289__i < G__28289__a.length) {G__28289__a[G__28289__i] = arguments[G__28289__i + 0]; ++G__28289__i;}
  args = new cljs.core.IndexedSeq(G__28289__a,0,null);
} 
return G__28288__delegate.call(this,args);};
G__28288.cljs$lang$maxFixedArity = 0;
G__28288.cljs$lang$applyTo = (function (arglist__28290){
var args = cljs.core.seq(arglist__28290);
return G__28288__delegate(args);
});
G__28288.cljs$core$IFn$_invoke$arity$variadic = G__28288__delegate;
return G__28288;
})()
:my_sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my_sketch.core.draw_state))?(function() { 
var G__28291__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.draw_state,args);
};
var G__28291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28292__i = 0, G__28292__a = new Array(arguments.length -  0);
while (G__28292__i < G__28292__a.length) {G__28292__a[G__28292__i] = arguments[G__28292__i + 0]; ++G__28292__i;}
  args = new cljs.core.IndexedSeq(G__28292__a,0,null);
} 
return G__28291__delegate.call(this,args);};
G__28291.cljs$lang$maxFixedArity = 0;
G__28291.cljs$lang$applyTo = (function (arglist__28293){
var args = cljs.core.seq(arglist__28293);
return G__28291__delegate(args);
});
G__28291.cljs$core$IFn$_invoke$arity$variadic = G__28291__delegate;
return G__28291;
})()
:my_sketch.core.draw_state));
});
goog.exportSymbol('my_sketch.core.my_sketch', my_sketch.core.my_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),my_sketch.core.my_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"my-sketch"], null));
}
});
goog.exportSymbol('my_sketch.core.run_sketch', my_sketch.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581181010810
