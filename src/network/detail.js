import { request2 } from "./request";

export function getDetail(iid) {
    return request2({
        url: "/detail",
        params: {
            iid,
        },
    });
}
// const dataList = [];
// getDetail(iid).then((res) => {
//     dataList = res.data.result;
//     return dataList;
// });
// itemInfo = dataList.itemInfo;
// columns = dataList.columns;
// services = dataList.services;
// export class Goods {
//     constructor(itemInfo, columns, services) {
//         this.result = itemInfo.result;
//         this.desc = itemInfo.desc;
//         this.newPrice = itemInfo.price;
//         this.oldPrice = itemInfo.oldprice;
//         this.discount = itemInfo.discountdisc;
//         this.columns = columns;
//     }
// }