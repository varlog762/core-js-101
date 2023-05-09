// /**
//  * Returns playid card id.
//  *
//  * Playing cards inittial deck inclides the cards in the following order:
//  *
//  *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
//  *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
//  *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
//  *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
//  *
//  * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
//  * Function returns the zero-based index of specified card in the initial deck above.
//  *
//  * @param {string} value
//  * @return {number}
//  *
//  * @example
//  *   'A♣' => 0
//  *   '2♣' => 1
//  *   '3♣' => 2
//  *     ...
//  *   'Q♠' => 50
//  *   'K♠' => 51
//  */
// function getCardId(value) {
//   let firstIndex = 0,
//     secondIndex = 0;
//   if (value.length === 3) {
//     firstIndex = 10;
//   } else {
//     switch (value[0]) {
//       case 'A':
//         firstIndex = 0;
//         break;
//       case 'J':
//         firstIndex = 10;
//         break;
//       case 'Q':
//         firstIndex = 11;
//         break;
//       case 'K':
//         firstIndex = 12;
//         break;
//       default:
//         firstIndex = +value[0] - 1;
//         break;
//     }
//   }
//   switch (value[value.length - 1]) {
//     case '♣':
//       secondIndex = 0;
//       break;
//     case '♦':
//       secondIndex = 13;
//       break
//     case '♥':
//       secondIndex = 26;
//       break
//     case '♠':
//       secondIndex = 39;
//       break
//   }
//   return firstIndex + secondIndex;

// }

// console.log(getCardId('A♦'));
