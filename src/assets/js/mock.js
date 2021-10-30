//引入mockjs
import Mock from "mockjs";
//使用mockjs模拟数据
Mock.mock("//api/msdk/proxy/query_common_credit/", {
    ret: 0,
    data: {
        title: "Syntax Demo",

        "string1|1-10": "⭐",
        "string2|3": "value",
        "number1|+1": 100,
        "boolean1|1": true,

        "object1|2-4": {
            110000: "北京市",
            120000: "天津市",
            130000: "河北省",
        },

        "array1|1": ["AMD", "CMD", "KMD", "UMD"],

        function: function() {
            return this.title;
        },

        image: "@image",
        id: "@id",
        name: "@cname",

        //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
    },
});