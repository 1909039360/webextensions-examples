
window.onload = function() {

    //将 <textarea> 元素中的光标放到首行第一个字符
    moveCursorToBeginning();
    let storageValue;
    console.log("页面和所有资源已加载完成");
    

    // 当用户点击确定按钮时，将输入内容存储到插件的 localStorage 中
    document.getElementById("btnOK").addEventListener("click", function() {
        
        var textareaStr= document.getElementById("textarea").value;
        document.getElementById('textarea').style.display='none';
        
        var metaData;
        
        if (textareaStr.length === 0) {
          // 字符串为空
          console.log("storageValue");
          metaData = storageValue;
        }else{
          metaData = convertToJSON(textareaStr);
          saveData('metaData', metaData)
          .then(() => {
              console.log('Data saved successfully');
          })
          .catch(error => {
              console.error('Error while saving data:', error);
          });
        // 这里是异步的所以前面还没保存完后面就被执行了。
        }
        
        generateRadioButtons("radio-buttons",metaData);



    });

    // 当用户点击提交按钮时，向当前页面发送点击登录按钮的消息
    document.getElementById("btnSubmit").addEventListener("click", function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "clickLoginButton"});
        });

        let value;
        browser.storage.local.get('metaData').then((result) => {
            value = result ;
            console.log('读取到的数据A', value);
            return;
        }).catch((error) => {
            console.error('读取数据出错', error);
        });
        // 这里是异步的所以前面还没保存完后面就被执行了。

    });


    browser.storage.local.get('metaData').then((result) => {
        storageValue = result ;
        console.log('读取到的数据A', storageValue);
        return;
    }).catch((error) => {
        console.error('读取数据出错', error);
    });
    console.log(storageValue+'sdfsdfsdfsdf');
};



function saveData(key, value) {
    browser.storage.local.set({[key]: value})
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch(error => {
        console.error('Error while saving data:', error);
      });
  };
  
  function getData(key) {
    browser.storage.local.get(key)
      .then(result => {
        console.log('Data retrieved successfully:', result);
        return result;
      })
      .catch(error => {
        console.error('Error while retrieving data:', error);
      });
};

function moveCursorToBeginning() {
    const textarea = document.querySelector('textarea');
    textarea.focus();
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
};


 function convertToJSON(str) {
    const arr = str.split(/\s+/);
    const json = [];
  
    for (let i = 0; i < arr.length; i += 2) {
      const obj = {
        pipeline_code: arr[i],
        activity_code: arr[i + 1],
        wait_depends:'false',
        start_type:'renew',
        operator:'test'
      };
      json.push(obj);
    }
    return json;
  };

  function generateRadioButtons(parentId, options) {
    // 获取父元素
    var parent = document.getElementById(parentId);
    
    // 循环创建单选框
    for (var i = 0; i < options.length; i++) {
      // 创建单选框
      var radio = document.createElement("input");
      var activity = options[i]["pipeline_code"]+" "+options[i]["activity_code"]
      radio.type = "radio";
      radio.name = "options";
      radio.value =activity;
      // 创建标签
      var label = document.createElement("label");
      label.innerHTML = activity;
      // 添加到父元素中
      parent.appendChild(radio);
      parent.appendChild(label);
      parent.appendChild(document.createElement("br"));
    }
  }
  
  // 调用函数
  generateRadioButtons("radio-buttons", ["child_dws_sellout", "fact_sellout_actual"]);
