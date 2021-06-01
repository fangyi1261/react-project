import React, { useState } from 'react';

import './example.less';

function Example () {
  const [ count, setCount ] = useState(0); // 声明状态
  const [ name, setName] = useState('小红'); // 生命多状态
  const [ obj, setObj ] = useState({
    age: 12,
    message: 'Hello React'
  }); // 参数可以是对象，同时声明多个参数
  return (
    <div className="example">
      <p>{name} clicked <span>{count}</span> times.</p>
      <button onClick={() => {setCount(count + 1);}}>click me</button>
      <button onClick={() => {setCount(count - 1);}}>reset</button>
      <p>{obj.age} --- {obj.message}</p>
    </div>
  );
}

export default Example;