ERROR HANDLING (penanganan kesalahan)

A.Error Handling Dalam Promise. Menggunakan Try dan Catch

Error Handling dalam promise dapat ditangkap menggunakan .then dan .catch seperti berikut

	function cobaPromise (){
	    return new Promise ((resolve, reject) =>{
		const waktu = 3000;
		if (waktu > 5000) {
		    setTimeout(() => {
			resolve('selesai');

		    },2000);
		}else {
		    reject('kelamaan!');
		}
	    })
	    
	}
	const coba = cobaPromise();
	coba
	    .then(() => console.log(coba))
	    .catch(err => console.error(err))

Hasilnya adalah reject yangmana erornya ditangkap oleh catch.

tetapi  Try dan Catch hanya bisa menangani kesalahan kode yang falid. contoh :

try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}

Bila ada kesalah seperti ini maka tidak bisa di tangani dengan Try dan Catch, kesalahan seperti ini bisa disebut (kesalahan runtime / kadang2 ("pengecualian")).


#Jenis Error (kesalahan)

Selain konstruktor Error generik, ada beberapa jenis error;

*EvalError (kesalahan evaluasi)
    Membuat instance yang mewakili kesalahan yang terjadi terkait fungsi global eval().

*RengeError
    Membuat instance yang mewakili kesalahan yang terjadi saat variabel numerik atau parameter berada di luar rentang validnya.

*ReferensiError
    Membuat instance yang mewakili kesalahan yang terjadi saat mereferensikan referensi yang tidak valid.

*SyntaxError (Kesalahan sintaks)
    Membuat instance yang mewakili kesalahan sintaks.

*TypeError
    Membuat instance yang mewakili kesalahan yang terjadi saat variabel atau parameter bukan tipe yang valid.

*URLError (kesalahan URI)
    Membuat instance yang mewakili kesalahan yang terjadi saat encodeURI() atau decodeURI() melewati parameter yang tidak valid.

*AgregatError
    Membuat instance yang mewakili beberapa kesalahan yang dibungkus dalam satu kesalahan ketika beberapa kesalahan perlu dilaporkan oleh suatu operasi, misalnya oleh Promise.any().

*InternalError Non-Standar
    Membuat instance yang mewakili kesalahan yang terjadi saat kesalahan internal di mesin JavaScript dilemparkan. Misalnya. "terlalu banyak rekursi".
