function perkalian(a, b) {
  return a * b;
}

console.log(perkalian(3, 5));

//Arrow Function

let kali = (a, b) => a * b;

console.log(kali(4, 2));

let zodiak = (bulan, tanggal) => {
  let hasil = "salah";
  if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
    if (bulan == 1) {
      hasil = "Capricorn";
      if (tanggal > 21) {
        hasil = "Aquarius";
      }
    }
    if (bulan == 2 && tanggal < 30) {
      hasil = "Aquarius";
      if (tanggal > 19) {
        hasil = "Pisces";
      }
    }
    if (bulan == 3) {
      hasil = "Pisces";
      if (tanggal > 20) {
        hasil = "Aries";
      }
    }
    if (bulan == 4) {
      hasil = "Aries";
      if (tanggal > 19) {
        hasil = "Taurus";
      }
    }
    if (bulan == 5) {
      hasil = "Taurus";
      if (tanggal > 20) {
        hasil = "Gemini";
      }
    }
    if (bulan == 6) {
      hasil = "Gemini";
      if (tanggal > 21) {
        hasil = "Cancer";
      }
    }
    if (bulan == 7) {
      hasil = "Cancer";
      if (tanggal > 23) {
        hasil = "Leo";
      }
    }
    if (bulan == 8) {
      hasil = "Leo";
      if (tanggal > 23) {
        hasil = "Virgo";
      }
    }
    if (bulan == 9) {
      hasil = "Virgo";
      if (tanggal > 22) {
        hasil = "Libra";
      }
    }
    if (bulan == 10) {
      hasil = "Libra";
      if (tanggal > 22) {
        hasil = "Scorpio";
      }
    }
    if (bulan == 11) {
      hasil = "Scorpio";
      if (tanggal > 22) {
        hasil = "Sagitarius";
      }
    }
    if (bulan == 12) {
      hasil = "Sagitarius";
      if (tanggal > 21) {
        hasil = "Capricorn";
      }
    }
  }
  return hasil;
};
console.log(zodiak(1, 1));

let lulus = (nilai) => {
  let hasil = "nilai tidak sesuai";
  if (nilai >= 0 && nilai <= 100) {
    hasil = "anda tidak lulus, nilai di bawah kkm";
    if (nilai >= 70) {
      hasil = "anda lulus, nilai di atas kkm";
    }
  }
  return hasil;
};
console.log(lulus(70));

let terbilang = (angka) => {
  const bil = {
    0: "nol",
    1: "satu",
    2: "dua",
    3: "tiga",
    4: "empat",
    5: "lima",
    6: "enam",
    7: "tujuh",
    8: "delapan",
    9: "sembilan",
  };

  if (angka < 100000000) {
    if (angka < 10) {
      return bil[angka];
    }

    if (angka < 20) {
      const belasan = Math.floor(angka / 10);
      const satuan = angka % 10;

      if (satuan === 0) {
        return "sepuluh";
      }
      if (satuan === 1) {
        return "sebelas";
      } else {
        return bil[satuan] + " belas ";
      }
    }

    if (angka < 100) {
      const puluhan = Math.floor(angka / 10);
      const satuan = angka % 10;

      if (satuan === 0) {
        return bil[puluhan] + " puluh ";
      } else {
        return bil[puluhan] + " puluh " + bil[satuan];
      }
    }

    if (angka < 1000) {
      const ratusan = Math.floor(angka / 100);
      const satuan = angka % 100;

      if (satuan === 0) {
        return bil[ratusan] + " ratus ";
      } else {
        return bil[ratusan] + " ratus " + terbilang(satuan);
      }
    }

    if (angka < 1000000) {
      const ribuan = Math.floor(angka / 1000);
      const satuan = angka % 1000;

      if (satuan === 0) {
        return terbilang(ribuan) + " ribu ";
      } else {
        return terbilang(ribuan) + " ribu" + terbilang(satuan);
      }
    }

    if (angka < 100000000) {
      const jutaan = Math.floor(angka / 1000000);
      const satuan = angka % 1000000;

      if (satuan === 0) {
        return terbilang(jutaan) + " juta ";
      } else {
        return terbilang(jutaan) + " juta " + terbilang(satuan);
      }
    }
  } else {
    return "angka terbilang belum dibuat, maksimal hingga 99 juta";
  }
};
console.log(terbilang(25000));

let prima = (bilangan) => {
  if (bilangan < 2) {
    return "bukan bilangan prima";
  }
  for (let i = 2; i <= Math.sqrt(bilangan); i++) {
    if (bilangan % i === 0) {
      return "bukan bilangan prima";
    }
  }
  return "bilangan prima";
};
console.log(prima(3));
