---- MEMAHAMI KODE HTML ---

1.membuat folder untuk menyimpan HTML dengan mengetik mkdir bulan1 
2.Membuka Vscode dan membuat folder dengan format js dan html 
3.membuat html dasar dengan cara klik shift 1 dan mengisi bagian bodynya <title> Document </title> hallo kamu

    Membuat link pada HTML sederhana

Klik disini! bagian ini masukkan kedalam bagian body.

    Terdapat beberapa kode dalam HTML yang tidak memasukkan penutup dan pembuka yaitu:
    ,
    , , , ------ JAVA SCRIPT ------

    Membuat folder bernama script

    membuat file main.js dan index.html

    Mencoba memahami dan memptaktikan variabel beserta operator javascript Penggunaan var dan operator penjumlahan contoh : 
    
    var a = 6;
    var b = 10;
    var c = a + b;

    console.log(c);

lalu di chek menggunakan node main.js di terminal akan muncul : najmuddin91@najmuddin91-Vostro-3401:~/Scripts$ node main.js 15

    Pengaplikasian variiabel dan operator javascript ke html menggunakan <script> </script> dan document.write(${a} - ${b} = ${c}); sehingga muncul :

<title>Percobaan</title> <script> 
<html>
 <body>
    var a = 10; 
    var b = 7; 
    var c = 3;
	c = a - b
	document.write(`${a} - ${b} = ${c}`);
    </script>
 </body>
</html>

perintah atau fungsi console.log() akan menampilkan pesan ke dalam console javascript. Sedangkan perintah document.write() berfungsi untuk menulis ke dokumen HTML, maka dia akan ditampilkan kesana.

5. CONDITIONAL

struktur kode yang digunakan untuk menguji apakah suatu ekspresi mengembalikan nilai true atau tidak. Bentuk kondisional yang sangat umum adalah pernyataan if ... else.

    let iceCream = ("strawberry"
    if(iceCream === ("strawberry") 
    console.log( "yay, saya suka ice cream stawberry!")
    else 
    console.log("Awwww, padahal ice cream yang ada hanya stawberry...")
 
6. MENGGUNAKAN KATA KUNCI CONTS PADA HTML
	    <!DOCTYPE html>
	<html>
	<body>

	<h1>JavaScript Variables</h1>

	<p>In this example, price, price2, and total are variables.</p>

	<p id="demo"></p>

	<script>
	const price1 = 5;
	const price2 = 6;
	let total = price1 + price2;
	document.getElementById("demo").innerHTML =
	"The total is: " + total;
	</script>

	</body>
	</html>

    MENGGUNAKAN CSS PADA HTML <style> body { background-color: darkseagreen; } h1 { color: black; text-align: center; } p { font-family: verdana; font-size: 20px; } </style>

    CONTOH PERTAMA CSS CUI

    Coba terus sampe ngebul

8.LATIHAN A.for loops for (let number = 0; number <= 12; number = number + 2) { console.log(number); }

Jika di run akan keluar 0, 2, 4, 6, 8, 10, 12

logiknya adalah diketahui number bernilai : 0, number kurang dari 12, number + 2. maka hasil yang akan keluar adalah 0 di tambah 2 dan berhenti saat number sudah 12 karena ada =>

B.Breaking Out of a Loop for (let current = 20; ; current = current + 1) { if (current % 7 == 0) { console.log(current); break; } }

Jika di run maka hasil yang muncul adalah 21. logiknya current yang diketahui adalah 20,current yang diketahui di+ dengan 1. dan ada clue yang mengahkan jawaban jika current dibagi 7 maka akan habis menjadi 0. break disini menunjukan kunci agar program tidak sampai pada infinite loop. Jika Anda menghapus pernyataan break itu atau Anda secara tidak sengaja menulis kondisi akhir yang selalu menghasilkan true, program Anda akan terjebak dalam infinite loop. Program yang terjebak dalam infinite loop tidak akan pernah selesai berjalan, yang biasanya merupakan hal yang buruk

C.Dispatching on a value with switch

	  switch (prompt("What is the weather like?")) {
	  case "rainy":
	    console.log("Remember to bring an umbrella.");
	    break;
	  case "sunny":
	    console.log("Dress lightly.");
	  case "cloudy":
	    console.log("Go outside.");
	    break;
	  default:
	    console.log("Unknown weather type!");
	    break;

}

D.Looping a triangle let abc = "abc"; console.log(abc.length);

Guna menulis length untuk mengetahui jumlah spring yang terdapat pada variable.



#JavaScript
JavaScript adalah bahasa pemrograman yang menambahkan interaktivitas ke situs web Anda.
JavaScript serbaguna dan ramah-pemula. Dengan lebih banyak pengalaman, Kita akan dapat membuat game, animasi grafis 2D dan 3D, aplikasi berbasis database yang komprehensif, dan banyak lagi!

