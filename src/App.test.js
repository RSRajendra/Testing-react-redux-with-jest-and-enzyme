import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps, testStore } from "./Utils/index";
const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some Text",
        },
        {
          title: "Example title 2",
          body: "Some Text",
        },
        {
          title: "Example title 3",
          body: "Some Text",
        },
      ],
    };
    wrapper = setup(initialState);
  });

  it("should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updateState method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsAValue method should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  });
});
