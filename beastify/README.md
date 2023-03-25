# beastify

## What it does ##

The extension includes:

* a browser action with a popup including HTML, CSS, and JS
* a content script
* three images, each of a different beast, packaged as web accessible resources

When the user clicks the browser action button, the popup is shown, enabling
the user to choose one of three beasts.

When it is shown, the popup injects a content script into the current page.

When the user chooses a beast, the extension sends the content script a message containing
the name of the chosen beast.

When the content script receives this message, it replaces the current page
content with an image of the chosen beast.

When the user clicks the reset button, the page reloads, and reverts to its original form.

Note that:

* if the user reloads the tab, or switches tabs, while the popup is open, then the popup won't be able to beastify the page any more (because the content script was injected into the original tab).

* by default [`tabs.executeScript()`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/executeScript) injects the script only when the web page and its resources have finished loading. This means that clicks in the popup will have no effect until the page has finished loading.

* it's not possible to inject content scripts into certain pages, including privileged browser pages like "about:debugging" and the [addons.mozilla.org](https://addons.mozilla.org/) website. If the user clicks the beastify icon when such a page is loaded into the active tab, the popup displays an error message.

## What it shows ##

* write a browser action with a popup
* how to have different browser_action images based upon the theme
* give the popup style and behavior using CSS and JS
* inject a content script programmatically using `tabs.executeScript()`
* send a message from the main extension to a content script
* use web accessible resources to enable web pages to load packaged content
* reload web pages


beastify
插件功能
该插件包括：

一个包含 HTML、CSS 和 JS 的弹出式浏览器操作
一个内容脚本
三个不同野兽的图像，作为 Web 可访问资源打包
当用户单击浏览器操作按钮时，弹出窗口将显示，允许用户选择三种野兽之一。

当弹出窗口显示时，它将在当前页面中注入一个内容脚本。

当用户选择一种野兽时，扩展程序会向内容脚本发送一个包含所选野兽名称的消息。

当内容脚本接收到此消息时，它会将当前页面内容替换为所选野兽的图像。

当用户单击重置按钮时，页面将重新加载，并恢复其原始形式。

请注意：

如果用户在弹出窗口打开时重新加载选项卡或切换选项卡，则弹出窗口将无法再野兽化页面（因为内容脚本已经被注入到原始选项卡中）。

默认情况下，tabs.executeScript() 仅在网页及其资源加载完成后注入脚本。这意味着在页面加载完成之前，单击弹出窗口中的按钮将没有任何效果。

无法注入内容脚本到某些页面中，包括特权浏览器页面（例如 "about:debugging"）和 addons.mozilla.org 网站。如果用户在活动选项卡中加载了这样的页面并单击了野兽化图标，则弹出窗口将显示错误消息。

示范内容
如何编写包含弹出窗口的浏览器操作

如何基于主题设置不同的浏览器操作图像
如何使用 CSS 和 JS 为弹出窗口提供样式和行为
如何使用 tabs.executeScript() 程序注入内容脚本
如何从主扩展程序向内容脚本发送消息
如何使用 Web 可访问资源来使网页加载打包内容
如何重新加载网页