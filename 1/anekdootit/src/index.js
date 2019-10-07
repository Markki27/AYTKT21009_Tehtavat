import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const empty_array = new Array(anecdotes.length).fill(0)
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(empty_array)

    const setVote = ({selected}) => {
        const copy = {...points}
        copy[selected] += 1
        setPoints(copy)
        console.log('points', copy)
    }

    return (
        <div>
            <p>{props.anecdotes[selected]}</p>
            <p> has {points[selected]} votes</p>

            <button onClick={ () => setSelected(Math.floor(Math.random() * anecdotes.length))}>
                Next anecdote
            </button>

            <button onClick={ () => setVote({selected}) }>
                Vote for this anecdote!
            </button>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)