

// string, number, boolean, primative type

import { useState } from "react"

type ButtonProps = {
    name:string
    color:string
}

// props -> componente ilk değerleri set etmek için kullanılan 
// bir yapıdır. 
// state != props değildir. State değişim component için useState
// özel durumu ile yönetilir. Functionlar ile tekrardan
// set edilebilir ama props öyle değil

// CancelButton btn = new CancelButton(); btn.setName("Button1"); btn.getName();

function CancelButton(props:ButtonProps) {


    // props.name = "Ali"; -> props değer ilgili component dışından
    // initialize edilirken verilebilir.


    const [name,setName] = useState(props.name);

    const changeName = (e:any) => {
        setName(e.target.value);
    }


    return <>
    <button style={{color:props.color}}>{name}</button>
    <input onInput={changeName} value={name} placeholder="button name dinamik değiştir." />
    
    </>
}

export default CancelButton;