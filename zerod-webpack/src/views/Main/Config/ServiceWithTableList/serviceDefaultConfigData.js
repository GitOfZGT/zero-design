const tmp=``;

export default {
    "default":`#Web服务器相关配置
server.port=11110
server.context-path=/
#数据连接配置
spring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zerodDateTimeBehavior=convertToNull
spring.datasource.druid.username=user
spring.datasource.druid.password=admin@1
spring.datasource.druid.driverClassName=com.mysql.jdbc.Driver
spring.datasource.druid.initial-size=5
spring.datasource.druid.maxActive=10
spring.datasource.druid.minIdle=10
spring.datasource.druid.validation-query=SELECT 'x' from dual
spring.datasource.druid.test-while-idle=true
spring.datasource.druid.time-between-eviction-runs-millis=10000
spring.datasource.druid.min-evictable-idle-time-millis=300000
spring.datasource.druid.poolPreparedStatements=true
spring.datasource.druid.maxPoolPreparedStatementPerConnectionSize=20
spring.datasource.druid.filters=stat,slf4j
spring.datasource.druid.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=1000
spring.datasource.druid.useGlobalDataSourceStat=true
#Redis连接
spring.redis.database=0
spring.redis.host=172.16.8.18
spring.redis.port=6379
spring.redis.password=hyzs
spring.redis.pool.maxActive=11
spring.redis.pool.maxIdle=11
spring.redis.pool.maxWait=-1
spring.redis.pool.minIdle=0
#json格式化
spring.jackson.date-format=yyyy-MM-dd HH:mm:ss
spring.jackson.time-zone=Asia/Shanghai
#session共享
spring.session.store-type=redis
#文件上传
spring.http.multipart.enabled=true
spring.http.multipart.max-file-size=10MB
spring.http.multipart.max-request-size=10MB
#mybatis
mybatis.configuration.mapUnderscoreToCamelCase=true
mybatis.configuration.jdbcTypeForNull=NULL
#日志
logging.level.com.hyzs=DEBUG
#关闭
endpoints.shutdown.enabled=true
endpoints.shutdown.sensitive=false
#分布助手配置
logging.pagehelper.helper-dialect=mysql
logging.pagehelper.reasonable=true
logging.pagehelper.support-methods-arguments=true
logging.pagehelper.params=count=countSql`,
   dev:`#开发环境配置
#数据连接配置
spring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zerodDateTimeBehavior=convertToNull
spring.datasource.druid.username=user
spring.datasource.druid.password=admin@1
spring.datasource.druid.initial-size=5
spring.datasource.druid.maxActive=10
spring.datasource.druid.minIdle=10

#注册中心地址
eureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka

#Redis连接
spring.redis.database=0
spring.redis.host=172.16.8.18
spring.redis.port=6379
spring.redis.password=hyzs
spring.redis.pool.maxActive=11
spring.redis.pool.maxIdle=11
spring.redis.pool.maxWait=-1
spring.redis.pool.minIdle=0`,
test:`#测试环境配置
#数据连接配置
spring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zerodDateTimeBehavior=convertToNull
spring.datasource.druid.username=user
spring.datasource.druid.password=admin@1
spring.datasource.druid.initial-size=5
spring.datasource.druid.maxActive=10
spring.datasource.druid.minIdle=10

#注册中心地址
eureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka

#Redis连接
spring.redis.database=0
spring.redis.host=172.16.8.18
spring.redis.port=6379
spring.redis.password=hyzs
spring.redis.pool.maxActive=11
spring.redis.pool.maxIdle=11
spring.redis.pool.maxWait=-1
spring.redis.pool.minIdle=0`,
prod:`#生产环境配置
#数据连接配置
spring.datasource.druid.url=jdbc:mysql://172.16.8.18:3306/uap?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8&zerodDateTimeBehavior=convertToNull
spring.datasource.druid.username=user
spring.datasource.druid.password=admin@1
spring.datasource.druid.initial-size=5
spring.datasource.druid.maxActive=10
spring.datasource.druid.minIdle=10

#注册中心地址
eureka.client.service-url.defaultZone=http://172.16.8.20:8761/eureka

#Redis连接
spring.redis.database=0
spring.redis.host=172.16.8.18
spring.redis.port=6379
spring.redis.password=hyzs
spring.redis.pool.maxActive=11
spring.redis.pool.maxIdle=11
spring.redis.pool.maxWait=-1
spring.redis.pool.minIdle=0`,
}