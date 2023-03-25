# devtools-panels

**Adds a new panel to the developer tools. The panel contains buttons that demonstrate various basic features of the devtools API.**

## What it does ##

This extension adds a new panel to the developer tools. The panel contains four buttons:

* **Inspect H1**: this injects a script into the active page. The script uses the [`inspect()` helper function](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Helpers) to select the first &lt;h1&gt; element in the page in the devtools inspector.

* **Reddinate inspected element**: this injects a script into the active page. The script uses the [`$0` helper](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Helpers) to get the element that's currently selected in the devtools Inspector, and gives it a red background.

* **Check for jQuery**: this injects a script into the active page. The script checks whether `jQuery` is defined in the page, and logs a string to the add-on debugging console (note: *not* the web console) recording the result.

* **Inject content script**: this sends a message to the extension's background script, asking it to inject a given content script in the active page.

To learn more about the devtools APIs, see [Extending the developer tools](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Extending_the_developer_tools).

## What it shows ##

* How to add a new panel to the devtools.

* How to inject a script into the active page using [`inspectedWindow.eval()`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval).

* How to use  [helpers](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Helpers) to interact with the devtools.

* That unlike content scripts, scripts injected with `eval()` can see objects, like `jQuery`, that were added by page scripts.

* How to send messages to the background script.


# devtools-panels

**向开发者工具添加一个新面板。该面板包含演示开发者工具API的各种基本功能的按钮。**

## 它做什么 ##

此扩展向开发者工具添加了一个新面板。该面板包含四个按钮：

* **检查H1**：这将向活动页面注入一个脚本。该脚本使用[`inspect()`助手函数](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Helpers)在devtools检查器中选择页面中的第一个&lt;h1&gt;元素。

* **Reddinate检查的元素**：这将向活动页面注入一个脚本。该脚本使用[`$0`助手](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Helpers)获取当前在devtools Inspector中选择的元素，并为其设置红色背景。

* **检查jQuery**：这将向活动页面注入一个脚本。该脚本检查页面中是否定义了`jQuery`，并记录结果的字符串到附加组件调试控制台（注意：*不是*Web控制台）。

* **注入内容脚本**：这将向扩展的后台脚本发送一条消息，请求在活动页面中注入给定的内容脚本。

要了解有关devtools API的更多信息，请参见[扩展开发者工具](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Extending_the_developer_tools)。

## 它展示了什么 ##

* 如何向devtools添加新面板。

* 如何使用[`inspectedWindow.eval()`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval)向活动页面注入脚本。

* 如何使用[助手](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Helpers)与devtools交互。

* 与内容脚本不同，使用`eval()`注入的脚本可以看到由页面脚本添加的对象，如`jQuery`。

* 如何向后台脚本发送消息。
