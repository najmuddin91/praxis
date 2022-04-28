const methodkucing = {
    makan: function (porsi){
        this.gembira += porsi;
        this.lelah -= porsi;

        console.log("Enak, pusy gembira");
    },
    bermain: function (jam) {
        this.lelah += jam;
        this.gembira += jam;

        console.log("pusy lelah");
    },
    begadang : function(jam){
        this.mengantuk += jam;
        console.log("pusy mengantuk");
    },
    tidur :function(jam){
        this.mengantuk -= jam;
        console.log("pusy sudah segar")
    }
};

function kucing (gembira,lelah,mengantuk){
    let kucing = Object.create(methodkucing);
    kucing.gembira = gembira;
    kucing.lelah = lelah;
    kucing.mengantuk = mengantuk;

    return kucing;
}

let pusy = kucing(10,7,5);
