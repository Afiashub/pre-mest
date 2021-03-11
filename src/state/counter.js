import React, {useState} from 'react';


function Counter(){

    const [count, setCount] = useState(0)
    

    function sum(){

        setCount(count+1)
        
    }
    function Subtract(){

        setCount(count-1)
    }

    function show(){ 
        setCount(count = 'Hello world')


    }
    
    // const sum = () => {
    //     setCount(count+1)
    // }
    return (
        <div>

            <h1>Counter</h1>
    
            {count}


        <button onClick={sum}>Add</button>
        <button onClick={Subtract}>Subtract</button>
        <button onClick={show}>Display</button>
        </div>
    )

}
export default Counter;