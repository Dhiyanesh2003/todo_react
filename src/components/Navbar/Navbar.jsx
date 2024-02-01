import React, { useEffect } from 'react'
import { appendHTML } from '../../functions/appendHTML';
import { search } from '../../functions/search';
import './Navbar.css'

const Navbar = () => {
  useEffect(() => {
    appendHTML()
  }, []);
  function showForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("name").value = "";
    var name = document.getElementById("name").focus();
  }
  return (
    <div className="d-flex-justify-content-between">
      <div className="d-flex">
        <i id='i' className='bx bxs-badge-check'></i>
        <h5>Todo List</h5>
      </div>
      <input type="text" name="search" id="search" onInput={ search } placeholder="Search" />
      <button id="new" onClick={showForm}><i className='bx bx-plus'></i>New</button>
    </div>
  )
}

export default Navbar