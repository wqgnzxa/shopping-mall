import Mock, { Random } from "mockjs";

/*  失败的方法，相信一定有办法解决的，先留着 
function getData() {
    let datalist = [],
        list = [],
        pop = [],
        news = [],
        sell = [];
    // for (let j = 0; j < 10; j++) {
    //     let page = j;
    for (let i = 0; i < 10; i++) {
        let page = i;
        let newData = {
            "iid|+1": 1,
            img: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            "price|.2": Random.integer(0, 1000),
            cfav: Random.integer(0, 100),
        };
        list.push(newData);
        pop.push(list);
        // news.push(list);
        // sell.push(list);
    }
    datalist.push(pop);
    // datalist.push(news);
    // datalist.push(sell);
    return {
        data: datalist,
    };
}

const params = Mock.mock(getData); */

const params = Mock.mock({
    "pop|10": [{
        "page|+1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "list|30": [{
            iid: /[a-z][A-Z][0-9]{1,2}/,
            img: Random.image("100x150", "#564"),
            title: /^[\u4e00-\u9fa5]{8,15}$/,
            price: /^\d{2,3}$/,
            cfav: /^\d{1,3}$/,
        }, ],
    }, ],
    "new|10": [{
        "page|+1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "list|30": [{
            iid: /[A-Z][a-z][0-9]{1,2}/,
            img: Random.image("100x150", "#396"),
            title: /^[\u4e00-\u9fa5]{8,15}$/,
            price: /^\d{2,3}$/,
            cfav: /^\d{1,3}$/,
        }, ],
    }, ],
    "sell|10": [{
        "page|+1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "list|30": [{
            iid: /[a-z][0-9][A-Z]{1,2}/,
            img: Random.image("100x150", "#888"),
            title: /^[\u4e00-\u9fa5]{8,15}$/,
            price: /^\d{2,3}$/,
            cfav: /^\d{1,3}$/,
        }, ],
    }, ],
});

export default {
    getItemList: () => ({
        code: 200,
        data: params,
    }),
};