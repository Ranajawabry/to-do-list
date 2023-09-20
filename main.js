
const task = document.getElementById("form1");
const add = document.getElementById("add");
const getTasks= document.getElementById("getTasks");
const deleteAllTasks =document.getElementById("deleteAllTasks")
let tasks ;
if(localStorage.getItem('tasks')){
tasks = JSON.parse(localStorage.getItem('tasks'));
}
else{
    tasks = [];
}


const display = ()=>{
    let data = "";
    for( let i = 0 ; i<tasks.length ; i++){
        data += `
        <tr>
        <th scope="row">${i+1}</th>
        <td>${tasks[i].name}</td>
        <td>${tasks[i].status}</td>
        <td>
          <button type="submit" class="btn btn-danger" onClick="deleteTask(${i})">Delete</button>
          <button type="submit" class="btn btn-success ms-1" onClick="finishTask(${i})">Finished</button>
        </td>
      </tr>`
    }
    const result = document.getElementById('data');
    result.innerHTML= data;
}

const deleteTask = (i)=>{
   tasks.splice(i,1);
   localStorage.setItem("tasks",JSON.stringify(tasks));
   display();

}
const finishTask = (i)=>{
    tasks[i].status='finished';
    localStorage.setItem("tasks",JSON.stringify(tasks));
    display();
}


const clear = ()=>{
    task.value = "";
}
const addTask=(newTask)=>{
    tasks.push(newTask);
    localStorage.setItem('tasks',JSON.stringify(tasks));

    
    clear();
    display();

}
add.addEventListener("click",(e)=>{
    e.preventDefault();
    let newTask={
        name : task.value,
        status :"progress"
    }
    addTask(newTask);
})
getTasks.addEventListener('click',(e)=>{
    e.preventDefault();
    display();
})
deleteAllTasks.addEventListener('click',(e)=>{
    e.preventDefault();
    tasks = [];
    localStorage.clear("tasks");
    display();

})
display();