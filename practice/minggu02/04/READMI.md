
Callback ("Function yang dieksekusi setelah fungsi lain selesai dijalankan")
contoh;

function halo(nama) {
    alert('halo, ${nama}');
}

function tampilkanPesan(Callback) {
    const nama = prompt('Masukkan Nama :');
    Callback(nama);
}

tampilkanPesan(halo);

//contoh Diatas bisa disebut synchronnous Callback
