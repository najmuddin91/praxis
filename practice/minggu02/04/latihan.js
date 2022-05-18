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
// function halo(nama) {
//     alert('halo, ${nama}');
// }

// function tampilkanPesan(Callback) {
//     const nama = prompt('Masukkan Nama :');
//     Callback(nama);
// }

// tampilkanPesan(nama => alert('halo, ${najmuddin}'));

//contoh sederhana Diatas bisa disebut synchronnous Callback

//contoh lain synchronnous Callback di bawah ini
// const mhs = [
//     {
//         "nama": "najmuddin ahmad",
//         "nrp": "098483377382",
//         "email": "kendil.lawas@gmail.com",
//         "jurusan": "sarjana ekonomi",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "ardiansyah",
//         "nrp": "098347757847",
//         "email": "ardi.syah@gamil.com",
//         "jurusan": "Sarjana hukum",
//         "idDosenWali": 2 
//     },
//     {
//         "nama": "eko prasetyo",
//         "nrp": "0993845573848",
//         "email": "eko.tyo@gmail.com",
//         "jurusan": "matematika",
//         "idDosenWAli": 2
//     }    
// ];
// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai');

// Promise / janji
// promise adalah object yang merepresentasikan keberasilan / kegagalan sebuah event yg asynchronous di masa yg akan datang.
// janji (terpenuhi / ingkar)
// states / keadaan ( fulfilled(terpenuhi) / rejected(ingkar) / pending)
// fungsi callback (resolve / reject / finally)
// aksi (then / cath)

// contoh Promise
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         resolve('janji telah ditepati!');
//     } else {
//         reject('ingkar janji..');
//     }
// });

// janji1
// .then(response => console.log('ok! : ' + response))
// .catch(response => console.log('not ok! : ' + response));

//Contoh Async await
// const coba = new Promise(resolve => {
//     setTimeout(()=> {
//         resolve('selesai')
//     },2000); 
// });
//console.log(coba);
//coba.then(() => console.log(coba));

function cobaPromise() {
    return new new Promise(resolve => {
        setTimeout(()=> {
            resolve('selesai')
        },2000); 
    });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba));

async function cobaAsync() {
    const coba = await cobaPromise();
    console.log(coba);
}

cobaAsync();
