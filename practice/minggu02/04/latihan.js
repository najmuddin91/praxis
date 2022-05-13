// Sinkron dan Asinkron
// Contoh Sinkron
// alert(1);
// alert(2);
// alert(3);
// yang akan keluar adalah alert yang paling atas terlebih dahulu.(berurutan)

// Contoh Asinkron
// alert(1);
// setTimeout(() => alert(2), 0);
// alert(3);
//yang akan keluar adalah alert tidak berurutan

// Pemblokiran vs Non pemblokiran
//Pemblokiran 1,...2
// alert(1);
// var value = localStorage.getItem('foo');
// alert(2);

//Non pemblokiran 1, 3, ....2
// alert(1);
// fetch('example.com').then(() => alert(2));
// alert(3);

// Callback ("Function yang dieksekusi setelah fungsi lain selesai dijalankan")
function halo(nama) {
    alert('halo, ${nama}');
}

function tampilkanPesan(Callback) {
    const nama = prompt('Masukkan Nama :');
    Callback(nama);
}

tampilkanPesan(halo);

contoh sederhana Diatas bisa disebut synchronnous Callback