import { Score } from "@/models/score";
import Scores from "./Scores.vue";
import { shallowMount } from "@vue/test-utils";

describe("Scores component", () => {
  describe("init", () => {
    it("props", () => {
      const scoreList: Score[] = [{ round: 1, firstPlayerWon: true }];
      const wrapper = shallowMount(Scores, {
        props: { scoreList },
      });

      expect(wrapper.props().scoreList).toEqual(scoreList)
    });
  });
});
