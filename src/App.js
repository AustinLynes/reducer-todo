import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { reducer, initalState } from './reducers/reducer'
function App() {
  const [state, dispach] = useReducer(reducer, initalState);
  const [val, setVal] = useState({
    item: '',
    completed: false
  });
  const handleClick = () => {
    dispach({ type: 'ADD_TO_LIST', payload: val })
  }
  const handleClick2 = () => {
    dispach({ type: 'REMOVE_FROM_LIST'})
  }
  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='to-do name' name='item' onChange={event => { setVal({ ...val, [event.target.name]: event.target.value }) }} value={val.item} />
        <input type='submit' onClick={()=>handleClick()} value='add to List'></input>
        <button onClick={handleClick2}> remove completed</button>
        {
          state.map(item => {
            return (
              <div className='to-do'>
                <p>{item.item}</p>
                <input type='checkbox'/>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
