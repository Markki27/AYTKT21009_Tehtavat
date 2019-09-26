import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header title={course}/>
            <Content name={part1} amount={exercises1}/>
            <Content name={part2} amount={exercises2}/>
            <Content name={part3} amount={exercises3}/>
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Content = (props) => {
    return (
        <p>
            {props.name} {props.amount}
        </p>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))