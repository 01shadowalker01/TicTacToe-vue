<template>
  <table class="game-board">
    <tr v-for="(rowState, i) in cellStateList" :key="i">
      <td
        v-for="(cellState, j) in rowState"
        :key="j"
        @click="onPlayerAction(i, j)"
      >
        <span v-if="cellState === 0" class="first-player-mark">X</span>
        <span v-else-if="cellState === 1" class="second-player-mark">O</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    cellStateList: Object as PropType<number[][]>,
  },
  methods: {
    onPlayerAction(i: number, j: number) {
      this.$emit("playerAction", { i, j });
    },
  },
});
</script>

<style lang="scss" scoped src="./GameBoard.scss"></style>
