import {useEffect, useState} from "react";

type Props = {
    setViewMode: () => void
}

export const EffectInterval = ({setViewMode}: Props) => {

    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(prevState => ++prevState)
    }

    const viewModeHandler = () => {
        setViewMode()
    }

    useEffect(() => {

        const intervalId = setInterval(() => {
            increment()
        }, 1000)

        return () => {
            clearInterval(intervalId) //TODO: удалит запущенный интервал
            console.log('clear setInterval', intervalId)
        }

    }, [])


    return (
        <div>
            <button onClick={viewModeHandler}>
                viewMode
            </button>
            {counter}
        </div>
    )
}
