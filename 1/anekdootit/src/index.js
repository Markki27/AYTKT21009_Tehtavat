import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const ShowAnecdote = ({title, anecdote, votes}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </div>
    )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = (props) => {
    const empty_array = new Array(anecdotes.length).fill(0)
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(empty_array)
    const [max, setMax] = useState(0)


    const setRandom = ({length}) => {
        return () => {
            const new_selected = Math.floor(Math.random() * length);
            setSelected(new_selected)
        }
    }

    const setVote = ({selected}) => {
        return () => {
            const copy = {...points}
            copy[selected] += 1
            setPoints(copy)

            // Loopataan pointsien joukosta se jolla on eniten pisteitä
            const max_key = Object.keys(copy).reduce(function (a, b) {
                return copy[a] > copy[b] ? a : b
            });
            setMax(max_key)
        }
    }

    return (
        <div>
            <ShowAnecdote title='Anecdote of the day' anecdote={props.anecdotes[selected]} votes={points[selected]}/>
            <Button onClick={setRandom(props.anecdotes)} text='Next anecdote'/>
            <Button onClick={setVote({selected})} text=' Vote for this anecdote!'/>
            <ShowAnecdote title='Anecdote with most votes' anecdote={props.anecdotes[max]} votes={points[max]}/>
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
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)