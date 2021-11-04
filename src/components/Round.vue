<template>
  <div class="wrapper">
    <h3>Round {{ round }}</h3>
    <div>
      <h4>Player 1: {{ firstPlayerSymbol }}</h4>
      <h4>Player 2: {{ secondplayerSymbol }}</h4>
    </div>
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

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 50%;

  h3 {
    flex: 0 1 100%;
    align-self: center;
  }
}
</style>
