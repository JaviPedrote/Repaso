import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    
    const [counter, setcounter] = useState(initialValue)



    return {
        counter,

        decrement: () => counter>0 ? setcounter(counter - 1) : setcounter(0),
        increment: () => setcounter(counter+1),
        reset: () => setcounter(initialValue),
    }
}
