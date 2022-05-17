
Dalam ilmu komputer, I/O asinkron (juga I/O non-sekuensial) adalah bentuk pemrosesan input/output yang memungkinkan pemrosesan lain untuk dilanjutkan sebelum transmisi selesai.

Operasi input dan output (I/O) pada komputer bisa sangat lambat dibandingkan dengan pemrosesan data. Perangkat I/O dapat menggabungkan perangkat mekanis yang harus bergerak secara fisik, seperti hard drive yang mencari trek untuk dibaca atau ditulis; ini sering kali lebih lambat daripada peralihan arus listrik. Misalnya, selama operasi disk yang membutuhkan waktu sepuluh milidetik, prosesor yang memiliki clock satu gigahertz dapat melakukan sepuluh juta siklus pemrosesan instruksi.

#Synchronous Vs Asynchronous
Eksekusi sinkron biasanya mengacu pada eksekusi kode secara berurutan. Eksekusi asinkron mengacu pada eksekusi yang tidak berjalan dalam urutan yang muncul dalam kode. Dalam contoh berikut, operasi sinkron menyebabkan peringatan diaktifkan secara berurutan. Dalam operasi async, sementara alert(2) tampaknya dieksekusi kedua, ternyata tidak.

Contoh Sinkron: 1,2,3
alert(1);
alert(2);
alert(3);

bila dijalankan kodenya maka yang akan keluar adalah alert yang paling atas dulu.

alert(1);
setTimeout(() => alert(2), 0);
alert(3);

tapi bila asinkronus yang akan keluar gk berurutan ( 1, 3, 2 )

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

contoh Diatas bisa disebut synchronnous Callback


Promise / janji
promise adalah object yang merepresentasikan keberasilan / kegagalan sebuah event yg asynchronous di masa yg akan datang.
janji (terpenuhi / ingkar)
states / keadaan ( fulfilled(terpenuhi) / rejected(ingkar) / pending)
fungsi callback (resolve / reject / finally)
aksi (then / cath)

contoh Promise

let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if( ditepati ) {
        resolve('janji telah ditepati!');
    } else {
        reject('ingkar janji..');
    }
});

janji1
.then(response => console.log('ok! : ' + response))
.catch(response => console.log('not ok! : ' + response));
