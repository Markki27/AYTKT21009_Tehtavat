import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
    const courses = () => parts.map(part =>
        <Part key={part.id} name={part.name} amount={part.exercises}/>
    )

    return (
        <div>
            {courses()}
        </div>
    )
}

export default Content