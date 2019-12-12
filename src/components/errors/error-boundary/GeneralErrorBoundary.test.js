import React from "react";
import { shallow } from "enzyme";
import GeneralErrorBoundary from "./GeneralErrorBoundary";

describe("When there is no errors", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GeneralErrorBoundary>
        <p>ok</p>
      </GeneralErrorBoundary>
    );
  });

  it("Should render the child component", () => {
    const p = wrapper.find("p");
    expect(p.length).toBe(1);
  });
});

describe("When error occures", () => {
  const error = "we got an error";
  const errorInfo = { componentStack: "testing" };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GeneralErrorBoundary>
        <p>error</p>
      </GeneralErrorBoundary>
    );
    wrapper.instance().componentDidCatch(error, errorInfo);
    wrapper.update();
  });

  it("should not render the child component", () => {
    const p = wrapper.find("p");
    expect(p.length).toBe(0);
  });

  it("should update the state", () => {
    const stateError = wrapper.instance().state.error;
    expect(stateError).toEqual(error);
  });
});
