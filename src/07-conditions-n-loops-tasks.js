/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  const x = num % 3;
  const y = num % 5;
  if (x === 0 && y === 0) {
    return 'FizzBuzz';
  }
  if (x === 0) {
    return 'Fizz';
  }
  if (y === 0) {
    return 'Buzz';
  }

  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return n !== 1 ? n * getFactorial(n - 1) : 1;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }
  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const coord1X1 = rect1.top;
  const coord1X2 = rect1.top + rect1.width;
  const coord1Y1 = rect1.left;
  const coord1Y2 = rect1.left + rect1.height;
  const coord2X1 = rect2.top;
  const coord2X2 = rect2.top + rect2.width;
  const coord2Y1 = rect2.left;
  const coord2Y2 = rect2.left + rect2.height;
  if (
    coord1X1 < coord2X1
    && coord2X1 < coord1X2
    && coord1Y1 < coord2Y1
    && coord2Y1 < coord1Y2
  ) {
    return true;
  }
  if (
    coord1X1 < coord2X2
    && coord2X2 < coord1X2
    && coord1Y1 < coord2Y2
    && coord2Y2 < coord1Y2
  ) {
    return true;
  }
  if (
    coord2X1 < coord1X1
    && coord1X1 < coord2X2
    && coord2Y1 < coord1Y1
    && coord1Y1 < coord2Y2
  ) {
    return true;
  }
  if (coord1X1 === coord2X1) {
    return true;
  }
  return false;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const dX = point.x;
  const dY = point.y;
  const circleXmin = circle.center.x;
  const circleXmax = circle.center.x + circle.radius;
  const circleYmin = circle.center.y;
  const circleYmax = circle.center.y + circle.radius;
  if (
    (dX - circle.center.x) ** 2 + (dY - circle.center.y) ** 2
    < circle.radius ** 2
  ) {
    if (
      dX >= circleXmin
      && dX < circleXmax
      && dY >= circleYmin
      && dY < circleYmax
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    let count = 0;
    for (let j = 0; j < str.length; j += 1) {
      if (char === str[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      return char;
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  const smallerNumber = Math.min(a, b);
  const largerNumber = Math.max(a, b);
  return `${startBracket}${smallerNumber}, ${largerNumber}${endBracket}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  const reverseText = str.split('').reverse().join('');
  return reverseText;
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = num.toString();
  const reversedString = str.split('').reverse().join('');
  return reversedString * 1;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let sum = 0;
  const arr = String(ccn).split('').map(Number);
  const arr1 = arr.slice(0, arr.length - 1);
  const arrTwos = [];
  const arrLeft = [];
  for (let i = arr1.length - 1; i >= 0; i -= 2) {
    arrTwos.push(arr1[i]);
  }
  for (let c = arr.length - 3; c >= 0; c -= 2) {
    arrLeft.push(arr[c]);
  }
  const reversedArrTwos = arrTwos;
  const reversedDoubles = [];
  for (let j = 0; j <= reversedArrTwos.length - 1; j += 1) {
    reversedDoubles.push(reversedArrTwos[j] * 2);
  }
  const strReversedDoubles = reversedDoubles.join('');
  const arrRevDoubles = strReversedDoubles.split('');
  const numArrRevDoub = arrRevDoubles.map((string) => parseInt(string, 10));
  const sumD = numArrRevDoub.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const sumLeft = arrLeft.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  sum = sumD + sumLeft;
  let checkDigit = 10 - (sum % 10);
  if (checkDigit === 10) {
    checkDigit = 0;
  }
  if (checkDigit === arr[arr.length - 1]) {
    return true;
  }
  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const arrNum = String(num).split('').map(Number);
  let firstSum = 0;
  for (let i = 0; i <= arrNum.length - 1; i += 1) {
    firstSum += arrNum[i];
  }
  if (firstSum > 9) {
    const arrFirstSum = String(firstSum).split('').map(Number);
    let secondSum = 0;
    for (let j = 0; j <= arrFirstSum.length - 1; j += 1) {
      secondSum += arrFirstSum[j];
    }
    return secondSum;
  }
  return firstSum;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const stack = [];
  const openingBrackets = ['[', '(', '{', '<'];
  const closingBrackets = [']', ')', '}', '>'];

  for (let i = 0; i < str.length; i += 1) {
    const currentChar = str[i];
    if (openingBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closingBrackets.includes(currentChar)) {
      const lastOpeningBracket = stack.pop();
      const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)];
      if (lastOpeningBracket !== correspondingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const splitStrings = (input, sep = '/') => input.map((i) => i.split(sep));
  const elAt = (i) => (input) => input[i];
  const rotate = (input) => input[0].map((e, i) => input.map(elAt(i)));
  const allElementsEqual = (arr) => arr.every((e) => e === arr[0]);
  const commonPath = (input, sep = '/') => rotate(splitStrings(input, sep))
    .filter(allElementsEqual)
    .map(elAt(0))
    .join(sep);
  if (commonPath(pathes).length >= 2) {
    return `${commonPath(pathes)}/`;
  }
  if (
    splitStrings(pathes)[0][0] === ''
    && splitStrings(pathes)[1][0] === ''
    && splitStrings(pathes)[2][0] === ''
  ) {
    return '/';
  }

  return commonPath(pathes);
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const m1NumRows = m1.length;
  const m1NumCols = m1[0].length;
  const m2NumCols = m2[0].length;
  const m = new Array(m1NumRows); // initialize array of rows
  for (let r = 0; r < m1NumRows; r += 1) {
    m[r] = new Array(m2NumCols); // initialize the current row
    for (let c = 0; c < m2NumCols; c += 1) {
      m[r][c] = 0; // initialize the current cell
      for (let i = 0; i < m1NumCols; i += 1) {
        m[r][c] += m1[r][i] * m2[i][c];
      }
    }
  }
  return m;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const arr = position;
  const horizont1 = arr[0];
  const horizont2 = arr[1];
  const horizont3 = arr[2];
  const vertical1 = [arr[0][0], arr[1][0], arr[2][0]];
  const vertical2 = [arr[0][1], arr[1][1], arr[2][1]];
  const vertical3 = [arr[0][2], arr[1][2], arr[2][2]];
  const diagonal1 = [arr[0][0], arr[1][1], arr[2][2]];
  const diagonal2 = [arr[0][2], arr[1][1], arr[2][0]];
  const isLineH1 = horizont1.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineH2 = horizont2.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineH3 = horizont3.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineV1 = vertical1.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineV2 = vertical2.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineV3 = vertical3.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineD1 = diagonal1.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  const isLineD2 = diagonal2.filter(
    (number, index, numbers) => numbers.indexOf(number) !== index,
  );
  if (isLineH1.length >= 2 && isLineH1[0] !== undefined) {
    return isLineH1[0];
  }
  if (isLineH2.length >= 2 && isLineH2[0] !== undefined) {
    return isLineH2[0];
  }
  if (isLineH3.length >= 2 && isLineH3[0] !== undefined) {
    return isLineH3[0];
  }
  if (isLineV1.length >= 2 && isLineV1[0] !== undefined) {
    return isLineV1[0];
  }
  if (isLineV2.length >= 2 && isLineV2[0] !== undefined) {
    return isLineV2[0];
  }
  if (isLineV3.length >= 2 && isLineV3[0] !== undefined) {
    return isLineV3[0];
  }
  if (isLineD1.length >= 2 && isLineD1[0] !== undefined) {
    return isLineD1[0];
  }
  if (isLineD2.length >= 2 && isLineD2[0] !== undefined) {
    return isLineD2[0];
  }

  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
