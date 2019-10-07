import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <h1>{title}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({upvotes, neutralvotes, downvotes}) => {

    const all = upvotes + neutralvotes + downvotes
    const average_value = (upvotes*1 + neutralvotes*0 + downvotes*-1) / all
    const positive_percent = upvotes * 100 / all + " %"

    if (all === 0) {
        return (
            <>
            <p>No feedback given.</p>
            </>
        )
    }

    return (
        <>
            <h1>Statistics</h1>
            <Statistic text="Good" value={upvotes}/>
            <Statistic text="Neutral" value={neutralvotes}/>
            <Statistic text="Bad" value={downvotes}/>
            <Statistic text="All" value={all}/>
            <Statistic text="Average" value={average_value}/>
            <Statistic text="Positive" value={positive_percent}/>
        </>
    )
}

const Statistic = ({text, value}) => {
    return (
        <>
            <p>{text}: {value}</p>
        </>
    )
}

const App = () => {
    const [upvotes, setUpvote] = useState(0)
    const [neutralvotes, setNeutralvote] = useState(0)
    const [downvotes, setDownvote] = useState(0)

    const handleUpClick = () => {
        setUpvote(upvotes + 1)
    }

    const handleNeutralClick = () => {
        setNeutralvote(neutralvotes + 1)
    }

    const handleDownClick = () => {
        setDownvote(downvotes + 1)
    }

    return (
        <div>
            <Header title='Give feedback'/>
            <Button onClick={handleUpClick} text='Good vote'/>
            <Button onClick={handleNeutralClick} text='Neutral vote'/>
            <Button onClick={handleDownClick} text='Bad vote'/>
            <Statistics upvotes={upvotes} neutralvotes={neutralvotes} downvotes={downvotes} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))