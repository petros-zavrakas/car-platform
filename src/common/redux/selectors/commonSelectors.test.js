import * as selectors from "./commonSelectors";

describe("Common Selectors", () => {
  it("Should return isFetching", () => {
    const state = {
      isFetching: false 
    };

    const isFetching = selectors.selectIsFetching(state);
    expect(isFetching).toBe(false);
  });

  it("Should return an error message", () => {
    const state = {
      errorMessage: "This is an error message" 
    };

    const errorMessage = selectors.selectErrorMessage(state);
    expect(errorMessage).toEqual(state.errorMessage);
  });
});
