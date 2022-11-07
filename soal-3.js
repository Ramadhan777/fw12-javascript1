const mtk = 100;
const bahasaIndonesia = 100;
const bahasaInggris = 100;
const ipa = 10;

if (mtk, bahasaIndonesia, bahasaInggris, ipa) {
  let grade = '';
  let result = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    
    if (result >= 90) {
      grade = "A";
    } else if (result >= 80 && result <= 89) {
      grade = "B";
    } else if (result >= 70 && result <= 79) {
      grade = "C";
    } else if (result >= 60 && result <= 69) {
      grade = "D";
    } else {
      grade = "E";
    }
    console.log(`Rata-rata = ${result}, \nGrade = ${grade}`);
} else {
  console.log("Semua nilai harus terisi")
}