import React from "react";
import { shallow } from "enzyme";
import {
  findByAttribute,
  componentRenders
} from "../../common/utils/testUtils";
import Header from "./Header";

describe("Wrapper Component", () => {
  let wrapper, select;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    select = findByAttribute(wrapper);
  });

  it("Should render without errors", () => {
    componentRenders(wrapper, "HeaderComponent");
  });

  it("Should render a logo", () => {
    const logo = select("logo");
    expect(logo.length).toBe(1);
  });
});
