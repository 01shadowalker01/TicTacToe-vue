import { DEFAULT_EMPTY_SPACE_VALUE } from "@/logic/game-logic-servie";
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
      const cellStateList = Array.from({ length: 3 }, () => {
        Array.from({ length: 3 }, () => DEFAULT_EMPTY_SPACE_VALUE);
      });
      const wrapper = shallowMount(GameBoard, {
        props: { cellStateList },
      });
      expect(wrapper.find(".game-board").exists()).toBe(true);
      expect(wrapper.findAll("td").length).toBe(9);
    });
  });
});
