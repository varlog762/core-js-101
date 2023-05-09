// // *            '┌────┐\n'+
// // *  (6,4) =>  '│    │\n'+
// // *            '│    │\n'+
// // *            '└────┘\n'
// // *
// // *  (2,2) =>  '┌┐\n'+
// // *            '└┘\n'
// // *
// // *             '┌──────────┐\n'+
// // *  (12,3) =>  '│          │\n'+
// // *             '└──────────┘\n'
// // *
// // */
// function getRectangleString(width, height) {
//   const a = '┌',
//     b = '─',
//     c = '┐',
//     d = '│',
//     f = '└',
//     g = '┘';
//   let result = '';
//   for (let i = 1; i <= height; i += 1) {
//     for (let j = 1; j <= width; j += 1) {
//       if (i === 1 && j === 1) {
//         result += a;
//       } else if (i === 1 && j === width) {
//         result += c;
//       }  else if (i === height && j === 1) {
//         result += f;
//       } else if (i === height && j === width) {
//         result += g;
//       } else if (j === 1 || j === width) {
//         result += d;
//       } else if (i === 1 || i === height) {
//         result += b;
//       } else {
//         result += ' ';
//       }
//     }
//     result += '\n';
//   }
//   return result;
// }

// console.log(getRectangleString(6, 4));
