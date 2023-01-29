let buah = ['mangga', 'jeruk', 'jambu', 'sawo', 'duren'];

console.log(buah);

// document.querySelector("#tampil").innerHTML = buah[1];

buah.forEach(i => {
    console.log(i)
});

// let a = (buah) => buah;

// console.log(a(buah));

// buah.forEach({
//     console.log(buah);
// });

// buah.forEach(
//     a => {
//         console.log(a);   
//     }
// );

// function a(buah) {
//     console.log(buah);
// }
// a(buah);

// function kali(a,b) {
//     return a * b;
// }


// function tampil(a) {
//     return a;
// }

let kali = (a,b) => {
    return a*b;
};

let tampil = a=> {
    console.log(a);
}

console.log(kali(2,3));
tampil("belajar");

// let siswa = {
//     nama : ['evelin', 'lin'],
//     sekolah : 'smkn 2 buduran',
//     kelas : 'xi-rpl'
// };

// console.log(siswa);
// console.log(siswa.nama);

let siswa = '{"Siswa" : ['+
'{"nama" : "Evelin", "sekolah" : "SMKN 2 BUDURAN", "kelas" : "XI-RPL"}]}';

const obj = JSON.parse(siswa);
// console.log(obj);
// console.log(obj.Siswa[1].nama);

// document.querySelector("#tampil").innerHTML = obj.Siswa[0].nama;

obj.Siswa.forEach(i => {
    console.log(i);
    document.querySelector("#tampil").innerHTML += i.nama + "" + i.sekolah;
});

// siswa.forEach(siswa => {
//     console.log(siswa);
// });

// siswa.forEach(siswa(siswa){
//     console.log(siswa)
// });



