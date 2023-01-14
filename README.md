## 接口規範
### Http status code
#### 成功 200
```json
{
  "data": {
    "username": "Dino"
  }
}
```
#### 失敗 400
```json
{
  "errorCode": "OTA-400",
  "message": "Incorrect username or password"
}
```
#### 未授權 401
```json
{
  "message": "Unauthorized"
}
```
#### 禁止 403
```json
{
  "message": "Forbidden"
}
```