let hitung = confirm("mau menghitung biaya pengiriman?");

while (hitung === true) {
  let beratBarang, biaya;
  beratBarang = parseInt(prompt("Masukkan Berat Barang Berupa Kilogram: "));

  if (beratBarang > 0) {
    biaya = biayaPengiriman(beratBarang);
    alert(`Total biaya dari ${beratBarang} Kg adalah ${biaya} Rupiah `);
  } else {
    alert("Tidak boleh kurang dari 0 kg");
  }

  function biayaPengiriman(weight) {
    let totalBiaya;

    if (weight == 1) {
      totalBiaya = 10000;
    } else if (weight <= 5) {
      totalBiaya = 7500 + biayaPengiriman(weight - 1);
    } else {
      totalBiaya = 5000 + biayaPengiriman(weight - 1);
    }
    return totalBiaya;
  }
  hitung = confirm("Mau menghitung lagi?");

}
alert("Terima kasih");
