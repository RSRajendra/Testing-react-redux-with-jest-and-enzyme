import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./header";
import { findByTestAtrr } from "../../Utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("should render witout errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
