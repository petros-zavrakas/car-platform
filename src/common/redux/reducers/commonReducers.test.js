import { isFetching, errorMessage } from "./commonReducers";

describe("isFetching reducer", () => {
  it("Should return the default state", () => {
    const defaultState = isFetching(undefined, { type: 'TEST_ACTION'});
    expect(defaultState).toBe(false);
  });

  it("Should return a new state", () => {
    const newState = isFetching(true, { type: 'TEST_ACTION'});
    expect(newState).toBe(true);
  });
});

describe("errorMessage reducer", () => {
  it("Should return the default state", () => {
    const defaultState = errorMessage(null, { type: 'TEST_ACTION'});
    expect(defaultState).toBe(null);
  });

  it("Should return a new state", () => {
    const error = "testing error";
    const action = {
      type: "TEST_FAILED",
      message: error
    };
    const newState = errorMessage(undefined, action);
    expect(newState).toEqual(error);
  });
});
