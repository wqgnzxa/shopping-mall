import { ADD_COUNTER, ADD_TO_CART } from "./mutations-types";

export default {
    addCart(context, payLoad) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(
                (item) => item.iid === payLoad.iid
            );
            // 遍历cartlist里的元素，和新传入的元素比较，一样的话count加1，不一样的话设置count属性等于1
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct);
                resolve("当前的商品数量+1");
            } else {
                payLoad.count = 1;
                // 只有在oldproduct值为空的时候，就是传入的是新对象的时候才把它push到cartlist里
                context.commit(ADD_TO_CART, payLoad);
                resolve("添加了新的商品");
            }
        });
    },
};