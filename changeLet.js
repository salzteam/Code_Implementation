const changeText = (input) => {
  if (typeof input !== "string") return "Salah memasukan kalimat!";
  let value = [];
  let result = "";
  for (let i = 0; i < input.length; i++) {
    value[i] = input[i];
  } // Loop Pertama untuk merubah string teks menjadi array
  for (let i = 0; i < value.length; i++) {
    if (value[i] == "a") {
      value[i] = "o";
    }
    result += value[i];
  } // Loop Kedua untuk merubah value indeks "a" menjadi "o"
  console.log(result);
};
changeText("Jakarta");
