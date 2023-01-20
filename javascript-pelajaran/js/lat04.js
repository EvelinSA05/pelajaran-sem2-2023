function coba(a) {
    console.log("eventlistener");
}

klik.addEventListener("click",coba);
klik.onclick = function (a) {  
    alert (6)
};

// zodiak(5, 4);

// function hasil() {
//     let a = document.querySelector("#tanggal").value;
//     tampil.innerHTML = a;
// }

let tampil = document.querySelector("#belajar");

function zodiak() {
    bulan = document.getElementById("bulan").value;
    tanggal = document.getElementById("tanggal").value;

    let hasil = "salah";
    if (bulan > 0 && bulan < 13 && tanggal > 0 && tanggal < 32) {
        hasil = "zodiak belum dibuat";
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
    console.log(hasil);
    tampil.innerHTML = hasil;
}

lulus();
function lulus(nilai) {
    nilai = document.getElementById("nilai").value;
    let hasil = "nilai tidak sesuai";
    if (nilai >= 0 && nilai <= 100) {
        hasil = "Anda Tidak Lulus, Nilai di Bawah KKM";
        if (nilai >= 70) {
            hasil = "Anda Lulus, Nilai di Atas KKM";
        }
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}

function terbilang(angka) {
    angka = document.getElementById("angka").value;
    var bil = {0:'Nol', 1:'Satu', 2:'Dua', 3:'Tiga', 4:'Empat', 5:'Lima', 6:'Enam', 7:'Tujuh', 8:'Delapan', 9:'Sembilan'};
    
    if (angka < 100000000) {
    
        if (angka < 10) {
            return bil[angka];
        }

        if (angka < 20) {
            const belasan = Math.floor(angka/10);
            const satuan = angka % 10;

            if (satuan === 0) {
                return 'Sepuluh' ; 
            }
            if (satuan === 1) {
                return 'Sebelas';
            }else{
                return bil[satuan] + ' Belas';
            }
        }

        if (angka < 100) {
            const puluhan = Math.floor(angka/10);
            const satuan = angka % 10;

            if (satuan === 0) {
                return bil[puluhan] + ' Puluh ';
            }else{
                return bil[puluhan] + ' Puluh ' + bil[satuan];
            }
        }

        if (angka < 1000) {
            const ratusan = Math.floor(angka/100);
            const satuan = angka % 100;

            if (satuan === 0) {
                return bil[ratusan] + ' Ratus ';
            }else{
                return bil[ratusan] + ' Ratus ' + terbilang(satuan);
            }
        }

        if (angka < 1000000) {
            const ribuan = Math.floor(angka/1000);
            const satuan = angka%1000;

            if (satuan === 0) {
                return terbilang(ribuan) + ' Ribu ';
            } else {
                return terbilang(ribuan) + ' Ribu ' + terbilang(satuan);  
            }
        }

        if (angka < 100000000) {
            const jutaan = Math.floor(angka/1000000);
            const satuan = angka%1000000;

            if (satuan === 0) {
                return terbilang(jutaan) + ' Juta ';
            }else{
                return terbilang(jutaan) + ' Juta ' + terbilang(satuan);
            }
        }
        
    }else{
        return "Angka Terbilang Belum Dibuat, Maksimal Hingga 99 Juta";
    }
}
//perintah menampilkan return ada di index.html

function prima(bilangan) {
    bilangan = document.getElementById("bilangan").value;
    if (bilangan < 2) {
        return 'Bukan Bilangan Prima';
    }

    for (let i = 2; i <= Math.sqrt(bilangan); i++){
        if (bilangan % i === 0) {
            return 'Bukan Bilangan Prima';
        } 
    }
    return 'Bilangan Prima';
}
//perintah menampilkan return ada di index.html