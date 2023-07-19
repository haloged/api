# 一言API
## 接口地址
https://api.haloged.eu.org/
## 返回格式
直接输出
## 请求方式
GET
## 请求示例
https://api.haloged.eu.org/
## 参数说明
|名称|必填|类型|说明|
|--|--|--|--|
|无|否|无|无|
## 返回数据
你总说毕业遥遥无期，转眼就各奔东西。
## 调用实例
```
自行调用
```
## 示例代码
```php
<?php
error_reporting(0);
header('Content-type:text/json;charset=utf-8;');
$result = file_get_contents("https://api.haloged.eu.org/");
echo ($result);
?>
```
