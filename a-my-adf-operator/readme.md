

阶段一
    实现基本的功能
    1 实现自动填充pipelinecode 和 ActivityCode 

    2 可实现多个ActivityCode 的多次填充

popup 页面设计 
    1 基本完成 
    2 数据处理 
        完成
    3 数据填充 
        读取一条数据,然后删除一条数据 

    修改方案 
        用下拉框显示 
        

child_dws_sellout fact_sellout_actual1
child_dws_sellout fact_sellout_actual2
child_dws_sellout fact_sellout_actual3
child_dws_sellout fact_sellout_actual4
child_dws_sellout fact_sellout_actual5


margin：层的边框以外留的空白
background-color：背景颜色
background-image：背景图片
padding：层的边框到层的内容之间的空白 
border：边框 
content：内容 


const data = `child_dws_sellout fact_sellout_actual
child_dws_sellout fact_sellout_actual
child_dws_sellout fact_sellout_actual
child_dws_sellout fact_sellout_actual`;

const arr = data.split(/\s+/);
const json = [];

for (let i = 0; i < arr.length; i += 2) {
  const obj = {
    pipeline_code: arr[i],
    pipeline_name: arr[i + 1]
  };
  json.push(obj);
}

console.log(JSON.stringify(json));


阶段二 
    实现扩展功能
    1 自动打开pipelinecode 
    2 保存常用的页面 

阶段三 
    其他功能补充



在上面的代码中，browser.storage.local.set方法用于存储数据，browser.storage.local.get方法用于读取数据，browser.storage.onChanged.addListener方法用于监听数据变化，browser.storage.local.remove方法用于删除数据。当存储、读取、删除数据时，这些方法都返回一个Promise对象，我们可以通过Promise的then和catch方法来处理操作结果。当监听数据变化时，我们可以在回调函数中处理数据变化的逻辑。 