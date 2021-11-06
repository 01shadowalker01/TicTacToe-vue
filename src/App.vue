<template>
  <header>
    <h1>Tic Tac Toe!</h1>
    <Round :round="1" firstPlayerSymbol="X" secondplayerSymbol="O" />
  </header>
  <main class="main-conetnt">
    <Scores :scoreList="scoreList" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Round from "./components/Round.vue";
import Scores from "./components/Scores.vue";

export default defineComponent({
  name: "App",
  components: { Round, Scores },
  data() {
    return {
      scoreList: [
        { round: 1, result: "firstPlayerWon" },
        { round: 2, result: "draw" },
        { round: 3, result: "secondPlayerWon" },
        { round: 4, result: "firstPlayerWon" },
        { round: 5, result: "draw" },
      ],
    };
  },
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

.main-conetnt {
  display: flex;
  justify-content: center;
}
</style>
