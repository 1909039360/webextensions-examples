// 当收到来自插件的消息时，执行相应操作
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 监听来自 popup 脚本的radio-selected消息
    

    if (request.action === "radio-selected") {
        // 输出单选框的值
        console.log('Radio button selected: ' + request.value);
    }
    if (request.action === "clickLoginButton") {
        console.log("clickLoginButton2") ;
        let value;
        browser.storage.local.get('metaData').then((result) => {
            value = result ;
            console.log('读取到的数据B', value);
        }).catch((error) => {
            console.error('读取数据出错', error);
        });

    }
    if (request.action === "inputText") {
        var inputText = request.inputText; 
        console.log("inputText 收到消息");
        console.log(inputText);
        if (inputText) {
            var inputBox = document.getElementById("kw"); //[@id="kw"] //*[@id="s"]
            console.log(inputBox);
            if (inputBox) {
                inputBox.value = inputText;
            }
        }
    }

});



// 当页面加载完成时，检查是否需要填充文本框
window.addEventListener("load", function() {
    var inputText = localStorage.getItem("inputText");
    if (inputText) {
        var inputBox = document.getElementById("kw"); //[@id="kw"]
        if (inputBox) {
            inputBox.value = inputText;
        }
    }
});

