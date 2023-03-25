# devtools-panels

**Adds a new sidebar to the developer tools inspector.**

## What it does

This extension adds a new sidebar to the inspector panel.
It displays the properties of the current selected node in the markup view, using
`sidebar.setExpression($0)` each time a new node is selected (listener added via
`browser.devtools.panels.elements.onSelectionChanged`).

To learn more about the devtools APIs, see [Extending the developer tools](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Extending_the_developer_tools).

# devtools-panels

**向开发者工具检查器添加一个新的侧边栏。**

## 它是做什么的

此扩展程序向检查器面板添加了一个新的侧边栏。
它使用`sidebar.setExpression($0)`在每次选择新节点时（通过`browser.devtools.panels.elements.onSelectionChanged`添加的侦听器）显示标记视图中当前选定节点的属性。

要了解有关devtools API的更多信息，请参见[扩展开发者工具](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Extending_the_developer_tools)。


