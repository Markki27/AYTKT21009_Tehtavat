import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {

    const courselist = () => courses.map(course =>
        <Course key={course.name} course={course}/>
    )

    return (
        <div>
            {courselist()}
        </div>
    )
}

export default App