import { request2 } from "./request";

export function getDetail(iid) {
    return request2({
        url: "/detail",
        params: {
            iid,
        },
    });
}

export function getRecommend(iid) {
    return request2({
        url: "/recommend",
        params: {
            iid,
        },
    });
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
        this.discountBgColor = itemInfo.discountBgColor;
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodcount = shopInfo.cGoods;
    }
}