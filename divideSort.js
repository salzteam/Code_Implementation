function divideAndSort(num) {
  if (typeof num !== "number") return "Invalid! Must Be Number";
  return `${parseInt(num)}`
    .split("0")
    .map((x) => x.split("").sort().join(""))
    .join("");
}
console.log(divideAndSort(5956560159466056));
