import React, { useState } from 'react'
import './NewTask.css';
import { addTask } from '../../functions/addTask'

const NewTask = () => {
    
    return (
        <div>
            <div id="form" className="mb-4">
                <input className="mt-4 mb-3" type="text" name="name" id="name" placeholder="Enter the task" />
                <br />
                <button id="add" onClick={addTask}>Add New Task</button>
            </div>
        </div>
    )
}

export default NewTask