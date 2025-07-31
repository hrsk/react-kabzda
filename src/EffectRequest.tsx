import {useEffect, useState} from "react";

export const EffectRequest = () => {

    const [counter, setCounter] = useState(1);

    console.log('render', counter)

    const increment = () => {
        setCounter(prevState => ++prevState)
    }

    useEffect(() => {

        const abortController = new AbortController()

        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`, {
            signal: abortController.signal
        }) .then(response => response.json())
            .then(json => console.log(json))

        return () => {
            console.log('clear', counter)
            abortController.abort()
        }
    }, [counter])
    return (
        <div>
            <button onClick={increment}>+</button>
        </div>
    )
}
