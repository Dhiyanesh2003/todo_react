import React from 'react'
import './ShowList.css'
import TableList from '../TableList/TableList'
import { all } from '../../functions/all'
import { com } from '../../functions/com'
import { pen } from '../../functions/pen'

const ShowList = () => {
    return (
        <div className="showList mt-4">
            <div className="sort mb-2">
                <button id="all" onClick={ all }>All</button>
                <button id="com" onClick={ com }>Completed</button>
                <button id="pen" onClick={ pen }>Pending</button>
            </div>
            <TableList></TableList>
            {/* <table id="append">
                    <tr>
                        <th className="br-1">S.No</th>
                        <th className="br-1">Task</th>
                        <th>Actions</th>
                    </tr>
                </table> */}
        </div>
    )
}

export default ShowList