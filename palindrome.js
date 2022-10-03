const cekPalindrom = (value) => {
  if (typeof value !== "string") return console.log("Sentence must be string!");
  let result = true;
  let j = 0;
  for (let i = value.length - 1; i > value.length / 2; i--) {
    if (value[i] != value[j]) {
      result = false;
      break;
    }
    j++;
  }
  if (result) return console.log(`"${value}" is PALINDROME.`);
  console.log(`"${value}" is NOT PALINDROME.`);
};
cekPalindrom("malam");
