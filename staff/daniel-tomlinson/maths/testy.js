/* console.log(
  "%cTESTY %cv0.0",
  "font-size: 26px",
  "font-weight: bold",
  "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,19,19,1) 34%, rgba(0,255,83,1) 100%);"
);

function describe(description, suite) {
  console.log(
    "%c" + description,
    "font-size: 12px; font-weight:bold; color: blue;"
  );

  suite();
}

function test(description, test) {
  console.log(
    "%c" + description,
    "font-size: 12px; font-weigth: bold; color: dodgerblue;"
  );

  test();
}

function check(a, b) {
  const description = "result %c" + result + ", expected %c + expected";

  if (a === b)
    console.log(description + "%c ok", "", "background-color: green;");
  else console.log(description + "%c ko", "backgroung-color: red;");
}
 */

// console.log(
//   "%cTESTY %cv0.0",
//   "color: white; font-size: 24px; font-weight: bold; background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) 100%);",
//   "color: black;"
//   //    "color: white; font-size: 24px;
//   //    font-weight: bold;
//   //    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,19,19,1) 34%, rgba(0,255,83,1) 100%);", "color: black;"
// );

// function describe(description, suite) {
//   console.log(
//     "%c" + description,
//     "font-size: 12px; font-weight:bold; color: blue;"
//   );

//   suite();
// }

// function test(description, test) {
//   console.log(
//     "%c" + description,
//     "font-size: 12px; font-weigth: bold; color: dodgerblue;"
//   );

//   test();
// }

// function check(a, b) {
//   const description = "result %c" + result + ", expected %c + expected";

//   if (a === b)
//     console.log(description + "%c ok", "", "background-color: green;");
//   else console.log(description + "%c ko", "backgroung-color: red;");
// }

// Manu Code

console.log(
  "%cTESTY👌%cv0.0",
  "color: white; font-size: 24px; font-weight: bold; background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) 100%);",
  "color: black;"
);

function describe(description, suite) {
  console.log(
    "%c" + description,
    "font-size: 14px; font-weight: bold; color: blue;"
  );

  suite();
}

function test(description, test) {
  console.log(
    "%c" + description,
    "font-size: 12px; font-weight: bold; color: dodgerblue;"
  );

  test();
}

function check(result, expected) {
  if (result === expected)
    console.log(
      "result %c" + result + "%c, expected %c" + expected + " %c ok ",
      "font-weight: bold;",
      "",
      "font-weight: bold;",
      "background-color: greenyellow;"
    );
  else
    console.log(
      "result %c" + result + "%c, expected %c" + expected + " %c ko ",
      "font-weight: bold;",
      "",
      "font-weight: bold;",
      "background-color: red; color: white;"
    );
}
