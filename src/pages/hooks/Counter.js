import React, { useContext, useReducer, useRef }from 'react';

import {CountContext} from './Example1';

function Counter() {
  const count = useContext(CountContext);
  return (
    <>
      <p>{count}</p>
      <ReducerDemo/>
    </>
  );
}

export function ReducerDemo(){
    const inputRef = useRef(null);
    const [ count , dispatch ] =useReducer((state,action)=>{
        switch(action){
            case 'add':
              return state + 1;
            case 'sub':
                return state-1;
            default:
                return state;
        }
    },0);
    const onButtonClick=()=>{
      console.log(inputRef.current.value);
      console.log(inputRef); //输出获取到的DOM节点
  };
    return (
       <div>
           <h2>现在的分数是{count.count}</h2>
           <button onClick={()=>dispatch('add')}>Increment</button>
           <button onClick={()=>dispatch('sub')}>Decrement</button>

           <input ref={inputRef} />
           <button onClick={onButtonClick}>get current value</button>
       </div>
    );

}

export default Counter;