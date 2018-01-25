
# BrandshopFrontend

## How to communicate with backend
**Proxy to backend:**

Create a file in the project root path named `proxy.config.json` with the content or copy `proxy.config.json.example` directly.
```
{
  "/api/*": {
    "target": "http://localhost:8000",
    "secure": false,
    "logLevel": "debug"
  }
}
```
Then run `npm run serve`


[Document](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)

## UI

[Flex Layout](https://github.com/angular/flex-layout/)

[Material](https://material.angular.io)

[Icon](https://material.io/icons/)


## TODO:

### Foundation:

- [ ] Support different type of message (MessageService)

### Feature:

- [ ] Register
- [ ] Category And Product Page
- [ ] Shopping Cart Page


## Reference

#### AuthService:
- [RxJS-利用 BehaviorSubject 來管理使用者登入狀態](https://blog.kevinyang.net/2017/02/26/rxjs-context-demo-3/)

#### Http Interceptor:
- [Handling Refresh Token with New HttpInterceptor](https://www.intertech.com/Blog/angular-4-tutorial-handling-refresh-token-with-new-httpinterceptor/)
