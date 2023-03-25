# chill-out

## What it does

After 6 seconds of inactivity (defined as the user not having navigated
or switched away from the active tab) display a
[page action](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction)
for that tab.

When the user clicks the page action, navigate to https://giphy.com/explore/cat.

The delay of 6 seconds is to make the extension's behavior obvious, but such a short
period is not recommended in practical applications. Note that in Chrome, alarms do not 
fire in under a minute. In Chrome:

* if you install this extension "unpacked", you'll see a warning
in the console, but the alarm will still go off after 6 seconds
* if you package the extension and install it, then the alarm will go off after
a minute.

## What it shows

How to:

* use various `tabs` functions.
* show and hide a page action.
* set alarms and handle alarms going off.


## 它是做什么的

在6秒钟的不活动时间后（定义为用户没有导航或切换到活动选项卡），为该选项卡显示一个页面操作。

当用户单击页面操作时，导航到https://giphy.com/explore/cat。

6秒的延迟是为了使扩展的行为明显，但在实际应用中不建议使用如此短的时间。请注意，在Chrome中，警报不会在一分钟内触发。在Chrome中：

* 如果您以“未打包”的方式安装此扩展程序，则会在控制台中看到警告，但警报仍将在6秒后响起
* 如果您打包扩展并安装它，则警报将在一分钟后响起。

## 它展示了什么

如何：

* 使用各种“选项卡”功能。
* 显示和隐藏页面操作。
* 设置警报并处理警报的触发。
