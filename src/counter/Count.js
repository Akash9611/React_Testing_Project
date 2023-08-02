import React, { useState } from 'react'

const Count = () => {
 const [count, setCount] = useState(0);
  return (
    <div>
      {/* //!# Code for Pointer Interaction /Mouse Interaction */}
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

      {/* //!# Code for Keyboard Interaction */}

    </div>
  )
}

export default Count