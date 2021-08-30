import React from "react";
import { findByTestAtrr, checkProps } from "../../Utils/index";
import SharedButton from "./button";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("should not through a warning", () => {
    it("should not through warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBe(undefined);
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
