# 阶段性优化任务

## 第一阶段(2019.12.9-2019.12.27)
> 1. 已有代码兼容现有的bladex框架
> 2. 企业端/管理端用户角色权限体系
> 3. 统一Oauth2改造,兼容我们多企业模式
> 4. 文件系统改造:新增权限访问
> 4. 新增rabbitmq消息处理
> 5. 后端admin及前端web代码迁移改造
> 6. web端路由动态可配置

### 第一阶段缺陷优化
> 1. 担保机构管理--新增页面
> 2. 所有易融云的标识去除;后管端的首页添加,页面去bladex化
> 3. 生成企业oriMark,短信通知用户功能
> 4. web路由不能展示页面，部分接口无法请求成功

## 第二阶段
> 1. 定时任务，支持分布式部署；
> 2. websocket改造,支持分布式部署;

## 第三阶段
> 1. 三方服务调用优化，三方服务提供统一内部接口调用；
> 2. 工作流改造；

