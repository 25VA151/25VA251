import React, { useState } from "react";
import "./App.css";
function App() {
 // State Variable
 const [count, setCount] = useState(0);
 // Increment Function
 const increment = () => {
 setCount(count + 1);
 };
 // Decrement Function
 const decrement = () => {
 setCount(count - 1);
 };
 // Reset Function
 const reset = () => {
 setCount(0);
 };
 return (
 <div className="container">
 <h1>React Counter App</h1>
 <div className="counter-box">
 <h2>{count}</h2>
 <div className="buttons">
 <button onClick={increment}>+</button>
 <button onClick={decrement}>-</button>
 <button onClick={reset}>Reset</button>
 </div>
 </div>
 </div>
 );
}
export default App;
App.css
body {
 margin: 0;
 padding: 0;
 font-family: Arial, sans-serif;
 background: #f4f4f4;
}
.container {
 text-align: center;
 margin-top: 100px;
}
.counter-box {
 background: white;
 width: 300px;
 margin: auto;
 padding: 30px;
 border-radius: 10px;
 box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
}
h1 {
 color: #333;}
h2 {
 font-size: 50px;
 color: #007bff;
}
.buttons button {
 margin: 10px;
 padding: 10px 20px;
 border: none;
 background: #007bff;
 color: white;
 font-size: 18px;
 border-radius: 5px;
 cursor: pointer;
}
.buttons button:hover {
 background: #0056b3;
}