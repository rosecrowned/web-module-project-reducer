import React, { useReducer } from 'react';
import reducer from './reducers/index';
import { initialState } from './reducers/index';
import { addMemory, addOne, applyNumber, changeOperation, clearDisplay, setMemory, clearMemory } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  
  const [state, dispatch] = useReducer(reducer, initialState)

  //setting up the +1
  // const handleAddOne = () => {
  //   dispatch(addOne(1))
  // }

  //setting up to handle all numerical inputs
  const handleApplyNumber = (num) => {
    dispatch(applyNumber(num))
  }

  //set up change of operations
  const handleOperationChange =(operation) => {
    dispatch(changeOperation(operation))
  }

  //clear display
  const handleClear = () => {
    dispatch(clearDisplay())
  }

  //set m+
  const handleSetMemory = (total) => {
    dispatch(setMemory(total))
  }

  //add memory to current total
  const handleAddTotal = (memory, total) => {
    dispatch(addMemory())
  }

  //clear memory back to 0 (initial state)
  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

    //testing outputs
    console.log(state)
    console.log(state.memory)
    console.log(state.operation)
    console.log(state.total)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleSetMemory} value={"M+"}/>
              <CalcButton onClick={handleAddTotal} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1}/>
              <CalcButton onClick={() => handleApplyNumber(2)} value={2}/>
              <CalcButton onClick={() => handleApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4}/>
              <CalcButton onClick={() => handleApplyNumber(5)} value={5}/>
              <CalcButton onClick={() => handleApplyNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7}/>
              <CalcButton onClick={() => handleApplyNumber(8)} value={8}/>
              <CalcButton onClick={() => handleApplyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperationChange('+')} value={"+"}/>
              <CalcButton onClick={() => handleOperationChange('*')} value={"*"}/>
              <CalcButton onClick={() => handleOperationChange('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
