import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
        <div>
            <p>{props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    const nimi = "Pekka"
    const age = 10
    return (
        <>
            <p>Greetings</p>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={nimi} age={age}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))