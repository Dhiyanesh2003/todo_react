import { appendHTML } from "./appendHTML";

export const search = () => {
    const ele = document.getElementById("append");
    ele.innerHTML = `
            <tr>
                <th class="br-1">S.No</th>
                <th class="br-1">Task</th>
                <th>Actions</th>
            </tr>
        `;
    var countt = 0;

    for (let i = 1; i <= parseInt(localStorage.getItem("count")); i++) {
        const key = i.toString();
        const value = localStorage.getItem(key);
        let search = document.getElementById("search").value;

        if (search) {
            if (value) {
                if (value.includes(search)) {
                    countt++;
                    const newDiv = document.createElement('tr');
                    newDiv.setAttribute('id', key);
                    if (value.charAt(0) == '#' && !window.vpen) {
                        console.log("match")
                        newDiv.innerHTML =
                            `
                                <td class="ro1 br-1"><del>${countt}</del></td>
                                <td class="ro2 br-1"><del>${value.substring(1)}</del></td>
                                <td class="ro3">
                                    <button class="donee mr-1 mb-1" disabled><i class='bx bx-check'></i> Done</button>
                                    <button class="delete mb-1" onclick="deleteItem(${key})"><i class='bx bx-trash'></i> Delete</button>
                                </td>
                            `;
                    }
                    else if (value.charAt(0) != '#' && !window.vcom) {
                        newDiv.innerHTML =
                            `
                                <td class="ro1 br-1">${countt}</td>
                                <td class="ro2 br-1">${value}</td>
                                <td class="ro3">
                                    <button class="done mr-1 mb-1" onclick="done(${key})">Done <i class='bx bx-check'></i></button>
                                    <button class="edit mr-1 mb-1" onclick="editTask(${key})">Edit <i class='bx bxs-pencil'></i></button>
                                    <button class="delete mb-1" onclick="deleteItem(${key})">Delete <i class='bx bx-trash'></i></button>
                                </td>
                            `;
                    }

                    ele.appendChild(newDiv);
                }
            }
        }
        else {
            appendHTML();
        }
    }
};