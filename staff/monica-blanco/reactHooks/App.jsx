// Hooks integrados => useState, useEffect, useContext
//Adicional useReducer, useCallback, useMemo, useRef, useImperativeHandle
// useLayoutEffect useDebugValue
import React, {useState} from "react";

function App (){
    const [counter, setCounter] = useState (0)
    return (
        <div className='App'>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        </div>
    )
}

export default App;