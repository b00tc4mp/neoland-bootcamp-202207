import React, {useState, useEffect} from "react";

//useState
// function App (){
//     const [counter, setCounter] = useState (0)
//     return (
//         <div className='App'>
//         <h1>{counter}</h1>
//         <button onClick={()=>setCounter(counter+1)}>+</button>
//         </div>
//     )
// }

// useEfect toma dependencias como 2do parametro
// function App (){

//   const [count, setCount]= useState(0)

//   []--> podemos poner el estado
// useEffect ( ()=>{
//   setCount (count+1)
// }, [])

//   return(
//     <div className="App">
//     <h1> {count}</h1>

//     </div>
//   )

// }

// export default App;

//useContext nos permite compartir datos sin necesidad de pasar propiedades

const themes = {
  light:{
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground:"#ffffff",
    background:"#222222"
  }
}
const ThemeContext = React.createContext(themes.light);
export default function App(){
  return (
    <ThemeContext.Provider value = {themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}
function Toolbar (props){
  return (
    <div>
      <ThemedButton />
    </div>
  )
}
function ThemedButton (){
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{background: theme.background, color: theme.foreground}}>
      I am styled by theme context
    </button>
  )
}
