
window.onload = function() {
    console.log("页面和所有资源已加载完成");
    // 在此处可以对页面中的元素进行操作
    // 当用户点击确定按钮时，将输入内容存储到插件的 localStorage 中
    document.getElementById("btnOK").addEventListener("click", function() {
        var inputText = document.getElementById("inputText").value;
        // localStorage.setItem("inputText", inputText); 
        // browser.storage.local.set({"inputText": inputText});
        // browser.storage.local.get("inputText").then(function(result) {
        //     console.log(result.inputText+"_____________");  // 输出 "Hello, world!"
        // });
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action:"inputText",inputText:inputText});
        });

        console.log("inputText 保存成功");


    });

    // 当用户点击提交按钮时，向当前页面发送点击登录按钮的消息
    document.getElementById("btnSubmit").addEventListener("click", function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "clickLoginButton"});
        });
        console.log("inputText 提交成功");
    });
};



// document.addEventListener("DOMContentLoaded", function() {
//     console.log("页面 DOM 树加载完毕");
//     // 在此处可以对页面中的元素进行操作
// });