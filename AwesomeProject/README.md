# 运行
npm install
react-native start 启动服务端
react-native run-android  在真机上运行
adb logcat *:S ReactNative:V ReactNativeJS:V  查看手机端日志
adb shell input keyevent 82 发送打开设置的指令，选择dev setting 设置为服务端的ip 和端口8081