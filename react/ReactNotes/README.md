# 学习RN用的例子

# 书籍名称:[Packt.Getting.Started.with.React.Native.2015.12](https://www.packtpub.com/application-development/getting-started-react-native)


# 开始
*   react-native run-android  在android端运行，之后会报错（无法连接到服务端）
*   react-native start 启动react-native 服务端,

* A common issue is that the packager is not started automatically when you run react-native run-android. You can start it manually using react-native start.

# 手机摇动可以出现设置菜单
* dev settings 可以设置手机reload的服务端。
* debug js 可以在pc端打开浏览器进行调试


# [打包](http://facebook.github.io/react-native/docs/signed-apk-android.html)

  1,  Place the my-release-key.keystore file under the android/app directory in your project folder.
  2,.gradle/gradle.properties

```javascript
    MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
    MYAPP_RELEASE_STORE_PASSWORD=*****
    MYAPP_RELEASE_KEY_PASSWORD=*****
```





















