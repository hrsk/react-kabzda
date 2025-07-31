import {useEffect} from "react";

type Props = {
    counter: number
    setCounter: () => void
    setViewMode: () => void
}

export const EffectTimeout = ({setViewMode, counter, setCounter}: Props) => {


    const increment = () => {
        setCounter()
    }

    const incrementCounter = () => {
        increment()
    }

    const viewModeHandler = () => {
        setViewMode()
    }

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            increment()
        }, 5000)

        return () => {
            clearTimeout(timeOutId) //TODO: удалит запущенный timer
            console.log('clear timeout', timeOutId)
        }

    }, [])

    console.log(counter)

    return (
        <div>
            <button onClick={viewModeHandler}>
                viewMode
            </button>
            <button onClick={incrementCounter}>+</button>
            {counter}
        </div>
    )
}
