import { useState } from "react";



function Hooks() {

    const [count, setInsert] = useState(0);

    const handleInsert = () => {
        setInsert(count + 1);
    }
    const handleDecrice = () => {
        if(count > 0){
            setInsert(count - 1);
        }
    }
    const Reset = () => {
        setInsert(0);
    }

    console.log(count);

    return <div>

        <h1>Hooks</h1>
        <h1>{count}</h1>
        <button onClick={handleInsert}>+</button>
        <button onClick={handleDecrice}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>

}

export default Hooks;