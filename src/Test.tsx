import { useState } from "react";
import CancelButton from "./CancelButton";

function Test(){

    // render almak için değişken özel değişkene state
    // diyoruz ([a,setA]) formatında tanımlanır. 
    const [sayac,setSayac] = useState(0);
    // bir componetent için istedeiğimiz kadar sayıda
    // state kullanabiliriz.
    const [random,setRandom] = useState(0);

    const tiklat = () => {
        alert("Tıklandı")
        setSayac(sayac + 1); // sayac değiştirme
        setRandom(Math.random() * 1000);
    };

    console.log("..rendering");
    // return methodu her bir state değişiminde tetiklenir.
    // biz bu işelem render alma diyoruz.
    

    return <>
    <h1>Başlık</h1> 
    <p>
       Random: {random} 
    </p>
    <button onClick={tiklat}>Tıkla</button>
    <p>
        Sayac: {sayac}
    </p>
    <CancelButton color="red" name="İptal Butonu" />
    <CancelButton color="green" name="Geri Al Butonu" />
    </>

}


export default Test;