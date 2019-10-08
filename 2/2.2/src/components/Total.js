import React from 'react'

const Total = ({ parts }) => {
    let total = 0
    parts.map(part => total = total + part.exercises)

    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

export default Total