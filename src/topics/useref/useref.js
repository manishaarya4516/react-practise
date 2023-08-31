import React, { useRef } from 'react'

export const UseRef = () => {
    const refContainer= useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(refContainer.current.value);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={refContainer}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
