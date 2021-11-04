import { shallowMount } from "@vue/test-utils";
import Round from "./Round.vue";

describe("Round component", () => {
  describe("init", () => {
    it("props should work correctly", () => {
      const round = 1;
      const wrapper = shallowMount(Round, {
        props: { round },
      });

      expect(wrapper.props().round).toBe(round);
      expect(wrapper.find("h3").text()).toBe("Round " + round);
    });
  });
});
