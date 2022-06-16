import React from "react";
import { useState } from "react";
// import { Form } from "react-bootstrap";

function Data (){
    const [Nama,setNama] = useState("");
    const [Daerah,setDaerah] =useState("");
    const [tahunMasuk, settahunMasuk] = useState ("");
    const [tahunKeluar, settahunKeluar] = useState ("");
    const [NoHp, setNoHp] = useState ("");
    const [Email, setEmail] = useState(""); 
    const [pesan, setPesan] = useState ("");

    let handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            let res = await fetch("https://2222-114-142-169-47.ap.ngrok.io/creat",{
                method: "POST",
                body:JSON.stringify({

                'Nama': Nama,
                'Daerah': Daerah,
                'Tahun Masuk': tahunMasuk,
                'tahunKeluar': tahunKeluar,
                'NoHp': NoHp,
                'Email': Email,

                }),
            });

             await res.json();
            if (res.status === 200){
                setNama("");
                setDaerah("");
                settahunMasuk("");
                settahunKeluar("");
                setNoHp("");
                setEmail("");
                setPesan ("Sukses");
            }else{
                setPesan (" Gagal");
            }
        }catch(err){
            console.log(err);
        }
    };
    return(
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={Nama}
                placeholder="Nama Lengkap"
                onChange={(e) => setNama (e.target.value)}
            />
                    <input
                type="text"
                value={Daerah}
                placeholder="Daerah"
                onChange={(e) => setDaerah (e.target.value)}
            />


                    <input
                type="text"
                value={tahunMasuk}
                placeholder="Tahun Masuk"
                onChange={(e) => settahunMasuk (e.target.value)}
            />

                    <input
                type="text"
                value={tahunKeluar}
                placeholder="Tahun Keluar"
                onChange={(e) => settahunKeluar (e.target.value)}
            />

                    <input
                type="text"
                value={NoHp}
                placeholder="No.Hp"
                onChange={(e) => setNoHp (e.target.value)}
            />
                    <input
                type="email"
                value={Email}
                placeholder="Email"
                onChange={(e) => setEmail (e.target.value)}
            />

            <button type="submit">Masukan</button>
            <div className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
            </form>

        </div>
    );
}
export default Data;