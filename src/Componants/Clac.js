import React, { useState, useEffect } from 'react'

function Clac() {
    const [counter, setCounter] = useState(0);

    // function inc() {
    //     setCounter(counter + 1)
    // };

    // const firstRun = React.useRef(true)
    // useEffect(() => {
    //     if (firstRun.current) {
    //         firstRun.current = false
    //     } else {
    //         alert("MADA MADA");
    //     }
    //     return () => {
    //         // cleanup
    //     }
    // }, [counter, firstRun]);
   
    const [val, setVal] = useState("ON");
    function toggle() {
        if (val == "ON") {
            setVal("OFF");
        }else{
            setVal("ON");
        }
    }

    return (
        <div className={'switch '+'switch-'+val}>
            {/* <p>{counter}</p> */}
            {/* <button onClick={inc}>inc</button>
            <br /> */}
            <button onClick={toggle}>{val}</button>
        </div>
    )
}

export default Clac
