/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @returns An array containing the elements that were deleted.
 */
// splice(start: number, deleteCount?: number): T[];
/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @param items Elements to insert into the array in place of the deleted elements.
 * @returns An array containing the elements that were deleted.
 */
// splice(start: number, deleteCount: number, ...items: T[]): T[];

describe("Splice 2", () => {
  test("insert at endex 1", () => {
    const months = ["Jan", "Mar", "Apr", "May"];

    const result = spliceTwo(months, 1, 0, "Feb");

    //expected ["Jan", "Feb", "March", "April", "May"]
    //expected result []

    check(result instanceof Array, true);
    check(result.length, 0);
    check(result[0], undefined);

    check(months.length, 5);
    check(months[0], "Jan");
    check(months[1], "Feb");
    check(months[2], "Mar");
    check(months[3], "Apr");
    check(months[4], "May");
    check(months[5], undefined);
  });

  test("insert at endex 1", () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jun", "Jun", "Jul"];

    const result = spliceTwo(months, 4, 2, "May");

    //expected months ["Jan", "Feb", "March", "April", "May", "Jun", "Jul"]
    //expected result ["Jun", "Jun"]

    check(result instanceof Array, true);
    check(result.length, 2);
    check(result[0], "Jun");
    check(result[1], "Jun");
    check(result[2], undefined);

    check(months.length, 7);
    check(months[0], "Jan");
    check(months[1], "Feb");
    check(months[2], "Mar");
    check(months[3], "Apr");
    check(months[4], "May");
    check(months[5], "Jun");
    check(months[6], "Jul");
    check(months[7], undefined);
  });

  test("negative count", () => {
    const letters = ["A", "B", "B", "B", "B", "E", "F"];

    const result = spliceTwo(letters, 2, 3, "C", "D");

    // expected A, B , C , D , E , F
    // expected B, B, B

    check(result instanceof Array, true);
    check(result.length, 3);
    check(result[0], "B");
    check(result[1], "B");
    check(result[2], "B");
    check(result[3], undefined);

    check(letters.length, 6);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], "C");
    check(letters[3], "D");
    check(letters[4], "E");
    check(letters[5], "F");
    check(letters[6], undefined);
  });

  test("no count", () => {
    const letters = ["A", "B", "C", "D", "E", "F"];

    const result = spliceTwo(letters, 2);

    // expected A, B
    // expected  , C , D , E , F

    check(result instanceof Array, true);
    check(result.length, 4);
    check(result[0], "C");
    check(result[1], "D");
    check(result[2], "E");
    check(result[3], "F");
    check(result[4], undefined);

    check(letters.length, 2);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], undefined);
  });

  test("negative start", () => {
    const letters = ["A", "B", "B", "B", "B", "E", "F"];

    const result = spliceTwo(letters, -5, 3, "C", "D");

    // expected A, B , C , D , E , F
    // expected B, B, B

    check(result instanceof Array, true);
    check(result.length, 3);
    check(result[0], "B");
    check(result[1], "B");
    check(result[2], "B");
    check(result[3], undefined);

    check(letters.length, 6);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], "C");
    check(letters[3], "D");
    check(letters[4], "E");
    check(letters[5], "F");
    check(letters[6], undefined);
  });

  test("count greater than array length", () => {
    const letters = ["A", "B", "B", "B", "B", "E", "F"];

    const result = splice(letters, 2, 10, "C", "D");

    // expected A, B , C , D
    // expected B, B, B

    check(result instanceof Array, true);
    check(result.length, 5);
    check(result[0], "B");
    check(result[1], "B");
    check(result[2], "B");
    check(result[3], "E");
    check(result[4], "F");
    check(result[5], undefined);

    check(letters.length, 4);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], "C");
    check(letters[3], "D");
    check(letters[4], undefined);
  });

  test("negative start less than 0", () => {
    const letters = ["A", "A", "B", "B", "C", "D"];

    const result = splice(letters, -10, 3, "A");

    // expected A, B , C , D
    // expected A, A

    check(result instanceof Array, true);
    check(result.length, 3);
    check(result[0], "A");
    check(result[1], "A");
    check(result[2], "B");
    check(result[3], undefined);

    check(letters.length, 4);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], "C");
    check(letters[3], "D");
    check(letters[4], undefined);
  });

  test("start greater than array length", () => {
    const letters = ["A", "B", "C", "D", "E", "F"];

    const result = splice(letters, 10, 3, "G", "H");

    // expected A, B , C , D, E, F, G, H
    // expected _

    check(result instanceof Array, true);
    check(result.length, 0);
    check(result[0], undefined);

    check(letters.length, 8);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], "C");
    check(letters[3], "D");
    check(letters[4], "E");
    check(letters[5], "F");
    check(letters[6], "G");
    check(letters[7], "H");
    check(letters[8], undefined);
  });

  test("count without input", () => {
    const letters = ["A", "B", "B", "B", "B", "C", "D"];

    const result = splice(letters, 2, 3);

    // expected A, B , C , D
    // expected B, B, B

    check(result instanceof Array, true);
    check(result.length, 3);
    check(result[0], "B");
    check(result[1], "B");
    check(result[2], "B");
    check(result[5], undefined);

    check(letters.length, 4);
    check(letters[0], "A");
    check(letters[1], "B");
    check(letters[2], "C");
    check(letters[3], "D");
    check(letters[4], undefined);
  });
});
