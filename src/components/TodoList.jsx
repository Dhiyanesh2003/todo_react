import React, { useState, useEffect, useRef } from 'react'
import './TodoList.css'

const TodoList = () => {

    const isInitial = useRef(true)

    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const [editVal, setEditVal] = useState('')

    const [editKey, setEditKey] = useState(0)
    let count = 0;

    const [myData, setMyData] = useState({});

    const [formData, setFormData] = useState({});

    useEffect(() => {
        const data = localStorage.getItem('myData');
        if (data) {
            setMyData(JSON.parse(data))
        }
    }, []);

    useEffect(() => {

        if (isInitial.current) {
            isInitial.current = false;
            return;
        }
        localStorage.setItem('myData', JSON.stringify(myData));
    }, [myData]);

    const newStyle = {
        fontSize: "30px",
        color: "green",
        marginRight: "10px"
    }

    const showForm = () => {
        setAdd(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMyData((prevD) => ({ ...prevD, [Object.keys(myData).length + 1]: formData.name }))
        setFormData((prev) => ({ ...prev, 'name': '' }))
        setAdd(false)
    }

    const handleEditChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleEdit = (e) => {
        e.preventDefault();
        // setEditVal(myData.editKey)
        setMyData((prevD) => ({...prevD, [editKey]: formData.edit}))
        setEdit(false)
        setFormData((prevD) => ({...prevD, [editKey]: null}))
    }

    const deleteItem = (key) => (e) => {
        e.preventDefault();
        setMyData((prevData) => ({...prevData, [key]: null}))
    }

    const editTask = (key) => (e) => {
        e.preventDefault();
        setEditKey(key);
        setEdit(true)
        setFormData((prevD) => ({...prevD, [key]: myData.key}))
    }

    const done = (key) => (e) => {
        setMyData((prevD) => ({...prevD, [key]: '#'+myData[key]}))
    }

    return (
        <>
            {/* <img id="profile" src={profile} alt="profile" onClick="showDetails()" />
            <div id="profile-info">
                <p>John Doe</p>
                <p>Intern, Delivery</p>
                <p>JMAN Group</p>
            </div> */}
            <div className="d-flex-justify-content-between">
                <div className="d-flex">
                    <i style={newStyle} className='bx bxs-badge-check'></i>
                    <h5>Todo List</h5>
                </div>
                {/* <input type="text" name="search" id="search" oninput="search()" placeholder="Search" /> */}
                <button id="new" onClick={showForm}><i className='bx bx-plus'></i>New</button>
            </div>
            <form onSubmit={handleSubmit} id="form" style={add ? { display: "block" } : { display: "none" }} className="mb-4">
                <input className="mt-4 mb-3" type="text" name="name" id="name" onChange={handleChange} placeholder="Enter the task" />
                <br />
                <button id="add" onClick={handleSubmit}>Add New Task</button>
            </form>
            <form onSubmit={handleEdit} id="editForm" style={edit ? { display: "block" } : { display: "none" }} className="mb-4">
                <input className="mt-4 mb-3" type="text" name="edit" id="editname" onChange={handleEditChange} placeholder="Edit the task" />
                <br />
                <button id="edit" onClick={handleEdit}>Edit Task</button>
            </form>
            <div className="showList mt-4">
                {/* <div className="sort mb-2">
                    <button id="all" onClick="alll()">All</button>
                    <button id="com" onClick="com()">Completed</button>
                    <button id="pen" onClick="pen()">Pending</button>
                </div> */}
                <table id="append">
                    <thead>
                        <tr>
                            <th className="br-1">Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(myData).map(([key, value]) => (
                                <>
                                    {value !== null && value.charAt(0) == "#" && !window.vpen ? (
                                        <tr key={key}>
                                            <td className="ro2 br-1"><del>{value.substring(1)}</del></td>
                                            <td className="ro3">
                                                <form onSubmit={deleteItem(key)}>
                                                    <button className="delete mb-1" onClick={deleteItem(key)}><i className='bx bx-trash'></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                    ) : null}
                                    {value !== null && value.charAt(0) != "#" && !window.vcom ? (
                                        <tr key={key}>
                                            <td className="ro2 br-1">{value}</td>
                                            <td className="ro3">
                                                <button className="done mr-1 mb-1" onClick={done(key)}><i className='bx bx-check'></i></button>
                                                <button className="edit mr-1 mb-1" onClick={editTask(key)}><i className='bx bxs-pencil'></i></button>
                                                <button className="delete mb-1" onClick={deleteItem(key)}><i className='bx bx-trash'></i></button>
                                            </td>
                                        </tr>
                                    ) : null}
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoList