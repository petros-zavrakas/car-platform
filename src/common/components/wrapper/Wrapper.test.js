import React from "react";
import { shallow } from "enzyme";
import { componentRenders } from "../../utils/testUtils";
import Wrapper from "./Wrapper";

describe("Wrapper Component", () => {
  const children = "test children";
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Wrapper>{children}</Wrapper>);
  });

  it("Should render without errors", () => {
    componentRenders(wrapper, "wrapperComponent");
  });

  it("Should render children", () => {
    const props = wrapper.props();
    expect(props.children).toEqual(children);
  });
});
