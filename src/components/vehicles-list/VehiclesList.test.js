import React from "react";
import { shallow } from "enzyme";
import {
  findByAttribute,
  componentRenders
} from "../../utils/testUtils";
import VehiclesList from "./VehiclesList";

describe("Wrapper Component", () => {
  let wrapper, select;

  beforeEach(() => {
    wrapper = shallow(<VehiclesList />);
    select = findByAttribute(wrapper);
  });

  it("Should render without errors", () => {
    componentRenders(wrapper, "vehiclesListComponent");
  });

  it("Should render an h1 and a list", () => {
    const h1 = select("header");
    expect(h1.length).toBe(1);

    const list = select("list");
    expect(list.length).toBe(1);
  });
});
