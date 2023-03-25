# export-helpers

## What it does

This extension demonstrates how to use [export helpers](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#Sharing_content_script_objects_with_page_scripts) in Firefox to share
JavaScript objects defined in content scripts with scripts loaded by web pages.

## How it works

This example is in two parts:

* an extension that consists of a content script and a background script
* a web page at: https://mdn.github.io/webextensions-examples/export-helpers.html

### The extension

 The extension loads a content script into the page at: https://mdn.github.io/webextensions-examples/export-helpers.html. The content script:
 
 * defines a function `notify()` and uses `exportFunction()` to export it to the page as a property of the global `window` object.
 * defines an object `messenger`, that has a member function `notify()`, and
uses `cloneInto()` to export that to the page as a property of the global `window` object.
 
 In the implementation of `notify()`, the content script sends a message to the extension's background script: when the background script gets the messages, it displays a [notification](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications).

## The page

The page is just a normal web page. It contains two buttons and loads a script. The script:

* listens for clicks on the first button and calls:


    window.notify("Message from the page script!");

* listens for clicks on the other button and calls:


    window.messenger.notify("Message from the page script!");

These items are available in the page's scope because the content script exported them.

## How to use it

To see the extension in action:

1. install the extension
2. visit https://mdn.github.io/webextensions-examples/export-helpers.html
3. click one of the buttons in the page. You should see a notification from the extension.

# export-helpers

## 它是什么

这个扩展程序演示了如何在Firefox中使用[导出助手](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#Sharing_content_script_objects_with_page_scripts)来共享在内容脚本中定义的JavaScript对象与由网页加载的脚本。

## 它是如何工作的

这个例子分为两部分：

* 一个由内容脚本和后台脚本组成的扩展程序
* 一个网页：https://mdn.github.io/webextensions-examples/export-helpers.html

### 扩展程序

该扩展程序将一个内容脚本加载到页面https://mdn.github.io/webextensions-examples/export-helpers.html中。内容脚本：

* 定义了一个函数`notify()`，并使用`exportFunction()`将其导出到页面作为全局`window`对象的属性。
* 定义了一个对象`messenger`，它有一个成员函数`notify()`，并使用`cloneInto()`将其导出到页面作为全局`window`对象的属性。

在`notify()`的实现中，内容脚本向扩展程序的后台脚本发送一条消息：当后台脚本收到消息时，它会显示一个[通知](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications)。

### 网页

该网页只是一个普通的网页。它包含两个按钮并加载一个脚本。该脚本：

* 监听第一个按钮的点击事件并调用：

    window.notify("来自页面脚本的消息！");

* 监听第二个按钮的点击事件并调用：

    window.messenger.notify("来自页面脚本的消息！");

这些项目在页面的范围内可用，因为内容脚本将它们导出。


## How to use it

要查看扩展程序的操作：

1. 安装扩展程序
2. 访问https://mdn.github.io/webextensions-examples/export-helpers.html
3. 单击页面上的一个按钮。您应该会看到扩展程序的通知。
