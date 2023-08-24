function stringReverse(phrase) {
    let arr = phrase.split("");
    let i = 0;
    let j = arr.length - 1;
  
    while (i < j) {
      if (!isAlphabet(arr[i])) {
        i++;
      } else if (!isAlphabet(arr[j])) {
        j--;
      } else {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
  
    return arr.join("");
  }
  
  function isAlphabet(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;}
  const str = "we're all we've got";
  console.log(stringReverse(str))