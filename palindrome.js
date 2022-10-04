const cekPalindrom = (value) => {
  if (typeof value !== "string") return "Sentence must be string!";
  let result = true;
  let j = 0;
  for (let i = value.length - 1; i >= value.length / 2; i--) {
    // looping dari belakang sampai ketengah
    if (value[i] != value[j]) {
      result = false;
      break;
    }
    j++;
  }
  if (result) return `"${value}" is PALINDROME.`;
  return `"${value}" is NOT PALINDROME.`;
};
console.log(cekPalindrom("madam"));
