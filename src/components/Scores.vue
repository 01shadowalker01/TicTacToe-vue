<template>
  <table>
    <tr>
      <td>Round</td>
      <td v-for="score in scoreList" :key="score.round">
        {{ score.round }}
      </td>
    </tr>
    <tr>
      <td>P1</td>
      <td v-for="score in scoreList" :key="score.round">
        <span v-if="score.firstPlayerWon">X</span>
      </td>
    </tr>
    <tr>
      <td>P2</td>
      <td v-for="score in scoreList" :key="score.round">
        <span v-if="!score.firstPlayerWon">O</span>
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

<style lang="scss" scoped></style>
