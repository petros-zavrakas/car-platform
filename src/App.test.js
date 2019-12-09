import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { findByAttribute } from "./utils/testUtils";
import App from "./App";

describe("App Component", () => {
  const mockStore = configureStore();
  const mockOnHideError = jest.fn();
  const errors = [{ type: "TEST_ACTION", message: "Test message" }];

  let store, wrapper, select;
  beforeEach(() => {
    store = mockStore({
      errors: errors,
      isFetching: false,
      onHideError: mockOnHideError
    });
    wrapper = mount(
      <BrowserRouter>
        <App
          store={store}
          isFetching={false}
          errors={errors}
          onHideError={mockOnHideError}
        />
      </BrowserRouter>
    );
    select = findByAttribute(wrapper);
  });

  it("Should renders without crashing", () => {
    const component = select("AppComponent");
    expect(component.length).toBe(1);
  });

  it("Should receive props", () => {
    const props = wrapper.find(App).props();

    expect(props.isFetching).toBe(false);
    expect(props.errors).toEqual(errors);
  });
});
