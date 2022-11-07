const isPalindrome = (teks) => {
  if (teks.length <= 2) {
    return "Teks harus lebih dari 2 huruf";
  }

  let x = teks.length - 1;

  let hasil = "";

  for (i = 0; i <= x; x--) {
    hasil = hasil + teks[x];
  }

  const check = hasil === teks;

  if (check) {
    return "Palindrome";
  } else {
    return "Bukan Palindrome";
  }
};

