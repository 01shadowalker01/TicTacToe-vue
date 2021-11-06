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
        { round: 1, firstPlayerWon: true },
        { round: 2, firstPlayerWon: true },
        { round: 3, firstPlayerWon: false },
        { round: 4, firstPlayerWon: false },
        { round: 5, firstPlayerWon: true },
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
