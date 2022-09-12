(this["webpackJsonpreact-epic-teach"]=this["webpackJsonpreact-epic-teach"]||[]).push([[13],{406:function(e,n,a){"use strict";a.r(n);var t=a(15),r=a(0),c=a.n(r),o=a(166),s=a(401),l=a(404),i=a(4),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},m=a(34),p=function(e,n){return r.createElement(m.a,Object(i.a)(Object(i.a)({},e),{},{ref:n,icon:u}))};p.displayName="UserAddOutlined";var d=r.forwardRef(p),f=a(16),b=a(60),h=a(21);function g(){var e=Object(t.a)(["\n  background:#adc6ff;\n  border:none;\n  &:hover{\n    background-color: #85a5ff;\n  }\n  &:focus{\n    background-color: #85a5ff;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(t.a)(["\n  text-align: center;\n  padding-bottom:9px;\n  margin-bottom: 30px;\n  border-bottom:1px solid #eee;\n"]);return v=function(){return e},e}function x(){var e=Object(t.a)(["\n  max-width: 460px;\n  margin: 30px auto;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18), 0 5px 16px 0 rgba(0, 0, 0, 0.17);\n  // border-radius: 8px;\n  padding: 50px;\n\n  &:hover{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n  animation: "," 1500ms ease;\n"]);return x=function(){return e},e}function w(){var e=Object(t.a)(["\nfrom {\n    opacity: 0;\n    transform: translateY(40px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0px);\n}\n"]);return w=function(){return e},e}var j=Object(f.b)(w()),E=f.a.div(x(),j),O=f.a.h2(v()),P=Object(f.a)(o.a)(g()),k={labelCol:{span:6},wrapperCol:{span:18}},y={wrapperCol:{offset:6,span:18}};n.default=function(){var e=Object(b.a)().AuthStore,n=Object(h.f)();return c.a.createElement(E,null,c.a.createElement(O,null,"Register New User"),c.a.createElement(s.a,Object.assign({},k,{name:"basic",onFinish:function(a){console.log("Success:",a),e.setUsername(a.username),e.setPassword(a.password),e.register().then((function(){console.log("\u6ce8\u518c\u6210\u529f, \u8df3\u8f6c\u5230\u9996\u9875"),n.push("/")})).catch((function(){console.log("\u767b\u5f55\u5931\u8d25\uff0c\u4ec0\u4e48\u90fd\u4e0d\u505a")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),c.a.createElement(s.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,n){return/\W/.test(n)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):n.length<4||n.length>10?Promise.reject("\u957f\u5ea6\u4e3a4\uff5e10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},c.a.createElement(l.a,null)),c.a.createElement(s.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}]},c.a.createElement(l.a.Password,null)),c.a.createElement(s.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"},function(e){var n=e.getFieldValue;return{validator:function(e,a){return n("password")===a?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}]},c.a.createElement(l.a.Password,null)),c.a.createElement(s.a.Item,y,c.a.createElement(P,{type:"primary",block:!0,htmlType:"submit"},c.a.createElement(d,null),"\u6ce8\u518c"))))}}}]);
//# sourceMappingURL=13.dd17f36d.chunk.js.map