function divideAndSort(num) {
  if (typeof num !== "number") return console.log("Invalid! Must Be Number");
  console.log(
    `${num}`
      .split("0")
      .map((x) => x.split("").sort().join(""))
      .join("")
  );
}
divideAndSort(5956560159466056);
