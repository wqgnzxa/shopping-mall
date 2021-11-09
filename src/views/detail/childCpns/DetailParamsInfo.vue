<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <!-- <div class="info-key">{{ paramsInfo.info.key }}</div> -->
    <div class="info-rules" v-for="table in paramsInfo.rule.tables">
      <table>
        <tr v-for="items in table">
          <td v-for="i in items">{{ i }}</td>
        </tr>
      </table>
    </div>
    <div class="info-set">
      <table>
        <tr v-for="items in paramsInfo.info.set">
          <td>{{ items.key }}</td>
          <td>{{ items.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "paramsinfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info {
  margin: 40px 0;
}

.info-rules {
  padding: 0 10px;
  padding-bottom: 30px;
}

.info-rules table {
  display: table;
  width: 100%;
}

.info-rules table tr {
  height: 35px;
}

.info-rules table td {
  width: 60px;
}

.info-rules table tr td:first-child {
  width: 70px;
}
/* .info-key {
  font-size: 18px;
}
 */
.info-set {
  padding: 20px 10px;
  border-top: 8px solid #f6f6f6;
  font-size: 16px;
}

.info-set table {
  display: table;
  width: 100%;
}
.info-set tr {
  height: 45px;
}

.info-set td:first-child {
  width: 45px;
}

.info-set td:last-child {
  color: var(--color-tint);
}

.info-set td {
  border-bottom: 1px solid #eee;
  margin: 5px 0;
}
</style>