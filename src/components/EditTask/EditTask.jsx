import React from 'react'
import './EditTask.css';

const EditTask = () => {
    return (
        <div>
            <div id="editForm" className="mb-4">
                <input className="mt-4 mb-3" type="text" name="name" id="editname" placeholder="Edit the task" />
                <br />
                {/* <button id="edit" onClick="edit()">Edit Task</button> */}
            </div>
        </div>
    )
}

export default EditTask