import { useState } from "react"


export default function Events() {

    // const [click, setClick] = useState("");

    const [name, setClick] = useState("");
    const [select, setSelect] = useState("");

    const [check, setCheck] = useState(false);


    const hanleClick = () => {
        alert("hyyyyy...........");
    }

    console.log(name);

    console.log(select);

    console.log(check)

    return <div>

        <div>
            <button onClick={hanleClick}>Click</button>
        </div>
        <br /><br />

        <input type="text" placeholder="Enter Your Name" onChange={(e) => setClick(e.target.value)} />
        <br /><br />

        <select onChange={(e) => setSelect(e.target.value)}>
            <option value="">Brands</option>
            <option value="puma">Puma</option>
            <option value="adiddas">Adiddas</option>
            <option value="nike">Nike</option>
        </select>

        <input type="checkbox" onChange={(e) => setCheck(!check)} />

    </div>
}