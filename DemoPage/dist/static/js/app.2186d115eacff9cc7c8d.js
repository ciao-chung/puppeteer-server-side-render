webpackJsonp([1],{0:function(t,n,e){e("j1ja"),t.exports=e("NHnr")},"7HJp":function(t,n){},Ilzg:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r=(e("K3J8"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading-container"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),this._v(" "),n("div",{staticClass:"double-bounce2"})])])}]});var i={name:"App",computed:{loading:function(){return this.$store.getters["Base/loading"]}},components:{AppLoading:e("VU/8")(null,r,!1,function(t){e("Ilzg")},"data-v-144c75e8",null).exports}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("transition",{attrs:{name:"transition-loading"}},[this.loading?n("AppLoading"):this._e()],1)],1)},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("aMrp"),e("ZbdT"),e("aAQD")},null,null).exports,c=e("/ocq"),u=e("//Fk"),d=e.n(u),l=e("Xxa5"),p=e.n(l),f=e("exGp"),v=e.n(f),h={data:function(){return{data:null}},created:function(){var t=this;return v()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.$store.dispatch("Base/loading"),n.next=3,t.foo();case 3:t.data=n.sent,t.$store.dispatch("Base/loading",!1),SSR.done();case 6:case"end":return n.stop()}},n,t)}))()},methods:{wait:function(t){var n=this;return v()(p.a.mark(function e(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new d.a(function(n){setTimeout(function(){return n()},t)}));case 1:case"end":return n.stop()}},e,n)}))()},foo:function(){var t=this;return v()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.wait(2e3);case 2:return n.abrupt("return",{foo:"bar"});case 3:case"end":return n.stop()}},n,t)}))()}},computed:{loading:function(){return this.$store.getters["Base/loading"]}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{page:"home"}},[e("img",{attrs:{src:"static/logo.png"}}),t._v(" "),e("h1",[t._v("home")]),t._v(" "),e("p",{staticClass:"home"},[t._v("home")]),t._v(" "),t.data?e("div",[e("h3",[t._v("This is async content...")]),t._v(" "),e("p",[t._v(t._s(t.data))])]):t._e()])},staticRenderFns:[]};var g=e("VU/8")(h,m,!1,function(t){e("7HJp")},null,null).exports;a.a.use(c.a);var w=new c.a({routes:[{path:"/",name:"home",component:g}]}),_=e("NYxO"),S={namespaced:!0,state:{loading:!1},mutations:{loading:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.loading=n}},actions:{loading:function(t,n){t.commit("loading",n)}},getters:{loading:function(t){return t.loading}}};a.a.use(_.a);var b=new _.a.Store({modules:{Base:S}});var x=new class{constructor(){this.isSSR=window.ServerSideRenderStart instanceof Function}done(){this.isSSR&&window.ServerSideRenderStart("PageDone")}error(t=404){this.isSSR&&window.ServerSideRenderStart("PageError",t)}},R=e("7t+N"),$=e.n(R),A=e("8AgW"),k=e.n(A),B=e("p3jY"),T=e.n(B);a.a.config.productionTip=!1,window.self.$=$.a,window.SSR=x,a.a.use(k.a),a.a.use(T.a),new a.a({el:"#app",router:w,store:b,components:{App:s},template:"<App/>",metaInfo:function(){return{title:"Base Vue Webpack Template",link:[{rel:"favicon",href:"static/favicon.ico"},{rel:"shortcut icon",href:"static/favicon.ico"}],meta:[]}}})},ZbdT:function(t,n){},aAQD:function(t,n){},aMrp:function(t,n){}},[0]);
//# sourceMappingURL=app.2186d115eacff9cc7c8d.js.map