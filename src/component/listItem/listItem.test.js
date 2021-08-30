import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../Utils";
import ListItem from "./listItem";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some Text",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should render a title", () => {
      const component = findByTestAtrr(wrapper, "componentTitle");
      expect(component.length).toBe(1);
    });

    it("should render description", () => {
      const component = findByTestAtrr(wrapper, "componentDesc");
      expect(component.length).toBe(1);
    });
  });

  describe("should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some Text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should not render component", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
