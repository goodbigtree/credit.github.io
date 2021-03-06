# 云信用开发文档

## 环境依赖
* java jdk 1.8及以上

## 云信用架构图示
[架构图](/creditcloud.jpg)

## 服务列表

| 编号 | 服务            | 依赖基础件   | 端口       | 备注               |
| ---- | --------------- | ------------ | ---------- | ------------------ |
| 1    | nacos           | mysql        | 服务名8848 | 端口注册，配置中心 |
| 2    | sentinel        |              | 8858       | 流量哨兵           |
| 3    | seata           | mysql、nacos | 8091       | 分布式事务服务端   |
| 4    | rabbitmq        |              | 15672/5672 | 消息中心           |
| 5    | finance-auth    | mysql、nacos | 8100       | 授权中心           |
| 6    | finance-gateway | nacos        | 80         | 网关               |
| 7    | finance-admin   |              | 7002       | 服务监控           |
| 8    | finance-file    |              | 9091       | 文件服务           |
| 9    | finance-develop | mysql、nacos | 8302       | 开发工具           |
| 10   | finance-design  | mysql、nacos | 9999       | 流程设计           |
| 11   | finance-quartz  | mysql、nacos | 8303       | 定时任务           |
| 12   | finance-mq      |              | 8301       | 消息服务           |
| 13   | finance-base    | mysql、nacos | 8201       | 基础服务           |
| 14   | finance-flow    | mysql、nacos | 8203       | 工作流服务         |
| 15   | finance-credit  | mysql、nacos | 8202       | 云信用             |

