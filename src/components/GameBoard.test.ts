import { ComponentPublicInstance } from "@vue/runtime-core";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import GameBoard from "./GameBoard.vue";

describe("GameBoard component", () => {
  describe("init", () => {
    let wrapper: VueWrapper<ComponentPublicInstance>;
    beforeEach(() => {
      wrapper = shallowMount(GameBoard);
    });
    it("Should contain game board & it should be empty", () => {
      expect(wrapper.find(".game-board").exists()).toBe(true);
    });
  });
});
