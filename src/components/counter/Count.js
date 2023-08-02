import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      {/* //!# Code for Pointer Interaction /Mouse Interaction */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* //!# Code for Keyboard Interaction */}
      <input type="number" name='amount' value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <button onClick={() => setCount(amount)}>Set</button>

    </div>
  )
}

export default Count