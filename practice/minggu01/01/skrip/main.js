// // latihan if dan else
// // contoh yg keluar hasil if karena sesuai dengan perintah
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('saya memang suka coklat');
// } else {
//     alert('yaa, ya udalah..');
// }

// // contoh yg keluar hasil else karena tidak sesuai dengan perintah
// var a = 9;
// if (a < 7) {
//     alert( a + 'lebih kecil dari 7' );
// } else {
//     alert( 'coba lagi')
// }

// var jmlAngkot = 10;
// var angkotBerangkat = 6;

// for( var tidakBerangkat = 1; tidakBerangkat <= jmlAngkot; tidakBerangkat++ ) {

//     if(tidakBerangkat <= 6) {
//         console.log('angkot no.' + tidakBerangkat + ' angkot berangkat. ');
//     } else {
//         console.log('angkot no.' + tidakBerangkat + ' sedang ganggur. ')
//     }
// }

// di bawah ini  adalah contoh if dan else.
// if adalah jawaban benar (true)
// else adalah jawban lain (tapi masih dalam konteks)

// var angka = prompt('masukan angka');
// if(angka % 2 == 0) {
//     alert(angka + 'adalah bilangan genap');
// } else {
//     alert(angka + 'adalah bilang ganjil')
// }

// jadi berapan bilangan yg bisa di bagi 2 berarti true (if)
// bila bilangan tidak bisa di bagi menjadi 2 berarti (else)

// tapi bila yg dimasukan tidak berupa bilangan (huruf) maka yg akan keluar tetap else, tetapi tidak sesuai prosedur.
// jadi bila yg dimasukan adalah bukan angka (bilangan) itu berarti yg keluar adalah ( else if ). contoh..

// var angka = prompt('masukan angka');
// if(angka % 2 == 0) {
//     alert(angka + 'adalah bilangan genap');
// }else if(angka % 2 == 1) {
//     alert(angka + 'adalah bilang ganjil');
// }else {
//     alert('yang anda masukan bukan angka mazzeeh');
// }
