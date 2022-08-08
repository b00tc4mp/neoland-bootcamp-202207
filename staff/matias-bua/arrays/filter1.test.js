describe("filter", function () {
  test("words character filter", function () {
    const words = [
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present",
    ];
    const wordfiveC = filter(words, function (person) {
      return words.length > 5;
    });
    check(wordfiveC.length > 5);
    check(wordfiveC[0], words[0]);
    check(wordfiveC[1], words[1]);
    check(wordfiveC[2], words[2]);
    check(wordfiveC[3], words[3]);
    check(wordfiveC[4], words[4]);
  });
  return wordfiveC;
});

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
