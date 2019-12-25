# dev 在线服务

## 服务启动
### credit服务 base服务 
启动时增加启动参数
```
--spring.profiles.active=dev --REGISTER_HOST=172.16.10.186 --REGISTER_PORT=8848 --SENTINEL_DASHBOARD_HOST=172.16.10.186 --SENTINEL_DASHBOARD_PORT=8858
```

## 服务访问路径
> [后管端地址](http://172.16.10.186:8888/#/login)  用户名密码 admin/admin  <br/>
> [前端地址](http://172.16.10.186:8889/#/login)  <br/>
> [nacos地址](http://172.16.10.186:8848/nacos/#/login)  用户名密码 nacos/nacos <br/>
> [sentinel地址](http://172.16.10.186:8858/#/login) 用户名密码 sentinel/sentinel<br/>
> [jekins地址](http://172.16.10.4:8085/jenkins/view/dev_%E4%BE%9B%E5%BA%94%E9%93%BE%E9%87%91%E8%9E%8D/)  用户名密码 zwjenkins/zw66ddjekins<br/>

## linux 服务器地址
>> 172.16.10.186
>> 用户名 root 密码 dev186

## 中间件信息
### fastdfs
>> 172.16.10.186:22122

### redis
>> 172.16.10.186:6379
>> 密码:zw.123

### rabbitmq
>> 172.16.10.186:5672
>> 用户名：zwuser
>> 密码：Zhiwang.123

### mysql
>> 172.16.10.186:3306
>> 用户名：zwuser
>> 密码：Zwuser@scf2019
