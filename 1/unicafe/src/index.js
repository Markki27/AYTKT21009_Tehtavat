import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <h1>{title}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({upvotes, neutralvotes, downvotes}) => {

    return (
        <>
            <p>Good: {upvotes} <br/>
            Neutral: {neutralvotes}<br/>
            Bad: {downvotes}
            </p>
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