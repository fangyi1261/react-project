import React, { useState , useEffect } from 'react';

function Example(){
    const [ count , setCount ] = useState(0);
    return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={()=>{setCount(count+1);}}>click me</button>
          <br/>
      </div>
    );
}
export default Example;