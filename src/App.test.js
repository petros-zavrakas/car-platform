import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { findByAttribute } from "./utils/testUtils";
import App from "./App";

describe("App Component", () => {
  const mockStore = configureStore();
  const mockOnHideError = jest.fn();
  const error = "Test error";

  let store, wrapper, select;
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <BrowserRouter>
        <App 
          store={store}
          isFetching={false}
          errorMessage={error} 
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
    expect(props.errorMessage).toEqual(error);
  })
});
