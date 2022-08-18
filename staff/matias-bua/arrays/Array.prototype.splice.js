describe("array.prototype.splice", () => {
  test("insert at index", () => {
    const months = ["Jan", "March", "April", "June"];

    const result = months.splice(1, 0, "feb");

    check(result instanceof Array, true);
    check(result.length, 0);

    check(months.length, 5);
    check(months[0], "jan");
    check(months[1], "feb");
    check(months[2], "mar");
    check(months[3], "apr");
    check(months[4], "jun"s);
  });
});
