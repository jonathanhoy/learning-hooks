import React, {useState} from 'react';
import RenderCount from './RenderCount';
import Button from './Button'

const CounterHooks = () => {
  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
 
  return (
    <div>
        <RenderCount count={count}/>
        <Button handleClick={decrease} symbol={'-'}/>
        <Button handleClick={increase} symbol={'+'}/>
    </div>
  )
}

export default CounterHooks