goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40360,p__40361){
var map__40362 = p__40360;
var map__40362__$1 = cljs.core.__destructure_map(map__40362);
var svc = map__40362__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40363 = p__40361;
var map__40363__$1 = cljs.core.__destructure_map(map__40363);
var msg = map__40363__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40363__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40363__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40363__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40363__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40370,p__40371){
var map__40372 = p__40370;
var map__40372__$1 = cljs.core.__destructure_map(map__40372);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40372__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40373 = p__40371;
var map__40373__$1 = cljs.core.__destructure_map(map__40373);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40373__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40374,p__40375){
var map__40376 = p__40374;
var map__40376__$1 = cljs.core.__destructure_map(map__40376);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40377 = p__40375;
var map__40377__$1 = cljs.core.__destructure_map(map__40377);
var msg = map__40377__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40377__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40379,tid){
var map__40380 = p__40379;
var map__40380__$1 = cljs.core.__destructure_map(map__40380);
var svc = map__40380__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40380__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40385 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40386 = null;
var count__40387 = (0);
var i__40388 = (0);
while(true){
if((i__40388 < count__40387)){
var vec__40405 = chunk__40386.cljs$core$IIndexed$_nth$arity$2(null,i__40388);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40405,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40405,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40416 = seq__40385;
var G__40417 = chunk__40386;
var G__40418 = count__40387;
var G__40419 = (i__40388 + (1));
seq__40385 = G__40416;
chunk__40386 = G__40417;
count__40387 = G__40418;
i__40388 = G__40419;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40385);
if(temp__5753__auto__){
var seq__40385__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40385__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40385__$1);
var G__40420 = cljs.core.chunk_rest(seq__40385__$1);
var G__40421 = c__4638__auto__;
var G__40422 = cljs.core.count(c__4638__auto__);
var G__40423 = (0);
seq__40385 = G__40420;
chunk__40386 = G__40421;
count__40387 = G__40422;
i__40388 = G__40423;
continue;
} else {
var vec__40408 = cljs.core.first(seq__40385__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40408,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40424 = cljs.core.next(seq__40385__$1);
var G__40425 = null;
var G__40426 = (0);
var G__40427 = (0);
seq__40385 = G__40424;
chunk__40386 = G__40425;
count__40387 = G__40426;
i__40388 = G__40427;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40381_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40381_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40382_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40382_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40383_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40383_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40384_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40384_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40411){
var map__40412 = p__40411;
var map__40412__$1 = cljs.core.__destructure_map(map__40412);
var svc = map__40412__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
