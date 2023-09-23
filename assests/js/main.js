const overlay = document.getElementById("overlay"),
    task = (window.localStorage || (overlay.classList.add("overlay"), window.alert("sorry your browser dose not support local storege")), document.getElementById("form1")),
    add = document.getElementById("add"),
    getTasks = document.getElementById("getTasks"),
    deleteAllTasks = document.getElementById("deleteAllTasks");
let tasks;
tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
const display = () => {
        let s = "";
        for (let t = 0; t < tasks.length; t++)
            s += `
            <tr>
            <th scope="row">${t + 1}</th>
            <td>${tasks[t].name}</td>
            <td>${tasks[t].status}</td>
            <td>
              <button type="submit" class="btn btn-danger" onclick="deleteTask(${t})">Delete</button>
              <button type="submit" class="btn btn-success ms-1" onclick="finishTask(${t})">Finished</button>
            </td>
          </tr>`;
        document.getElementById("data").innerHTML = s;
    },
    deleteTask = (t) => {
        tasks.splice(t, 1), localStorage.setItem("tasks", JSON.stringify(tasks)), display();
    },
    finishTask = (t) => {
        (tasks[t].status = "finished"), localStorage.setItem("tasks", JSON.stringify(tasks)), display();
    },
    clear = () => {
        task.value = "";
    },
    addTask = (t) => {
        tasks.push(t),
            localStorage.setItem("tasks", JSON.stringify(tasks)),
            Toastify({
                text: "task added successfully",
                duration: 3e3,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: !0,
                close: !0,
                gravity: "top",
                position: "right",
                stopOnFocus: !0,
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
                onClick: function () {},
            }).showToast(),
            clear(),
            display();
    };
add.addEventListener("click", (t) => {
    t.preventDefault();
    t = { name: task.value, status: "progress" };
    addTask(t);
}),
    getTasks.addEventListener("click", (t) => {
        t.preventDefault(), display();
    }),
    deleteAllTasks.addEventListener("click", (t) => {
        t.preventDefault(),
            (tasks = []),
            Toastify({
                text: "All tasks are deleted",
                duration: 3e3,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: !0,
                close: !0,
                gravity: "top",
                position: "right",
                stopOnFocus: !0,
                style: { background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))" },
                onClick: function () {},
            }).showToast(),
            localStorage.clear("tasks"),
            display();
    }),
    display();
