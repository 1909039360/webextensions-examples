# Content script registration

This extension demonstrates the `browser.contentScripts.register()` API, which enables an extension to register URL-matching content scripts at runtime.

The contentScripts.register() API is intended to enable an extension to register scripts that are packaged in the extension. If you want to register third-party user scripts, use the [userScripts API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts). Please refer to [user script registration](https://github.com/mdn/webextensions-examples/tree/master/user-script-register) for an example of that API.

This extension adds a browser action that shows a popup. The popup lets you specify:

* some code that comprises your content script
* one or more [match patterns](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns), comma-separated. The content script will only be loaded into pages whose URLs match these patterns.

Once these are set up you can register the content script by clicking "Register script". The extension will then register a content script with the given properties by calling `browser.contentScripts.register()`.

To keep things simple, you can only have one script registered at any time: if you click "Register script" again, the active script is unregistered. To do this, the extension keeps a reference to the `RegisteredContentScript` object returned from `browser.contentScripts.register()`: this object provides the `unregister()` method.

Note that the extension uses a background script to register the content scripts and to keep a reference to the `RegisteredContentScript` object. If it did not do this, then as soon as the popup window closed, the `RegisteredContentScript` would go out of scope and be destroyed, and the browser would then unregister the content script as part of cleanup.

## Default settings

The popup is initialized with default values for the pattern and the code:

* the pattern `*://*.org/*`, which loads the script into any HTTP or HTTPS pages on a `.org` domain.
* the code `document.body.innerHTML = '<h1>This page has been eaten<h1>'`

To try the extension, open the browser action, click "Register script" with the defaults, and load http://example.org/ or 
https://www.mozilla.org/. Then change the pattern or the code, and reload these or related pages.


# 内容脚本注册

此扩展演示了 `browser.contentScripts.register()` API，该 API 允许扩展在运行时注册 URL 匹配的内容脚本。

contentScripts.register() API 旨在使扩展能够注册打包在扩展中的脚本。如果要注册第三方用户脚本，请使用 [userScripts API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts)。请参阅 [user script registration](https://github.com/mdn/webextensions-examples/tree/master/user-script-register) 以获取该 API 的示例。

此扩展添加了一个浏览器操作，显示一个弹出窗口。弹出窗口允许您指定：

* 一些包含您的内容脚本的代码
* 一个或多个 [匹配模式](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns)，用逗号分隔。内容脚本仅会加载到 URL 匹配这些模式的页面中。

设置完这些后，您可以通过单击“注册脚本”来注册内容脚本。然后，扩展将通过调用 `browser.contentScripts.register()` 注册具有给定属性的内容脚本。

为了保持简单，您一次只能注册一个脚本：如果再次单击“注册脚本”，则活动脚本将取消注册。为此，扩展会保留对从 `browser.contentScripts.register()` 返回的 `RegisteredContentScript` 对象的引用：此对象提供 `unregister()` 方法。

请注意，扩展使用后台脚本来注册内容脚本并保留对 `RegisteredContentScript` 对象的引用。如果不这样做，那么一旦弹出窗口关闭，`RegisteredContentScript` 就会超出范围并被销毁，然后浏览器将取消注册内容脚本作为清理的