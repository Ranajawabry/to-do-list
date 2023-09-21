

const overlay = document.getElementById("overlay");

if(!window.localStorage){
    overlay.classList.add('overlay'); 
    window.alert('sorry your browser dose not support local storege')
}

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
              <button type="submit" class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>
              <button type="submit" class="btn btn-success ms-1" onclick="finishTask(${i})">Finished</button>
            </td>
          </tr>`
        }
        const result = document.getElementById('data');
        result.innerHTML= data;
    }
    
   const deleteTask= (i)=>{
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
       localStorage.setItem("tasks",JSON.stringify(tasks));
      
       Toastify({
        text: "task added successfully",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
       
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
        Toastify({
            text: "All tasks are deleted",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"
            },
            onClick: function(){} // Callback after click
          }).showToast();




       // background: 
    //transform:
        localStorage.clear("tasks");
        display();
    
    })
    display();





   



