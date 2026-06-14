
import {useState} from "react"

function Rain() {
    let [count, setCount] = useState(0)
    
    const addValue = () => {
        setCount (count + 1) 
        console.log("values added", count)
    }
    const valueRemove = () => {

        if (count <= 0) {
          setCount(0)
        } else {
            
        setCount(count-1)
         console.log("value removed", count)
        }
       
    }

    return (
        <div>
            
            <h1>counter:{ count}</h1>
            <button onClick={addValue}>add</button>
            <br />
            <button onClick={valueRemove}>remove</button>

       </div>
    )
}
export default Rain