import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../Utils/index";
import Headline from "./headline";

const setup = (props) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Checking PropTypes", () => {
    it("should not through warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@gmail.com",
            age: 24,
            onlineStatus: true,
          },
        ],
      };
      const propErr = checkProps(Headline, expectedProps);
      expect(propErr).toBeUndefined();
    });
  });

  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setup(props);
    });

    it("should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a H1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    it("should render description", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it("should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
