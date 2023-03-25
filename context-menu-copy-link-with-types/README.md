# Context menu: Copy link with types

This example adds a context menu item to every link that copies the URL to the
clipboard, as plain text and as rich HTML.

## What it does

This extension includes:

* a background script that:
  - Registers a context menu item for every link.
  - Upon click, it invokes the function to copy text and HTML to the clipboard.
* a helper script, "clipboard-helper.js" that provides the copy-to-clipboard functionality.
  In the example, this script is run as a content script, but the actual functionality can also
  be used in visible extension pages such as extension button popups or extension tabs.
* a page, "preview.html" for testing the effect of copying to the clipboard.
  This page does not need to be part of the extension, and can directly be opened in the browser.

To test the extension, right-click on any link to open a context menu, and choose the
"Copy link to clipboard" option. Then open preview.html and paste the clipboard content
in the two displayed boxes. The first box will display "This is text: ..." and the second
box will display "This is HTML: ...".

Note: since the add-on relies on a content script for copying the text, the copy operation
will only succeed if the add-on is allowed to run scripts in the current page.
If you wish to successfully copy the text even if the current page cannot be scripted, then
you can open an (extension) page in a new tab as a fallback.

## What it shows

* how to put data on the [clipboard](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard)
  with custom types ("text/plain" and "text/html" in the example).
* how to safely construct HTML from given text.
* how to safely create JavaScript code to run as a dynamic content script.
* how to dynamically run a static content script only once.

# 右键菜单：复制带类型的链接

此示例为每个链接添加了一个上下文菜单项，以将URL复制到剪贴板，作为纯文本和丰富的HTML。

## 它做了什么

此扩展包括：

* 一个后台脚本：
  - 为每个链接注册上下文菜单项。
  - 单击时，它会调用将文本和HTML复制到剪贴板的函数。
* 一个帮助脚本“clipboard-helper.js”，提供复制到剪贴板的功能。
  在示例中，此脚本作为内容脚本运行，但实际功能也可以在可见扩展页面（例如扩展按钮弹出窗口或扩展选项卡）中使用。
* 一个页面“preview.html”，用于测试复制到剪贴板的效果。
  此页面不需要是扩展的一部分，可以直接在浏览器中打开。

要测试扩展程序，请右键单击任何链接以打开上下文菜单，然后选择“复制链接到剪贴板”选项。然后打开preview.html并将剪贴板内容粘贴到两个显示的框中。第一个框将显示“这是文本：...”，第二个框将显示“这是HTML：...”。

注意：由于插件依赖于内容脚本来复制文本，因此只有在允许插件在当前页面中运行脚本时，复制操作才会成功。如果您希望即使当前页面无法编写脚本也能成功复制文本，则可以在新标签页中打开（扩展）页面作为后备。

## 它展示了什么

* 如何使用自定义类型（示例中为“text/plain”和“text/html”）将数据放在[剪贴板](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard)上。
* 如何安全地从给定文本构建HTML。
* 如何安全地创建要作为动态内容脚本运行的JavaScript代码。
* 如何动态运行静态内容脚本仅一次。
