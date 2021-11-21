<template>
  <div class="leftnav">
    <better-scroll class="content" :probeType="3">
      <div
        class="left-list-items"
        v-for="(items, index) in leftNavlist"
        :class="{ isActive: active[index] }"
        @click="categoryChoosed(index)"
      >
        {{ items.title }}
      </div>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "../../../components/common/scroll/BetterScroll.vue";

export default {
  name: "categoryleftnav",
  data() {
    return {
      active: [1],
    };
  },
  components: {
    BetterScroll,
  },
  props: {
    leftNavlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    console.log(this.active);
  },
  mounted() {
    console.log(this.active);
  },
  methods: {
    categoryChoosed(index) {
      //为什么必须要这一步？？？待思考
      //经过思考，是因为data里的active定义时是空的，没有元素，只有点击时才会添加元素，一个全为空的数组就是没有值的，点哪个哪个为true
      // 不加这句话时样式无法动态绑定到标签里，猜测是因为此时没有更新数组，vue的响应式原理中是无法实时侦听到数组通过index赋值的变化的，我们换一种方式试试
      this.active = [];
      this.active[index] = true;
      // 用splice替换index的值，但数组长度不够，没有办法添加，只能遍历一遍再添加
      // this.active.splice(index, 0, true);
      console.log(this.active);
      // this.Keys = [
      //   this.leftNavlist[index].maitKey,
      //   this.leftNavlist[index].miniWallkey,
      // ];
      this.$emit(
        "categoryChoosed",
        this.leftNavlist[index].maitKey,
        this.leftNavlist[index].miniWallkey
      );
    },
  },
};
</script>

<style>
.leftnav {
  width: 25%;
}
.content {
  height: calc(100vh - 44px);
}
.left-list-items {
  flex-wrap: 1;
  width: 100%;
  height: 44px;
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
}
.isActive {
  background-color: #fff;
  color: var(--color-tint);
  border: 1px solid var(--color-tint);
}
</style>