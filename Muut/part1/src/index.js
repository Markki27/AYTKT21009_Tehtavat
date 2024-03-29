import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

    const [ counter, setCounter ] = useState(0)
    const setToValue = (value) => setCounter(value)cd

    return (
        <div>
            <Display counter={counter}/>
            <Button
                onClick={() => setToValue(counter + 1)}
                text='plus'
            />
            <Button
                onClick={() => setToValue(counter - 1)}
                text='minus'
            />
            <Button
                onClick={() => setToValue(0)}
                text='zero'
            />
        </div>
    )
}

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


ReactDOM.render(
    <App />,
    document.getElementById('root')
)