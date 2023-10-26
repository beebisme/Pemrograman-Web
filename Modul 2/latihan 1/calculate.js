// untuk mengakses elemen pada html agar dapat dilakukan beberapa aksi seperti mengambil nilai dari form dsb
const firstNum = document.getElementById("firstNumber");
const secondNum = document.getElementById("secondNumber");
const btnHitung = document.getElementById("btn-calculate");
const btnReset = document.getElementById("btn-reset");

// Fungsi untuk menghitung dan menampilkan hasil dalam alert
function calculate() {
  const bilanganPertama = parseFloat(firstNum.value);
  const bilanganKedua = parseFloat(secondNum.value);

  // isNaN merupakan function bawaan dari javascript untuk cek apakah value merupakan number atau bukan
  if (!isNaN(bilanganPertama) && !isNaN(bilanganKedua)) {
    const hasil = bilanganPertama + bilanganKedua;
    alert(`Hasil penjumlahan: ${hasil}`);
  } else {
    alert("Masukkan bilangan yang valid");
  }
}

// Fungsi untuk menghapus nilai dalam input form
function reset() {
  firstNum.value = "";
  secondNum.value = "";
}

// Tambahkan event listener untuk tombol hitung
btnHitung.addEventListener("click", calculate);

// Tambahkan event listener untuk tombol reset
btnReset.addEventListener("click", reset);
