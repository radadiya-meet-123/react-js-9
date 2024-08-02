import { useEffect, useState } from "react";


function LifeCycle() {

    const [click, setHandleClick] = useState(0);


    useEffect(() => {
        console.log("Create a Component");

        return () => {
            console.log("Delete a Component");
        }
    }, []);

    useEffect(()=>{

        console.log("Update a Component");

    } , [click]);

    const handleClick = ()=>{
        setHandleClick(click+1);
    }

    return <div>

        <h1>Life-Cycle</h1>
        <h1>{click}</h1>
        <button onClick={handleClick}>Click</button>
    </div>
}
export default LifeCycle;