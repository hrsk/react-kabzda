import {useEffect, useState} from "react";
import {EffectInterval} from "./EffectInterval.tsx";
import {EffectTimeout} from "./EffectTimeout.tsx";

export const EffectCounter = () => {

    const [viewModeCounter, setViewModeCounter] = useState(false);
    const [viewModeInterval, setViewModeInterval] = useState(false);
    const [viewModeTimeOut, setViewModeTimeOut] = useState(false);
    const [counter, setCounter] = useState(0);

    //TODO: useEffect принимает функцию callback и массив зависимостей,
    // функция callback вызывается в зависимости от переданных в массив зависимостей,
    // если массив пустой, то callback вызовется единожды при первой отрисовке компонента и больше не будет вызвываться
    // если не передать массив, то callback будет вызываться, каждый раз при рендере компоненты.

    useEffect(() => {
        console.log('effect', counter)

        // TODO: для того, чтобы зачистить данные, после окончания жизненного цикла компонента,
        //  необходимо сделать return из callback функции
        return () => {
            //зачищается передыдущее значени
            console.log('clear', counter)
        }
    }, [counter]) //TODO: useEffect будет срабатывать каждый раз, при изменении значения переданного в массив зависимостей


    const viewModeHandler = () => {
        setViewModeCounter(prevState => !prevState)
    }
    const viewModeHandlerInterval = () => {
        setViewModeInterval(prevState => !prevState)
    }
    const viewModeHandlerTimeOut = () => {
        setViewModeTimeOut(prevState => !prevState)
    }

    const incrementCounter = () => {
        setCounter(prevState => ++prevState)
    }

    return (
        <div>
            {
                viewModeCounter ? <Counter counter={counter} setCounter={incrementCounter}/> : <>
                    <span>i'm dumb component</span>
                    <button onClick={viewModeHandler}>view counter</button>
                </>
            }
            {
                viewModeInterval ? <EffectInterval setViewMode={viewModeHandlerInterval}/> : <>
                    <span>i'm dumb component</span>
                    <button onClick={viewModeHandlerInterval}>view interval</button>
                </>
            }
            {
                viewModeTimeOut ? <EffectTimeout counter={counter} setCounter={incrementCounter} setViewMode={viewModeHandlerTimeOut}/> : <>
                    <span>i'm dumb component</span>
                    <button onClick={viewModeHandlerTimeOut}>view timeout</button>
                </>
            }
        </div>
    )
}

type Props = {
    counter: number
    setCounter: () => void
}

export const Counter = ({counter, setCounter}: Props) => {
    return <>
        <span>counter: {counter}</span>
        <button onClick={setCounter}>increment</button>
    </>
}
