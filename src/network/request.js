import axios from "axios";

function request1(config) {
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        // baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000,
    });
    return instance(config);
}

function request2(config) {
    const instance = axios.create({
        // baseURL: "http://123.207.32.32:8000",
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000,
    });
    return instance(config);
}

export { request1, request2 };
// const distance = axios.create({
//     baseURL: "//api/msdk/proxy/",
//     timeout: 5000,
// });

// instance.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     (err) => {
//         console.log(err);
//     }
// );

// instance.interceptors.request.use(
//     (res) => {
//         return res.data;
//     },
//     (err) => {
//         console.log(err);
//     }
// );