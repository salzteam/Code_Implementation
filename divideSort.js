function divideAndSort(num) {
  console.log(
    `${num}`
      .split("0")
      .map((x) => x.split("").sort().join(""))
      .join("")
  );
}
divideAndSort(5956560159466056);
