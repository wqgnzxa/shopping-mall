import Toast from "./toast";

const obj = {};

obj.install = function(Vue) {
    const toastConstructor = Vue.extend(Toast);

    const toast = new toastConstructor(Toast);

    toast.$mount(document.createElement("div"));

    document.body.appendChild(toast.$el);

    // 原型上加toast对象
    Vue.prototype.$toast = toast;
};

export default obj;