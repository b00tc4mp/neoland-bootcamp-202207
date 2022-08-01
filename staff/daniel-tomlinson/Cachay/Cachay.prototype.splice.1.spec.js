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

describe("Splice 1", () => {
  it("insert at endex 1", () => {
    const months = new Cachay("Jan", "Mar", "Apr", "May");

    const result = months.splice1(1, 0, "Feb");

    //expected ["Jan", "Feb", "March", "April", "May"]
    //expected result []

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(0);
    expect(result[0]).to.equal(undefined);

    expect(months.length).to.equal(5);
    expect(months[0]).to.equal("Jan");
    expect(months[1]).to.equal("Feb");
    expect(months[2]).to.equal("Mar");
    expect(months[3]).to.equal("Apr");
    expect(months[4]).to.equal("May");
    expect(months[5]).to.equal(undefined);
  });

  it("insert at endex 1", () => {
    const months = new Cachay(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jun",
      "Jun",
      "Jul"
    );

    const result = months.splice1(4, 2, "May");

    //expected months ["Jan", "Feb", "March", "April", "May", "Jun", "Jul"]
    //expected result ["Jun", "Jun"]

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(2);
    expect(result[0]).to.equal("Jun");
    expect(result[1]).to.equal("Jun");
    expect(result[2]).to.equal(undefined);

    expect(months.length).to.equal(7);
    expect(months[0]).to.equal("Jan");
    expect(months[1]).to.equal("Feb");
    expect(months[2]).to.equal("Mar");
    expect(months[3]).to.equal("Apr");
    expect(months[4]).to.equal("May");
    expect(months[5]).to.equal("Jun");
    expect(months[6]).to.equal("Jul");
    expect(months[7]).to.equal(undefined);
  });

  it("negative count", () => {
    const letters = new Cachay("A", "B", "B", "B", "B", "E", "F");

    const result = letters.splice1(2, 3, "C", "D");

    // expected A, B , C , D , E , F
    // expected B, B, B

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(3);
    expect(result[0]).to.equal("B");
    expect(result[1]).to.equal("B");
    expect(result[2]).to.equal("B");
    expect(result[3]).to.equal(undefined);

    expect(letters.length).to.equal(6);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal("C");
    expect(letters[3]).to.equal("D");
    expect(letters[4]).to.equal("E");
    expect(letters[5]).to.equal("F");
    expect(letters[6]).to.equal(undefined);
  });

  it("no count", () => {
    const letters = new Cachay("A", "B", "C", "D", "E", "F");

    const result = letters.splice1(2);

    // expected A, B,
    // expected C , D , E , F

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(4);
    expect(result[0]).to.equal("C");
    expect(result[1]).to.equal("D");
    expect(result[2]).to.equal("E");
    expect(result[3]).to.equal("F");
    expect(result[4]).to.equal(undefined);

    expect(letters.length).to.equal(2);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal(undefined);
  });

  it("negative start", () => {
    const letters = new Cachay("A", "B", "B", "B", "B", "E", "F");

    const result = letters.splice1(-5, 3, "C", "D");

    // expected A, B , C , D , E , F
    // expected B, B, B

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(3);
    expect(result[0]).to.equal("B");
    expect(result[1]).to.equal("B");
    expect(result[2]).to.equal("B");
    expect(result[3]).to.equal(undefined);

    expect(letters.length).to.equal(6);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal("C");
    expect(letters[3]).to.equal("D");
    expect(letters[4]).to.equal("E");
    expect(letters[5]).to.equal("F");
    expect(letters[6]).to.equal(undefined);
  });

  it("count greater than array length", () => {
    const letters = new Cachay("A", "B", "B", "B", "B", "E", "F");

    const result = letters.splice1(2, 10, "C", "D");

    // expected A, B , C , D
    // expected B, B, B

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(5);
    expect(result[0]).to.equal("B");
    expect(result[1]).to.equal("B");
    expect(result[2]).to.equal("B");
    expect(result[3]).to.equal("E");
    expect(result[4]).to.equal("F");
    expect(result[5]).to.equal(undefined);

    expect(letters.length).to.equal(4);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal("C");
    expect(letters[3]).to.equal("D");
    expect(letters[4]).to.equal(undefined);
  });

  it("negative start less than 0", () => {
    const letters = new Cachay("A", "A", "B", "B", "C", "D");

    const result = letters.splice1(-10, 3, "A");

    // expected A, B , C , D
    // expected A, A

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(3);
    expect(result[0]).to.equal("A");
    expect(result[1]).to.equal("A");
    expect(result[2]).to.equal("B");
    expect(result[3]).to.equal(undefined);

    expect(letters.length).to.equal(4);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal("C");
    expect(letters[3]).to.equal("D");
    expect(letters[4]).to.equal(undefined);
  });

  it("start greater than array length", () => {
    const letters = new Cachay("A", "B", "C", "D", "E", "F");

    const result = letters.splice1(10, 3, "G", "H");

    // expected A, B , C , D, E, F, G, H
    // expected _

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(0);
    expect(result[0]).to.equal(undefined);

    expect(letters.length).to.equal(8);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal("C");
    expect(letters[3]).to.equal("D");
    expect(letters[4]).to.equal("E");
    expect(letters[5]).to.equal("F");
    expect(letters[6]).to.equal("G");
    expect(letters[7]).to.equal("H");
    expect(letters[8]).to.equal(undefined);
  });

  it("count without input", () => {
    const letters = new Cachay("A", "B", "B", "B", "B", "C", "D");

    const result = letters.splice1(2, 3);

    // expected A, B , C , D
    // expected B, B, B

    // expect(result).to.be.instanceof(Cachay);
    expect(result.length).to.equal(3);
    expect(result[0]).to.equal("B");
    expect(result[1]).to.equal("B");
    expect(result[2]).to.equal("B");
    expect(result[5]).to.equal(undefined);

    expect(letters.length).to.equal(4);
    expect(letters[0]).to.equal("A");
    expect(letters[1]).to.equal("B");
    expect(letters[2]).to.equal("C");
    expect(letters[3]).to.equal("D");
    expect(letters[4]).to.equal(undefined);
  });
});
