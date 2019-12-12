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
      errors: [{ type: "FETCH_DATA", message: "This is an error message" }]
    };

    const errors = selectors.selectErrors(state);
    expect(errors).toEqual(state.errors);
  });
});
