import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const course = {
    name: 'Half Stack application development',
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        }
    ]
}

ReactDOM.render(<App course={course}/>, document.getElementById('root'))