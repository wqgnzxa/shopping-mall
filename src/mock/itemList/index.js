import Mock, { Random } from "mockjs";

let params = Mock.mock({
    "pop|10": [{
        "page|+1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "list|10": [{
            img: Random.image("100x150"),
            title: Random.string(10),
            price: Random.integer(0, 100),
            cfav: Random.integer(0, 10),
        }, ],
    }, ],
    "new|10": [{
        "page|+1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "list|10": [{
            img: Random.image("100x150"),
            title: Random.string(10),
            price: Random.integer(0, 100),
            cfav: Random.integer(0, 10),
        }, ],
    }, ],
    "sell|10": [{
        "page|+1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "list|10": [{
            img: Random.image("100x150"),
            title: Random.string(10),
            price: Random.integer(0, 100),
            cfav: Random.integer(0, 10),
        }, ],
    }, ],
});

export default {
    getItemList: () => ({
        code: 200,
        data: params,
    }),
};