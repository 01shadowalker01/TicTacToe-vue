<template>
  <div class="wrapper">
    <h3>Round {{ round }}</h3>
    <h4>Player 1: {{ firstPlayerSymbol }}</h4>
    <h4>Player 2: {{ secondplayerSymbol }}</h4>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    round: Number,
    firstPlayerSymbol: String,
    secondplayerSymbol: String,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 50%;
  justify-content: space-evenly;

  h3 {
    flex: 0 1 100%;
    align-self: center;
  }
}
</style>
