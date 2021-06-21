import { useState } from "react"

export function Button(){
  // let counter = 0;
  const [counter, setCounter] = useState(0)

  function increment() {
    // counter += 1
    setCounter(counter + 10)
    console.log(counter)
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}