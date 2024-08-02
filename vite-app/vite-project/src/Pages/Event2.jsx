import { useState } from "react";

let stu = null;

export default function Event2() {

    const [data, SetData] = useState(stu);

    const hanledelete = (item) => {
        console.log(item);
    }

    const loader = () =>{
        return <h1>Loading...</h1>
    }

    return <div>
        {
            data == null ? loader() :
            data.map((item) => {
                return <div key={item.id}>
                    <h2>{item.id}</h2>
                    <h3>{item.name}</h3>
                    <button onClick={() => hanledelete(item.id)}>Delete</button>
                </div>
            })
        }
    


    </div>
}