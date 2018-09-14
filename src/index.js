/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var checked = []; // список с индексами, которые проверяли 
  var count = 0
  var arr = preferences;

  for (var k = 0; k + 3 <= arr.length; k += 1) {
      var first = getNext(k);
      var a = arr[first];
      var b = arr[--a];
      var c = arr[--b];
      if (first == --c && a != b && a != c && b != c) {
          checked.push(first);
          checked.push(a--);
          checked.push(b--);
          count++;
      }
  }
  function getNext(n) {
      while (checked.includes(n)) n++
          return n;
  }
  return (count);
};
