# commands

This extension shows how to use the `commands` manifest key to register keyboard shortcuts for your extension.

It registers a shortcut (Ctrl+Shift+U) to send a command to the extension (Command+Shift+U on a Mac).
When the user enters the shortcut, the extension opens a new browser tab and loads https://developer.mozilla.org into it.

It also adds an [options page](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/user_interface/Options_pages) to the extension, which enables the user to change the registered shortcut for the extension. Just open the options page, then type a new value into the textbox (for example: "Ctrl+Shift+O") and press "Update keyboard shortcut". To reset the shortcut to its original value, press "Reset keyboard shortcut".


这个扩展展示了如何使用“commands”清单键为您的扩展程序注册键盘快捷方式。
它注册了一个快捷键（Ctrl+Shift+U）以向扩展程序发送命令（在 Mac 上为 Command+Shift+U）。
当用户输入快捷键时，扩展程序会打开一个新的浏览器选项卡并将其加载到 https://developer.mozilla.org 中。
它还向扩展程序添加了一个[选项页面](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/user_interface/Options_pages)，使用户可以更改扩展程序的注册快捷键。
只需打开选项页面，然后在文本框中键入新值（例如：“Ctrl+Shift+O”），然后按“更新键盘快捷方式”即可。
要将快捷键重置为其原始值，请按“重置键盘快捷方式”。