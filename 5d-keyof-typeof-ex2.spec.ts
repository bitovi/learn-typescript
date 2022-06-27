import { strict as assert } from "assert";

import { getColorValue, ColorsToHex } from "./5d-keyof-typeof-ex2";

describe("Keyof Typeof Exercise 2", () => {
  it("gets dino colors", () => {
    assert.equal(getColorValue("red"), ColorsToHex.red);
    assert.equal(getColorValue("green"), ColorsToHex.green);
    assert.equal(getColorValue("blue"), ColorsToHex.blue);
  });
});
