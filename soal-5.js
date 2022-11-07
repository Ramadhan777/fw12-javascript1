const changeA = (teks) => {
  if (typeof teks !== "string") {
    return "Teks harus berupa string";
  }

  let x = teks.length;
  let huruf = "";
  let kata = "";

  for (i = 0; i < x; i++) {
    if (teks[i] === "a") {
      huruf = "o";
    } else {
      huruf = teks[i];
    }

    kata += huruf;
  }
  return kata;
};

console.log(changeA("apa"));
