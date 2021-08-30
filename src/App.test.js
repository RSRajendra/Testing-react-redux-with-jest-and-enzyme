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
});
