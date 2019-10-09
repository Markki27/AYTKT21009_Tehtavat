import React from 'react'

const Total = ({ parts }) => {
    //let total = 0
    //parts.map(part => total += part.exercises)

    const total =
        parts.reduce( (s, p) => s + p.exercises,0)

    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

export default Total