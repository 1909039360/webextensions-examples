# apply-css

**This add-on injects CSS into web pages. The `addons.mozilla.org` domain disallows this operation, so this add-on will not work properly when it's run on pages in the `addons.mozilla.org` domain.**

## What it does

This extension includes:

* a background script, "background.js"
* a page action

It adds the [page action](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction)
to every tab the user opens. Clicking the page action
for a tab applies some CSS using [tabs.insertCSS](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).

Clicking again removes the CSS using [tabs.removeCSS](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS).

## What it shows

* some basic page action functions
* how to apply and remove CSS.

apply-css
该插件将CSS代码注入到网页中。addons.mozilla.org 域不允许此操作，因此在运行于 addons.mozilla.org 域的页面上，该插件将无法正常工作。

插件功能
该插件包括：

一个后台脚本 "background.js"
一个页面操作
它会将 页面操作 添加到用户打开的每个标签页上。当点击标签页的页面操作时，会使用 tabs.insertCSS 应用一些 CSS。

再次点击时，会使用 tabs.removeCSS 删除 CSS。

示范内容
一些基本的页面操作功能
如何应用和删除 CSS。
