<template>
  <table>
    <thead>
      <th>Round</th>
      <th v-for="score in scoreList" :key="score.round">
        {{ score.round }}
      </th>
    </thead>
    <tr>
      <td>P1</td>
      <td v-for="score in scoreList" :key="score.round">
        <span v-if="score.result == 'firstPlayerWon'">X</span>
        <span v-else-if="score.result == 'draw'">-</span>
      </td>
    </tr>
    <tr>
      <td>P2</td>
      <td v-for="score in scoreList" :key="score.round">
        <span v-if="score.result == 'secondPlayerWon'">O</span>
        <span v-else-if="score.result == 'draw'">-</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { Score } from "@/models/score";

export default defineComponent({
  props: {
    scoreList: {
      type: Object as PropType<Score[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
table {
  border: 0;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #FFC200;
  font-size: 1.15rem;
  width: 45%;

  th {
    background-color: #FA5C0C;
    color: white;
  }

  td,
  th {
    padding: 8px 16px;
    border: 0;
  }

  td {
    border-bottom: 1px solid #bdb76b;
  }
}
</style>
