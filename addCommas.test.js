const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("1234", function () {
    const amount = addCommas(1234);
    expect(amount).toBe("1,234");
  });

  test("1000000", function () {
    const amount = addCommas(1000000);
    expect(amount).toBe("1,000,000");
  });

  test("9876543210", function () {
    const amount = addCommas(9876543210);
    expect(amount).toBe("9,876,543,210");
  });

  test("6", function () {
    const amount = addCommas(6);
    expect(amount).toBe("6");
  });

  test("-10", function () {
    const amount = addCommas(-10);
    expect(amount).toBe("-10");
  });


  test("-5678", function () {
    const amount = addCommas(-5678);
    expect(amount).toBe("-5,678");
  });

  test("12345.678", function () {
    const amount = addCommas(12345.678);
    expect(amount).toBe("12,345.678");
  });

  test("-3141592.65", function () {
    const amount = addCommas(-3141592.65);
    expect(amount).toBe("-3,141,592.65");
  });

  test("521", function () {
    const amount = addCommas(521);
    expect(amount).toBe("521");
  });

  test("-440", function () {
    const amount = addCommas(-440);
    expect(amount).toBe("-440");
  });

  test("0.52", function () {
    const amount = addCommas(0.52);
    expect(amount).toBe("0.52");
  });

});
