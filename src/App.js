
import './App.css';
import { useState } from "react";

import words from './wods.js';

function App() {

 
  const [data,setData] = useState(words);
  const changeHandler = (e)=>{
  
    setTimeout(()=>{
      let filteredWord = words.filter((w)=>{return w.startsWith(e.target.value)});
      console.log("word :  "+filteredWord);
      setData(filteredWord);
      
    })
   
  }
  return (
    <div className="App">
        <input type="text" onChange={changeHandler} />
       {
       data &&  data.map((dta)=>{
         return  <div>
            <p>{dta}</p>
            </div>
       })
      } 
     
    </div>
  );
}

export default App;
