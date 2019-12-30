(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(v,_,t){"use strict";t.r(_);var d=t(0),a=Object(d.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"云信用开发文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云信用开发文档"}},[v._v("#")]),v._v(" 云信用开发文档")]),v._v(" "),t("h2",{attrs:{id:"环境依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖"}},[v._v("#")]),v._v(" 环境依赖")]),v._v(" "),t("ul",[t("li",[v._v("java jdk 1.8及以上")])]),v._v(" "),t("h2",{attrs:{id:"云信用架构图示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云信用架构图示"}},[v._v("#")]),v._v(" 云信用架构图示")]),v._v(" "),t("p",[t("a",{attrs:{href:"/creditcloud.jpg"}},[v._v("架构图")])]),v._v(" "),t("h2",{attrs:{id:"服务列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务列表"}},[v._v("#")]),v._v(" 服务列表")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("编号")]),v._v(" "),t("th",[v._v("服务")]),v._v(" "),t("th",[v._v("依赖基础件")]),v._v(" "),t("th",[v._v("端口")]),v._v(" "),t("th",[v._v("备注")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("nacos")]),v._v(" "),t("td",[v._v("mysql")]),v._v(" "),t("td",[v._v("服务名8848")]),v._v(" "),t("td",[v._v("端口注册，配置中心")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("sentinel")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("8858")]),v._v(" "),t("td",[v._v("流量哨兵")])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("seata")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8091")]),v._v(" "),t("td",[v._v("分布式事务服务端")])]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td",[v._v("rabbitmq")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("15672/5672")]),v._v(" "),t("td",[v._v("消息中心")])]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("finance-auth")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8100")]),v._v(" "),t("td",[v._v("授权中心")])]),v._v(" "),t("tr",[t("td",[v._v("6")]),v._v(" "),t("td",[v._v("finance-gateway")]),v._v(" "),t("td",[v._v("nacos")]),v._v(" "),t("td",[v._v("80")]),v._v(" "),t("td",[v._v("网关")])]),v._v(" "),t("tr",[t("td",[v._v("7")]),v._v(" "),t("td",[v._v("finance-admin")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("7002")]),v._v(" "),t("td",[v._v("服务监控")])]),v._v(" "),t("tr",[t("td",[v._v("8")]),v._v(" "),t("td",[v._v("finance-file")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("9091")]),v._v(" "),t("td",[v._v("文件服务")])]),v._v(" "),t("tr",[t("td",[v._v("9")]),v._v(" "),t("td",[v._v("finance-develop")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8302")]),v._v(" "),t("td",[v._v("开发工具")])]),v._v(" "),t("tr",[t("td",[v._v("10")]),v._v(" "),t("td",[v._v("finance-design")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("9999")]),v._v(" "),t("td",[v._v("流程设计")])]),v._v(" "),t("tr",[t("td",[v._v("11")]),v._v(" "),t("td",[v._v("finance-quartz")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8303")]),v._v(" "),t("td",[v._v("定时任务")])]),v._v(" "),t("tr",[t("td",[v._v("12")]),v._v(" "),t("td",[v._v("finance-mq")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("8301")]),v._v(" "),t("td",[v._v("消息服务")])]),v._v(" "),t("tr",[t("td",[v._v("13")]),v._v(" "),t("td",[v._v("finance-base")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8201")]),v._v(" "),t("td",[v._v("基础服务")])]),v._v(" "),t("tr",[t("td",[v._v("14")]),v._v(" "),t("td",[v._v("finance-flow")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8203")]),v._v(" "),t("td",[v._v("工作流服务")])]),v._v(" "),t("tr",[t("td",[v._v("15")]),v._v(" "),t("td",[v._v("finance-credit")]),v._v(" "),t("td",[v._v("mysql、nacos")]),v._v(" "),t("td",[v._v("8202")]),v._v(" "),t("td",[v._v("云信用")])])])])])}],!1,null,null,null);_.default=a.exports}}]);