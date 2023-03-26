// 当收到来自插件的消息时，执行相应操作
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "clickLoginButton") {
        // loadData().then(function(inputText) {
        //     console.log(inputText);  // 输出 "Hello, world!"
        //     // 在这里可以对 inputText 进行进一步操作
        // });
        // console.log(inputText);
        // var inputBox = document.getElementById("su"); //[@id="kw"] //*[@id="s"] /html/body/div[2]/div[1]/div[5]/div/div/form/span[2]
        // console.log("提交测试1");
        // inputBox.click();
        // console.log("提交测试2") ;
        console.log("提交测试2") ;
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

// function loadData() {
//     return browser.storage.local.get("inputText").then(function(result) {
//         var inputText = result.inputText;
//         console.log(inputText);  // 输出 "Hello, world!"
//         // 在这里可以对 inputText 进行进一步操作
//         return inputText;
//     });
// }

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