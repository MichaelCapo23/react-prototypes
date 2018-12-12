import React from 'react'
import Table from './table'

export default () => {

const students = [
    {
        name: "Mike",
        course : "Python",
        grade: 88
    },
    {
        name: "James",
        course : "spotify API",
        grade: 100
    },
    {
        name: "Justen",
        course : "C++",
        grade: 97
    }

];


    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

