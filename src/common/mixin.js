import BackTop from "../components/common/backTop/BackTop.vue";

export const BackTopMixIn = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        MbackTopclk() {
            // console.log("this.$refs.scroll");
            this.$refs.scroll.scrollTo(0, -10, 500);
        },
        MisScroll(position, i) {
            // 判断BackTop是否显示,i是参照系的offsettop
            this.isShow = position.y < i;
            // 决定tabControl是否吸顶（position：fixed）
            // console.log("isShow", this.isShow, "position.y", position.y, i);
        },
    },
};