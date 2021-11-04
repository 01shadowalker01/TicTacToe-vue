<template>
  <header>
    <h1>Tic Tac Toe!</h1>
    <Round :round="1" firstPlayerSymbol="X" secondplayerSymbol="O" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Round from "./components/Round.vue";

export default defineComponent({
  name: "App",
  components: { Round },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
