module.export = {
    configureWebpack: {
        resolve: {
            alias: {
                //默认配置
                "@": "src",
                //自定义配置
                assets: "@/assets",
                common: "@/common",
                network: "@/network",
                components: "@/components",
                views: "@/views",
            },
        },
    },
};