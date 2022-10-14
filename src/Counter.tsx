import {
    ComponentType,
    FC,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    useEffect,
    useState
} from 'react'
import {CounterStats, getCounterStats} from '@sms77.io/counter'

export const Counter: FC<{
    Input: ComponentType<TextareaHTMLAttributes<any> | InputHTMLAttributes<any>>
}> = ({Input}) => {
    const [value, setValue] = useState('')
    const [counterStats, setCounterStats] = useState<CounterStats>()

    useEffect(() => {
        setCounterStats(getCounterStats(value))
    }, [value])

    return <>
        <Input
            onChange={e => setValue(e.target.value)}
            value={value}
        />

        <pre>{JSON.stringify(counterStats, null, 2)}</pre>
    </>
}