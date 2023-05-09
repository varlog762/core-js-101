// // // // // // /**
// // // // //  * Tries to convert value to number and returns it if conversion was successful;
// // // // // * otherwise returns default value passed as a second argument.
// // // // // *
// // // // // * @param {any} value
// // // // // * @param {any} def
// // // // // * @return {number}
// // // // // *
// // // // // * @example
// // // // // *   toNumber(null, 0) => 0
// // // // // *   toNumber('test', 0) => 0
// // // // // *   toNumber('1', 0) => 1
// // // // // *   toNumber(42, 0) => 42
// // // // // *   toNumber(new Number(42), 0) => 42
// // // // // */
// function toNumber(value, def) {
//     let result;
//     if (value === undefined) {
//       result = def;
//     } else if (isFinite(+value)) {
//       result = +value;
//     } else {
//       result = def;
//     }
//     return result;
//   }

// console.log(toNumber('test', 0));
// // console.log(typeof +undefined);
