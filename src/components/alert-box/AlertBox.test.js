import React from "react";
import { shallow } from "enzyme";
import { componentRenders } from "../../utils/testUtils";
import AlertBox from "./AlertBox";

describe("AlertBox Component", () => {
  const children = "test children";
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AlertBox variant="danger">{children}</AlertBox>);
  });

  it("Should render without errors", () => {
    componentRenders(wrapper, "alertBoxComponent");
  });

  it("Should render children", () => {
    const props = wrapper.props();
    expect(props.children).toEqual(children);
  });
});
