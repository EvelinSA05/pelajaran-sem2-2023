let bil = [1, 3, 5, 7, 9];

// function kali(num) {
//     return num * 2;
// }

let tambah = (bil) => bil + 2;

let hasil = bil.map(tambah);

hasil.forEach((e) => {
  console.log(e);
});

// console.log(tambah(4,2));

// console.log(kali(2));

// console.log(hasil);

let angka = (document.querySelector("#tampil").innerHTML = hasil);

let siswa = [
  { nama: "evelin", sekolah: "smkn 2 buduran", kelas: "xi-rpl" },
  { nama: "kirana", sekolah: "smkn 2 buduran", kelas: "xi-rpl" },
  { nama: "ulul", sekolah: "smkn 2 buduran", kelas: "xi-rpl" },
];

out =
  "<thead><tr><th>Nama</th><th>Sekolah</th><th>Kelas</th></tr></thead><tbody>";
has = siswa.map(
  (a) =>
    (out += `<tr><td>'${a.nama}</td><td>${a.sekolah}</td><td>${a.kelas}</td></tr>`)
);
out += "</tbody>";

document.querySelector("#tampil").innerHTML = out;

// siswa.map(stu);

// function stu(item) {
//     return [item.nama, item.sekolah, item.kelas];
// }

// let siswa2 = (siswa) => {
//     return siswa;
// };

// console.log(siswa2[1]);

// let hasil = bil.map(tambah);
