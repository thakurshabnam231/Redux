import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import{increment,decrement} from './actions/index'
import './App.css';

function App() {
 const myState= useSelector((state)=>state.changeNumber)
 const dispatch=useDispatch();
  return (
    <div class="container">
    <h1>increment/decrement counter using redux</h1>
     <div class="span">
     <button onClick={()=>dispatch(increment)}>
     <span>-</span></button>
     <input type="text" value={myState} ></input>
     <button  onClick={()=>dispatch(decrement)}>
     <span>+</span>
     </button>
     </div>
    </div>
    
  );
}

export default App;
