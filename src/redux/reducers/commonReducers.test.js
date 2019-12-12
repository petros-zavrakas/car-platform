import { isFetching, errorsReducer } from "./commonReducers";

describe("isFetching reducer", () => {
  it("Should return the default state", () => {
    const defaultState = isFetching(undefined, { type: "TEST_ACTION" });
    expect(defaultState).toBe(false);
  });

  it("Should return a new state", () => {
    const newState = isFetching(true, { type: "TEST_ACTION" });
    expect(newState).toBe(true);
  });
});

describe("Errors reducer", () => {
  it("Should return the default state", () => {
    const defaultState = errorsReducer(null, { type: "TEST_ACTION" });
    expect(defaultState).toBe(null);
  });

  it("Should return a new state", () => {
    const type = "TEST_ACTION";
    const msg = "Test message";
    const errors = [{ type: type, message: msg }];
    const action = {
      type: `${type}_FAILED`,
      originalType: type,
      errorMessage: msg
    };

    const newState = errorsReducer([], action);
    expect(newState).toEqual(errors);
  });
});
